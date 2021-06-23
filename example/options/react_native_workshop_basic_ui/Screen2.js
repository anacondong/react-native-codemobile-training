import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

export default class Screen2 extends React.Component{
  static navigationOptions = {
    title: 'Screen2',
  };

  render(){
    return(
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Screen 22 {JSON.stringify(this.props.navigation.state.params)}</Text>
      </View>
    )
  }
}