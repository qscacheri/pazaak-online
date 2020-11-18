import express from 'express';
import { Server, Socket } from 'socket.io';
import { Game } from './Game';
import { GAME_UPDATE, Player } from './types';
import { GamesManager } from './GamesManager';
const queue: Player[] = [];
const games: Map<string, Game> = new Map<string, Game>();

const app = express();
app.set('port', process.env.PORT || 3000);

let http = require('http').Server(app);
// set up socket.io and bind it to our
// http server.
const io: Server = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

app.get('/', (_: any, res: any) => {
  res.send('hello');
});

const manager = new GamesManager(io);
io.on('connection', manager.socketHandler);

http.listen(4000, function () {
  console.log('listening on localhost:4000');
});
