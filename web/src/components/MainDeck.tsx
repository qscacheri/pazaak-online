import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { StateType } from '../redux/store';
import { CardType } from '../types';
import { Card } from './Card';

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

const Container = styled.div<{ playerDeck?: boolean; opponentDeck?: boolean }>`
  grid-area: ${({ opponentDeck }) =>
    opponentDeck ? 'opponent-deck' : 'player-deck'};
`;

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
      {username}
      {cards.map((card, i) => (
        <Card key={username + 'main-deck-' + i} {...card} />
      ))}
    </Container>
  );
};

export const ConnectedMainDeck = connect(mapStateToProps)(MainDeck);
