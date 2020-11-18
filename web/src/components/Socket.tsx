import React, { createContext, useContext, useState } from 'react';
import { Socket as SocketIO } from 'socket.io-client';

type SocketContextType = {
  socket: typeof SocketIO | null;
  setSocket: (socket: typeof SocketIO) => void;
};

const SocketContext = createContext({} as SocketContextType);

export const Socket: React.FC = ({ children }) => {
  const [socket, setSocket] = useState<typeof SocketIO | null>(null);

  return (
    <SocketContext.Provider
      value={{
        socket,
        setSocket: (socket: typeof SocketIO) => setSocket(socket),
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  return useContext(SocketContext);
};
