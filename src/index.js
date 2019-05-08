import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Game from './game.js';
import createStore from './create-store.js'
import './index.css';

const store = createStore();

ReactDOM.render(
  <Provider store = {store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
