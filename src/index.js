import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from './components/home';

import createStore from './configure-store/create-store';
import './styles/index.scss';

const store = createStore();

ReactDOM.render(
	<Provider store={store}>
		<Home />
	</Provider>,
	document.getElementById('root'),
);
