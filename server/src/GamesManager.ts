import { Server, Socket } from 'socket.io';
import { Game } from './Game';
import { Player } from './types';
import { v4 as uuidv4 } from 'uuid';

const GAME_UPDATE = 'GAME_UPDATE';
const LOGIN = 'LOGIN';

export class GamesManager {
  games: Map<string, Game> = new Map<string, Game>();
  waitingRoom: Player[] = [];
  io: Server;

  constructor(io: Server) {
    this.io = io;
    this.socketHandler = this.socketHandler.bind(this);
    this.testEmit = this.testEmit.bind(this);
  }

  testEmit(name: string) {
    this.io.emit(name, { data: 'some data' });
  }

  socketHandler(socket: Socket) {
    console.log('hello');

    socket.on(LOGIN, () => this.onNewPlayer(socket));
  }

  async onNewPlayer(socket: Socket) {
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
