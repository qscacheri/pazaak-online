import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { StateType } from '../redux/store';
import { CardType } from '../types';
import { Card } from './Card';

const Container = styled.div<{ playerDeck?: boolean; opponentDeck?: boolean }>`
  grid-area: ${({ opponentDeck }) =>
    opponentDeck ? 'opponent-deck' : 'player-deck'};
  position: relative;
`;

const Username = styled.div<{ playerDeck?: boolean; opponentDeck?: boolean }>`
  width: 75%;
  padding: 2%;
  background: black;
  color: #ffe81f;
  border-top-left-radius: ${({ opponentDeck }) =>
    opponentDeck ? '0' : '20px'};
  border-top-right-radius: ${({ opponentDeck }) =>
    opponentDeck ? '20px' : '0'};
  position: absolute;
  right: ${({ opponentDeck }) => (opponentDeck ? '0' : '')};
`;

const mapStateToProps = (
  state: StateType,
  ownProps: { opponentDeck?: boolean }
) => ({
  username: state.user.username,
  cards: ownProps.opponentDeck
    ? state.game.opponent.hand.mainDeck
    : state.game.player.hand.mainDeck,
});

interface MainDeckProps {
  username: string;
  playerDeck?: boolean;
  opponentDeck?: boolean;
  cards: CardType[];
}

export const MainDeck: React.FC<MainDeckProps> = ({
  username,
  playerDeck = true,
  opponentDeck,
  cards,
}) => {
  return (
    <Container
      className="MainDeck"
      playerDeck={playerDeck}
      opponentDeck={opponentDeck}
    >
      <Username playerDeck={playerDeck} opponentDeck={opponentDeck}>
        {username}
      </Username>
      {cards.map((card, i) => (
        <Card key={username + 'main-deck-' + i} {...card} />
      ))}
    </Container>
  );
};

export const ConnectedMainDeck = connect(mapStateToProps)(MainDeck);
