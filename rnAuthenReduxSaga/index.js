/**
 * @format
 */
 import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// Redux Begin
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducers from './src/reducers';
import createSagaMiddleware from 'redux-saga';
import * as rootSaga from './src/saga';
// Redux End
const sagaMiddleware = createSagaMiddleware();
let middlewares = [sagaMiddleware];

if(__DEV__){
    middlewares.push(logger); // order by last of middlewares
}

const store = createStore(reducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga.watchAll);

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
