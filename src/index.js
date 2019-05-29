import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//import Game from './components/game/game.js';
import Authentication from './components/loginForm/authentication.js';

import createStore from './configure-store/create-store.js'
import './styles/index.css';

const store = createStore();

ReactDOM.render(
  <Provider store = {store}>
    <Authentication />
  </Provider>,
  document.getElementById('root')
);
