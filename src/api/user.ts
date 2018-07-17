import { post, get } from './config';
// get('/findAllUser')

const user = {
  findAllUser: () => get('/findAllUser'),
};

export default user;
