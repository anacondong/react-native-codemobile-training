import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

export default class Screen1 extends React.Component{
  static navigationOptions = {
    title: 'Screen1',
  };

  render(){
    return(
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Screen 1</Text>
      </View>
    )
  }
}