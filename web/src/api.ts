import socketIOClient from 'socket.io-client';

let socket: SocketIOClient.Socket | undefined;

const connect = (username: string) => {
  socket = socketIOClient('http://localhost:4000', {
    query: { username },
  });
};

export const api = {
  connect,
};
