import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import { Button } from 'react-native-elements';
import AppNavigator from './src/AppNavigator';

interface AppProps { }

const App: React.FunctionComponent<AppProps> = props => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    checkAuthen();
  }, [isReady]); // this is for force React Redender when this state has been changed

  const checkAuthen = async () => {
    setIsReady(true);
  };

  return isReady ? (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        {/* <SafeAreaView /> */}
        {isReady && (
          <AppNavigator
            onLogout={() => {
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
