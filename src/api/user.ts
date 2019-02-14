import { get } from './config';

const user = {
  findAllUser: () => get('/findAllUser'),
};

export default user;
