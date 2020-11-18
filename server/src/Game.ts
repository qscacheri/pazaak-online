import { Socket } from 'socket.io';
import { Player } from './types';

export type CardOperator = 'plus' | 'minus' | 'plus-minus';

export type CardType = {
  type: CardOperator;
  value: number;
  isMainDeck: boolean; // the green ones
};

export type Hand = {
  mainDeck: CardType[];
  sideDeck: CardType[];
};

export type GameState = {
  currentPlayerTurn: Player;
  hands: Map<string, Hand>;
};

export class Game {
  id: string;
  players: Player[];
  state: GameState;
  socket: Socket;

  constructor(id: string, player1: Player, player2: Player) {
    this.id = id;
    this.players = [player1, player2];

    const hands = new Map<string, Hand>();

    hands.set(this.players[0].id, { mainDeck: [], sideDeck: [] });
    hands.set(this.players[1].id, { mainDeck: [], sideDeck: [] });

    this.state = {
      currentPlayerTurn: this.players[0],
      hands,
    };
  }

  update(newState: GameState) {
    Object.assign(this.state, newState);
  }
}
