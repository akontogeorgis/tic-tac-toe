import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Game from './components/game/game.js';
import createStore from './configure-store/create-store.js'
import './styles/index.css';

const store = createStore();

ReactDOM.render(
  <Provider store = {store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
