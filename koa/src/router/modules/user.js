import { User } from '../../mysql/models/User';

const user =  async (ctx, next) => {
  await next();
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>Hello, koa2!</h1>';
};

const findAllUser =  async (ctx, next) => {
  const users = await User.findAll();
  ctx.response.status = 200;
  ctx.response.type = 'application/json';
  if (users) {
    ctx.response.body = JSON.stringify(users);
  } else {
    ctx.response.body = '查询失败！';
  }
};

module.exports = [
    {
      method: 'GET',
      path: '/user',
      func: user
    },
    {
      method: 'GET',
      path: '/findAllUser',
      func: findAllUser
    },
]
