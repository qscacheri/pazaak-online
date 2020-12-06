import React from 'react';
import styled from 'styled-components';
import { Hand } from './Hand';

interface GameBoardProps {}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;
  box-sizing: border-box;
  background: #d1d7e3;
  /* background: linear-gradient(
    20deg,
    rgba(0, 13, 39, 1) 0%,
    rgba(35, 44, 60, 1) 100%
  ); */
`;
const GridContainer = styled.div`
  border: 2px solid #242c3d;
  border-radius: 20px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(250px, auto);
`;

export const GameBoard: React.FC<GameBoardProps> = () => {
  return (
    <Container className="GameBoard">
      <GridContainer>
        <Hand playerDeck />
        <Hand opponentDeck />
      </GridContainer>
    </Container>
  );
};

export default GameBoard;
