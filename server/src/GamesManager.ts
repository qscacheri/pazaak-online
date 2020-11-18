import { Server, Socket } from 'socket.io';
import { Game } from './Game';
import { Player } from './types';
import { v4 as uuidv4 } from 'uuid';

export class GamesManager {
  games: Map<string, Game> = new Map<string, Game>();
  waitingRoom: Player[] = [];
  io: Server;

  constructor(io: any) {
    this.io = io;
    this.socketHandler = this.socketHandler.bind(this);
  }

  socketHandler(socket: Socket) {
    this.onNewPlayer(socket);
    socket.on('GAME_UPDATE', this.onGameUpdate);
  }

  async onNewPlayer(socket: Socket) {
    console.log('new player...');
    socket.emit('TEST');

    this.waitingRoom.push({
      username: (socket.handshake.query as any).username,
      id: socket.id,
    });
    if (this.waitingRoom.length % 2 === 0) {
      const player1 = this.waitingRoom.pop()!;
      const player2 = this.waitingRoom.pop()!;
      const gameId = uuidv4();
      this.games.set(gameId, new Game(gameId, player1, player2));
      this.io.sockets.sockets.get(player1.id)?.join(gameId);
      this.io.sockets.sockets.get(player2.id)?.join(gameId);

      socket.to(gameId).emit('GAME_JOINED');
    }
  }

  onGameUpdate() {}
}
