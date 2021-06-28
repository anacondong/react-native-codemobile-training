import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { AuthSelector } from './src/reducers/auth.reducer';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Button } from 'react-native-elements';
import AppNavigator from './src/navigation/AppNavigator';
import { AUTH_LOGOUT } from './src/constants/Constants';

interface AppProps { }

const App: React.FunctionComponent<AppProps> = props => {
  const [isReady, setIsReady] = useState(false);

  const authReducer = useSelector(AuthSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    checkAuthen();
  }, [isReady]); // this is for force React Redender when this state has been changed

  const checkAuthen = () => {
    setIsReady(true);
  };

  return isReady ? (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        {/* <SafeAreaView /> */}
        {isReady && (
          <AppNavigator
            showAuthen={!authReducer.isAuth}
            onLogout={() => {
              dispatch({ type: AUTH_LOGOUT })
              setIsReady(false);
            }}
          />
        )}
      </View>
    </NavigationContainer>
  ) : (
    <Button
      title="Loading button"
      loading
    />
  );
};

export default App;
