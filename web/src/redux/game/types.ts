import { CardType } from '../../types';

export type Hand = {
  mainDeck: CardType[];
  sideDeck: CardType[];
};

export type GameStateType = {
  player: {
    hand: Hand;
    wins: number;
  };
  opponent: {
    hand: Hand;
    wins: number;
  };
};

export type PlayerType = 'me' | 'them';

export const INCREASE_WINS = 'INCREASE_WINS';
export type IncreaseWinsAction = {
  type: typeof INCREASE_WINS;
  payload: { player: PlayerType };
};

export const ADD_CARD_TO_MAINDECK = 'ADD_CARD_TO_MAINDECK';
export type AddCardToMaindeckAction = {
  type: typeof ADD_CARD_TO_MAINDECK;
  payload: { card: CardType; player: PlayerType };
};

export type GameAction = IncreaseWinsAction | AddCardToMaindeckAction;
