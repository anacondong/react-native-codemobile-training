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
import thunk from 'redux-thunk';
import reducers from './src/reducers';
// Redux End

let middlewares = [thunk];

if(__DEV__){
    middlewares.push(logger); // order by last of middlewares
}

const store = createStore(reducers, applyMiddleware(...middlewares));

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
