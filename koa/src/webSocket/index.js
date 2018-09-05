import url from 'url';

var messageIndex = 0;

function cookiesUser(req) {
  if (!req) {
    return null;
  }
  console.log(req.headers.cookie);
}

// 创建消息
function createMessage(type, user, data) {
  messageIndex++;
  return JSON.stringify({
    id: messageIndex,
    type: type, // 消息类型
    user: user,
    data: data, // {type: 数据类型}
  });
}

// 连接后回调
function onConnect() {
  let user = this.user;
  let msg = createMessage('enter', user, {type: 'text', meg: `${user.name} Enter Room.`});
  this.wss.broadcast(msg);
  // this.wss.clients 返回的是 Set 对象 可以使用 forEach 遍历或者使用 Array.from 将Set 转化为 Array
  let users = Array.from(this.wss.clients).map(function(client) {
    return client.user;
  });
  this.send(createMessage('users', user, {type: 'text', meg: users}));
}

// 监听客户端消息
function onMessage(message) {
  if (message && message.trim()) {
    const msg = createMessage('chat', this.user, JSON.parse(message.trim()));
    this.wss.broadcast(msg);
  }
}

// 客户端关闭 webSocket
function onClose() {
  let user = this.user;
  let msg = createMessage('leave', user, `${user.name} Leave Room.`);
  this.wss.broadcast(msg); // 当某一个 client 关闭 webSocket 的时候， 广播给其他所有 client
}

// webSocket 连接异常
function onError(err) {
  console.log('[WebSocket] error: ' + err);
};

// 创建 webSocket 服务器
function createWebSocketServer(server, WebSocketServer) {
  //创建WebSocketServer:
  const wss = new WebSocketServer({
    server: server,
  });
  // 聊天功能：在接收到信息后，将消息广播发送到 webSocket 所有绑定的 client
  wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
      client.send(data);
    });
  };
  wss.on('connection', function(client, req) {
    let location = url.parse(req.url, true);
    client.on('message', onMessage);
    client.on('close', onClose);
    client.on('error', onError);
    // 如果接收到 webSocket 请求，但不是 chat 聊天模块的，关闭改请求
    if (location.pathname !== '/ws/chat') {
      client.close(4000, 'Invalid URL');
    }
    cookiesUser(req);
    client.user = {
      id: 1,
      name: 'Benson',
    };
    client.wss = wss;
    // 连接成功后的 自定义回调
    onConnect.apply(client);
  });
  console.log('webSocket 服务器启动成功!');
  return wss;
}

export default createWebSocketServer;
