import { Hand } from '../redux/game/types';
import { CardOperator, CardType } from '../types';

const randomOp = (): CardOperator => {
  let num = Math.ceil(Math.random() * 5);
  if (num > 0 && num < 2) return '+';
  else if (num > 2 && num < 4) return '-';
  else return '+-';
};

export const generateSideDeck = () => {
  const sideDeck: CardType[] = [];
  for (let i = 0; i < 4; i++) {
    const value = Math.floor(Math.random() * 7);
    const type = randomOp();
    sideDeck.push({
      value,
      type,
      isMainDeck: false,
    });
  }
  return sideDeck;
};
