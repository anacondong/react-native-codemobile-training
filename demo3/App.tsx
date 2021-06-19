import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import HomeScreen from './src/HomeScreen';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = props => {
  return (
    <HomeScreen></HomeScreen>
  );
};

export default App;
