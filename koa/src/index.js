import Koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';
import ws from 'ws';
import webSocket from './webSocket';
import corsConfig from './corsConfig';
import routes from './router';

const WebSocketServer = ws.Server;
const app = new Koa();
const isProduction = process.env.NODE_ENV !== 'development';

// 日志
!isProduction ? app.use(logger()) : '';

// CORS 跨域配置
app.use(cors(corsConfig));

// koa-bodyparser
app.use(bodyParser());

// add router middleware:
app.use(routes());

// 在端口3000监听:
const server = app.listen(3000);
console.log('koa 服务启动成功!');
app.wss = webSocket(server, WebSocketServer);
console.log('app http 服务启动成功! port: 3000...');
