import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router';
import { api } from './api';
import './App.css';
import { ConnectedMainDeck } from './components/MainDeck';
import { ADD_CARD_TO_MAINDECK } from './redux/game/types';
import { store } from './redux/store';
import { CHANGE_USERNAME } from './redux/user/types';
import { createBrowserHistory } from 'history';
import { GameBoard } from './components/GameBoard';
import { Login } from './pages/Login';

const history = createBrowserHistory();
function App() {
  useEffect(() => {
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
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/game">
              <GameBoard />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
