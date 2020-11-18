"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
    constructor(id, player1, player2) {
        this.id = id;
        this.players = [player1, player2];
        const hands = new Map();
        hands.set(this.players[0].id, { mainDeck: [], sideDeck: [] });
        hands.set(this.players[1].id, { mainDeck: [], sideDeck: [] });
        this.state = {
            currentPlayerTurn: this.players[0],
            hands,
        };
    }
    update(newState) {
        Object.assign(this.state, newState);
    }
}
exports.Game = Game;
//# sourceMappingURL=Game.js.map