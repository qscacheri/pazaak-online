import React from 'react';
import { api } from '../api';
import { store } from '../redux/store';
import { CHANGE_USERNAME } from '../redux/user/types';
import styled from 'styled-components';
import { useHistory } from 'react-router';

interface LoginProps {}

const Container = styled.div`
  height: 100vh;
  background: black;
  color: #0055ff;
  position: relative;
`;
const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Title = styled.h1`
  margin-top: 0;
  font-size: 3.5rem;
`;
const StartBtn = styled.input`
  margin: 2%;
  padding: 2% 10%;
  border: 1px solid #0055ff;
  border-radius: 5px;
  background: black;
  color: #0055ff;
  font-family: 'Goldman', sans-serif;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
    color: #ffe81f;
    border-color: #ffe81f;
  }
`;

export const Login: React.FC<LoginProps> = ({}) => {
  const history = useHistory();
  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          store.dispatch({ type: CHANGE_USERNAME, payload: 'username' });
          history.push('/game');
        }}
      >
        <Title>Pure Pazaak</Title>
        <p>
          Player Name
          <input style={{ marginLeft: '5px' }} type="text" required />
        </p>
        <p>
          <StartBtn type="submit" value="Start" />
        </p>
      </Form>
    </Container>
  );
};
