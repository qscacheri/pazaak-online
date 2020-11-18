import React from 'react';
import { CardType } from '../types';
import styled from 'styled-components';

const Container = styled.div`
  background: #9da0a8;
  width: 75px;
  height: 100px;
  border-radius: 5px;
  position: relative;
`;
const Interior1 = styled.div`
  width: 80%;
  height: 30%;
  margin: auto;
  background: #0055ff;
`;
const Interior2 = styled.div`
  width: 80%;
  height: 30%;
  margin: auto;
  background: red;
`;
const Number = styled.div`
  background: black;
  color: white;
  position: absolute;
  top: 50%;
  right: 50%
  transform: translate(-50%, -50%);
`;

export const Card: React.FC<CardType> = ({ type, value }) => {
  return (
    <Container>
      <Interior1 />
      <Number>{type + value}</Number>
      <Interior2 />
    </Container>
  );
};
