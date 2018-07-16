import axios from 'axios';
import qs from 'qs';
import router from '../router';

export const getToken = () => {
  const token = window.localStorage.token;
  if (token) {
    return token;
  }
  return null;
};

const requestHeaders = {
  'Accept': 'application/json;charset=UTF-8',
  'Content-Type': 'application/json;charset=UTF-8',
};

// 全局配置
axios.defaults.timeout = 3000;
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://127.0.0.0:3000/' : 'http://localhost:3000/';
// axios.defaults.headers.post['Accept'] = 'application/json;charset=UTF-8';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// http request 拦截器
axios.interceptors.request.use(
  (config: any) => {
    config.headers['X-User-Token'] = getToken();
    if (config.method  === 'post') {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  (err: any) => {
    return Promise.reject(err);
  },
);

// http response 拦截器
axios.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          window.localStorage.removeItem('token');
          break;
        default: break;
      }
    }
    return Promise.reject(error);
  },
);

export default axios;
