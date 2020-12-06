export type CardOperator = '+' | '-' | '+-';

export type CardType = {
  type: CardOperator;
  value: number;
  isMainDeck: boolean; // the green ones
};
