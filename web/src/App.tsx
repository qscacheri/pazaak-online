import { createBrowserHistory } from 'history';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router';
import './App.css';
import { GameBoard } from './components/GameBoard';
import { Socket } from './components/Socket';
import { Login } from './pages/Login';
import { ADD_CARD_TO_MAINDECK } from './redux/game/types';
import { store } from './redux/store';

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
            type: '+',
            value: Math.ceil(1 + Math.random() * 5),
          },
        },
      });
    });
  }, []);

  return (
    <Provider store={store}>
      <Socket>
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
      </Socket>
    </Provider>
  );
}

export default App;
