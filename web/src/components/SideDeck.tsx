import React from 'react';
import styled from 'styled-components';
import { CardType } from '../types';
import { Card } from './Card';

const Container = styled.div`
  border: 2px solid #242c3d;
  border-radius: 20px;
  display: flex;
`;

interface SideDeckProps {
  cards: CardType[];
  opponentDeck?: boolean;
}

export const SideDeck: React.FC<SideDeckProps> = ({ cards, opponentDeck }) => {
  return (
    <Container>
      {cards.map((card, i) => (
        <Card key={'side-deck-' + i} card={opponentDeck ? undefined : card} />
      ))}
    </Container>
  );
};
