import {
  ADD_CARD_TO_MAINDECK,
  GameAction,
  GameStateType,
  INCREASE_WINS,
} from './types';

const initialState: GameStateType = {
  player: {
    hand: {
      mainDeck: [],
      sideDeck: [],
    },
    wins: 0,
  },
  opponent: {
    hand: {
      mainDeck: [],
      sideDeck: [],
    },
    wins: 0,
  },
};

export const gameStateReducer = (
  state: GameStateType = initialState,
  action: GameAction
) => {
  switch (action.type) {
    case INCREASE_WINS:
      if (action.payload.player === 'me') {
        return {
          ...state,
          player: {
            ...state.player,
            wins: state.player.wins + 1,
          },
        };
      } else {
        return {
          ...state,
          opponent: {
            ...state.opponent,
            wins: state.opponent.wins + 1,
          },
        };
      }
    case ADD_CARD_TO_MAINDECK:
      if (action.payload.player === 'me') {
        return {
          ...state,
          player: {
            ...state.player,
            hand: {
              ...state.player.hand,
              mainDeck: [...state.player.hand.mainDeck, action.payload.card],
            },
          },
        };
      } else {
        return {
          ...state,
          opponent: {
            ...state.opponent,
            hand: {
              ...state.opponent,
              mainDeck: [...state.opponent.hand.mainDeck, action.payload.card],
            },
          },
        };
      }
    default:
      return state;
  }
};
