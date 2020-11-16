import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { api } from './api';
import './App.css';
import { ConnectedMainDeck } from './components/MainDeck';
import GameBoard from './GameBoard';
import { ADD_CARD_TO_MAINDECK } from './redux/game/types';
import { store } from './redux/store';
import { CHANGE_USERNAME } from './redux/user/types';

function App() {
  useEffect(() => {
    store.dispatch({ type: CHANGE_USERNAME, payload: 'new username' });
    const socket = api.connect();
    console.log(socket);

    document.addEventListener('click', () => {
      store.dispatch({
        type: ADD_CARD_TO_MAINDECK,
        payload: {
          player: 'me',
          card: {
            isMainDeck: true,
            type: 'plus',
            value: Math.ceil(1 + Math.random() * 5),
          },
        },
      });
    });
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <GameBoard />
      </div>
    </Provider>
  );
}

export default App;
