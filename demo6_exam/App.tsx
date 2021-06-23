import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Button } from 'react-native-elements';
import AppNavigator from './src/AppNavigator';
import {AS_AUTHEN_SUCCESS} from './src/constants/Constants';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = props => {

  useEffect(() => {

  }, []); // this is for force React Redender when this state has been changed


  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        {(
          <AppNavigator
            onLogout={() => {
              console.log('logout !! ');
            }}
          />
        )}
      </View>
    </NavigationContainer>
  )
};

export default App;
