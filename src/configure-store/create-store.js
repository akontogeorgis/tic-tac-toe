import {createStore, applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers/reducer.js'
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epics/epic.js'

export default () => {

      //* eslint-disable no-underscore-dangle */
  const composeEnhancers = process.env.NODE_ENV !== 'production'
  && typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })
      : compose;

  const epicMiddleware = createEpicMiddleware();
  const middlewares = [epicMiddleware, logger];
  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(rootReducer, composeEnhancers(...enhancers) );
  epicMiddleware.run(rootEpic);
  return store;

};

