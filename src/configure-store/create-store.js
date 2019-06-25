import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '../reducers/reducer';
import rootEpic from '../epics/epic';

export default () => {
	const composeEnhancers = process.env.NODE_ENV !== 'production'
	&& typeof window === 'object'
	// eslint-disable-next-line no-underscore-dangle
	&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		// eslint-disable-next-line no-underscore-dangle
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })
		: compose;

	const epicMiddleware = createEpicMiddleware();
	const middlewares = [epicMiddleware, logger];
	const enhancers = [applyMiddleware(...middlewares)];

	const store = createStore(rootReducer, composeEnhancers(...enhancers));
	epicMiddleware.run(rootEpic);
	return store;
};
