import express from 'express';
import cors from 'cors';
import { GAME_UPDATE } from './types';

const app = express();
app.set('port', process.env.PORT || 3000);

let http = require('http').Server(app);
// set up socket.io and bind it to our
// http server.
const io = require('socket.io')(http, {
  cors: {
    origin: 'https://example.com',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

app.get('/', (_: any, res: any) => {
  res.send('hello');
});

// whenever a user connects on port 3000 via
// a websocket, log that a user has connected
io.on('connection', function (socket: any) {
  console.log('a user connected');
  socket.on(GAME_UPDATE, () => {});
});

const server = http.listen(4000, function () {
  console.log('listening on localhost:4000');
});
