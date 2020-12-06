import { useEffect } from 'react';
import { Socket as SocketIO } from 'socket.io-client';
type SocketSubscriptionCallbackMap = { [key: string]: (data: any) => void };

export const useSocket = (
  socket: typeof SocketIO,
  subscriptions: SocketSubscriptionCallbackMap,
  dependencies?: React.DependencyList
) => {
  useEffect(() => {
    //   loop through all the keys the from the subscriptions object, add socket.on(key)
    // socket.on(gameEvent, function (data) {
    Object.keys(subscriptions).forEach((key) => {
      socket.on(key, subscriptions[key]);
    });
  }, dependencies);
};
