/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
//import App from './ex_basic_ui/App_JustifyContent';
//import App from './ex_basic_ui/App_AlignItem';
// import App from './ex_basic_ui/App_AbsolutePosition';
// import App from './ex_basic_ui/App_Image';
import {name as appName} from './app.json';

//console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);
