import React from 'react';
import {View, SafeAreaView, StatusBar, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/AppNavigator';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = props => {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <AppNavigator />
      </View>
    </NavigationContainer>
  );
};

export default App;
