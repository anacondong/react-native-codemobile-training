import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text, ImageBackground, SafeAreaView, StatusBar} from 'react-native';
import AppNavigator from './src/AppNavigator';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = props => {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        {/* <SafeAreaView /> */}
        <AppNavigator />
      </View>
    </NavigationContainer>
  );

};

export default App;
