/**
 * @format
 */

import React from 'react';


import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducer from './src/reducer';

const store = createStore(reducer);

function Root() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}


AppRegistry.registerComponent(appName, () => Root);
