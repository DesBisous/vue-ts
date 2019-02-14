import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
import router from '@/router';
import { getToken, removeToken } from '@/lib/storage';

// 全局配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.headers.post['Accept'] = 'application/json;charset=UTF-8';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// http request 拦截器
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (getToken()) {
      config.headers['X-User-Token'] = getToken();
    }
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  },
);

// http response 拦截器
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (err: AxiosError) => {
    // 根据后台返回的状态，能够拿到状态值，通过 err.response.status
    if (err.response) {
      switch (err.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          removeToken();
          break;
        default: break;
      }
    }
    return Promise.reject(err);
  },
);

export default axios;
