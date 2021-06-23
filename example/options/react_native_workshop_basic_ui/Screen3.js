import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

export default class Screen3 extends React.Component{
  static navigationOptions = {
    title: 'Screen3',
  };

  render(){
    return(
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Screen 3</Text>
      </View>
    )
  }
}