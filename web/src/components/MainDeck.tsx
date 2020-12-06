import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { MAIN_DECK_NUM_CARDS } from '../contants';
import { StateType } from '../redux/store';
import { CardType } from '../types';
import { Card } from './Card';

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const Container = styled.div<{ playerDeck?: boolean; opponentDeck?: boolean }>`
  width: 100%;
  grid-area: ${({ opponentDeck }) =>
    opponentDeck ? 'opponent-deck' : 'player-deck'};
  position: relative;
`;

const Username = styled.div<{ playerDeck?: boolean; opponentDeck?: boolean }>`
  width: 95%;
  box-sizing: border-box;
  background: #242c3d;
  color: white;
  margin-left: ${({ opponentDeck }) => (opponentDeck ? 'auto' : '0')};
  border-top-left-radius: ${({ opponentDeck }) =>
    opponentDeck ? '0' : '20px'};
  border-top-right-radius: ${({ opponentDeck }) =>
    opponentDeck ? '20px' : '0'};
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
  const renderCards = useCallback(() => {
    const cardElements: JSX.Element[] = [];
    for (let i = 0; i < MAIN_DECK_NUM_CARDS; i++) {
      if (cards[i]) {
        cardElements.push(
          <Card key={username + 'main-deck-' + i} card={cards[i]} />
        );
      } else {
        cardElements.push(<Card key={username + 'main-deck-' + i} />);
      }
    }
    return cardElements;
  }, [cards]);

  return (
    <Container
      className="MainDeck"
      playerDeck={playerDeck}
      opponentDeck={opponentDeck}
    >
      <Username playerDeck={playerDeck} opponentDeck={opponentDeck}>
        {username}
      </Username>
      <CardsContainer>{renderCards()}</CardsContainer>
    </Container>
  );
};

export const ConnectedMainDeck = connect(mapStateToProps)(MainDeck);
