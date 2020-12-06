import React from 'react';
import { generateSideDeck } from '../utils/generateSideDeck';
import { ConnectedMainDeck as MainDeck } from './MainDeck';
import { SideDeck } from './SideDeck';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

interface HandProps {
  playerDeck?: boolean;
  opponentDeck?: boolean;
}

export const Hand: React.FC<HandProps> = ({ playerDeck, opponentDeck }) => {
  return (
    <Container>
      <MainDeck playerDeck={playerDeck} opponentDeck={opponentDeck} />
      <SideDeck cards={generateSideDeck()} opponentDeck={opponentDeck} />
    </Container>
  );
};
