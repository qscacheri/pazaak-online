"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GamesManager_1 = require("./GamesManager");
const queue = [];
const games = new Map();
const app = express_1.default();
app.set('port', process.env.PORT || 3000);
let http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        credentials: true,
    },
});
app.get('/', (_, res) => {
    res.send('hello');
});
const manager = new GamesManager_1.GamesManager(io);
io.on('connection', manager.socketHandler);
http.listen(4000, function () {
    console.log('listening on localhost:4000');
});
//# sourceMappingURL=index.js.map