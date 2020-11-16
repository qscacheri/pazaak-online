export type CardOperator = 'plus' | 'minus' | 'plus-minus';

export type CardType = {
  type: CardOperator;
  value: number;
  isMainDeck: boolean; // the green ones
};
