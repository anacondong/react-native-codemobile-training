import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default () => {
  if (__DEV__) {
    return createStore(reducers, applyMiddleware(logger, thunk));
  } else {
    return createStore(reducers, applyMiddleware(thunk));
  }
};
