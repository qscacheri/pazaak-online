import React from 'react';
import { CardOperator, CardType } from '../types';
import styled from 'styled-components';

const ContentContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const BaseContainer = styled.div`
  margin: 12px auto;
  width: 75px;
  height: 100px;
  border-radius: 5px;
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-direction: vertical;
  background: #b7bcc7;
`;

const Container = styled(BaseContainer)<{ type: CardOperator }>`
  border: none;
  background: ${({ type }) => {
    if (type === '+')
      return 'linear-gradient(90deg, rgba(135,162,218,1) 0%, rgba(0,85,255,1) 50%, rgba(135,162,218,1) 100%)';
    else if (type === '-')
      return 'linear-gradient(90deg, rgba(215,149,149,1) 0%, rgba(253,29,29,1) 50%, rgba(215,149,149,1) 100%)';
    else
      return 'linear-gradient(90deg, rgba(221,214,158,1) 0%, rgba(255,232,31,1) 50%, rgba(221,214,158,1) 100%)';
  }};
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  margin: 0 auto;
`;

const Number = styled.div`
  width: 100%;
  background: black;
  color: white;
`;

interface CardProps {
  card?: CardType;
}
export const Card: React.FC<CardProps> = ({ card }) => {
  if (!card) return <BaseContainer />;

  const { type, value } = card;
  return (
    <Container type={type}>
      <ContentContainer>
        <Triangle style={{ borderBottom: '25px solid black' }} />
        <Number>{type + value}</Number>
        <Triangle style={{ borderTop: '25px solid black' }} />
      </ContentContainer>
    </Container>
  );
};
