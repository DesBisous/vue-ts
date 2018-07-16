import axios from './config';

export const post = (url: string, data: any) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      data,
    })
    .then((response: any) => response.json())
    .then((json: string) => resolve(json))
    .catch((err: any) => reject(err));
  });
};
