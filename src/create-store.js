import {createStore} from 'redux'
import rootReducer from './reducer.js'

export default () => {
  const store = createStore(rootReducer);
  return store;
};
