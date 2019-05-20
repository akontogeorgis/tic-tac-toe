import {createStore, applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/saga.js'
import rootReducer from '../reducers/reducer.js'

export default () => {
  const sagaMiddleware = createSagaMiddleware()

      //* eslint-disable no-underscore-dangle */
  const composeEnhancers = process.env.NODE_ENV !== 'production'
  && typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })
      : compose;

  const middlewares = [sagaMiddleware, logger];
  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(rootReducer, composeEnhancers(...enhancers) );
  sagaMiddleware.run(rootSaga);
  return store;
};

