import socketIOClient from 'socket.io-client';

let socket: SocketIOClient.Socket | undefined;

const connect = () => {
  return (socket = socketIOClient('http://localhost:4000'));
};

export const api = {
  connect,
};
