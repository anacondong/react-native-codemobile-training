/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';


import {
  StackNavigator,
} from 'react-navigation';



class HomeScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;

    return (
      // Try setting `flexDirection` to `column`.
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center' }}>
        <Button title="Screen 1" onPress={() => { this.props.navigation.navigate('Screen1') }} />
        <Button title="Screen 2" onPress={() => { navigate('Screen2', { username: "admin", password: "password" }) }} />
        <Button title="Screen 3" onPress={() => { navigate('Screen3', {}) }} />
      </View>
    );
  }
};


const RootStack = StackNavigator({
  Home: {screen: HomeScreen, navigationOptions: {title: "CodeMobiles React-Native"}},
  Screen1: { screen: Screen1 },
  Screen2: { screen: Screen2 },
  Screen3: { screen: Screen3 },
}, {
    initialRouteName: 'Home',
  });

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

