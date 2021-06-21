import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import AppNavigator from './src/AppNavigator';
import {AS_AUTHEN_SUCCESS} from './src/Constants';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = props => {
  const [forceLogin, setforceLogin] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    checkAuthen();
  }, [isReady]); // this is for force React Redender when this state has been changed

  const checkAuthen = async () => {
    const isAuthenSuccess = await AsyncStorage.getItem(AS_AUTHEN_SUCCESS);
    setforceLogin(isAuthenSuccess !== 'true');
    setIsReady(true);
  };

  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        {/* <SafeAreaView /> */}
        {isReady && (
          <AppNavigator
            showAuthen={forceLogin}
            onLogout={() => {
              setIsReady(false);
            }}
          />
        )}
      </View>
    </NavigationContainer>
  );
};

export default App;
