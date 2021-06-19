import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import RegisterScreen from './src/RegisterScreen';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = props => {
  return (
    <RegisterScreen></RegisterScreen>
  );
};

export default App;
