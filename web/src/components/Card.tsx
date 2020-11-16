import React from 'react';
import { CardType } from '../types';

export const Card: React.FC<CardType> = ({ type, value }) => {
  return <div>{type + value}</div>;
};
