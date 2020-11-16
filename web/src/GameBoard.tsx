import React from 'react';
import styled from 'styled-components';
import { ConnectedMainDeck as MainDeck } from './components/MainDeck';

interface GameBoardProps {}

const Container = styled.div`
  width: 90%;
  padding: 5%;
  background: linear-gradient(
    20deg,
    rgba(63, 63, 61, 1) 0%,
    rgba(106, 106, 99, 1) 100%
  );
`;
const GridContainer = styled.div`
  border: 2px solid #3f3f3d;
  border-radius: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(250px, auto);
  grid-template-areas:
    'player-deck opponent-deck'
    'player-deck opponent-deck';
`;

export const GameBoard: React.FC<GameBoardProps> = ({}) => {
  return (
    <Container className="GameBoard">
      <GridContainer>
        <MainDeck playerDeck />
        <MainDeck opponentDeck />
      </GridContainer>
    </Container>
  );
};

export default GameBoard;
