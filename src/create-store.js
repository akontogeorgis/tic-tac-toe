import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducer.js'

export default () => {
  const store = createStore(rootReducer, applyMiddleware(logger));
  return store;
};
