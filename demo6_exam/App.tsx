/* eslint-disable react-native/no-inline-styles */
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { AuthSelector } from './src/reducers/auth.reducer';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, StatusBar } from 'react-native'
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
    <View style={[styles.container, styles.horizontal]}>
      <Text>Loading ...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default App;
