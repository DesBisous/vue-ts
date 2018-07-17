import axios from './config';

export const post = (url: string, data: any) => {
  return axios({ method: 'post', url, data });
};

export const get = (url: string) => {
  return axios({ method: 'get', url });
};

export const remove = (url: string, data: any) => {
  return axios({ method: 'delete', url, data });
};
