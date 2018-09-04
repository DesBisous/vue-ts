import url from 'url';

var messageIndex = 0;

function createMessage(type, user, data) {
  messageIndex++;
  return JSON.stringify({
    id: messageIndex,
    type: type,
    user: user,
    data: data
  });
}

function onConnect() {
  let user = this.user;
  let msg = createMessage('enter', user, `${user.name} Enter Room.`);
  this.wss.broadcast(msg);
  // build user list:
  let users = this.wss.clients.map(function(client) {
    return client.user;
  });
  this.send(createMessage('users', user, users));
}

function onMessage(message) {
  if (message && message.trim()) {
    const msg = createMessage('chat', this.user, message.trim());
    this.wss.broadcast(msg);
  }
}

function onClose() {
  let user = this.user;
  let msg = createMessage('leave', user, `${user.name} Leave Room.`);
  this.wss.broadcast(msg);
}

function onError(err) {
  console.log('[WebSocket] error: ' + err);
};

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
  wss.on('connection', function(ws, req) {
    // ws.upgradeReq是一个request对象:
    let location = url.parse(req.url, true);
    console.log('[WebSocketServer] connection: ' + location.href);
    ws.on('message', onMessage);
    ws.on('close', onClose);
    ws.on('error', onError);
    // 如果接收到 webSocket 请求，但不是 chat 聊天模块的，关闭改请求
    if (location.pathname !== '/ws/chat') {
      // close ws:
      ws.close(4000, 'Invalid URL');
    }

    // const user = ws.upgradeReq.user;
    ws.user = {
      id: 1,
      name: 'Benson',
    };
    ws.wss = wss;
    // 连接成功后的 自定义回调
    onConnect.apply(ws);
  });
  console.log('WebSocketServer was attached.');
  return wss;
}

export default createWebSocketServer;
