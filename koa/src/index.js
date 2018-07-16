import Koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import routes from './router';

const app = new Koa();
const isProduction = process.env.NODE_ENV !== 'development';

// 日志
!isProduction ? app.use(logger()) : '';

// koa-bodyparser
app.use(bodyParser());

// add router middleware:
app.use(routes());

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');
