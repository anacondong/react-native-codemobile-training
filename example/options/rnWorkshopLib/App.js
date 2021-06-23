/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import RNDemoLib from 'react-native-demo-lib';

export default class App extends Component {
 
  /**
   * doc https://gist.github.com/chourobin/f83f3b3a6fd2053fad29fff69524f91c
   * https://facebook.github.io/react-native/docs/native-modules-android
   * https://facebook.github.io/react-native/docs/native-modules-ios
   */

  async componentDidMount() {
    if (Platform.OS === 'android') {
      // Call function
      RNDemoLib.show('Codemobiles Co.,Ltd', RNDemoLib.SHORT)

      // Callback android
      RNDemoLib.add(15, 10, (error) => {
        console.log(`error: ${error}`);
      }, (answerAdd) => {
        console.log(`answerAdd: ${JSON.stringify(answerAdd)}`)
      });
    } else {
      // Callback ios
      RNDemoLib.add(15, 10, (error, answerAdd) => {
        if (error) {
          console.log(`error: ${error}`);
        } else {
          console.log(`answerAdd: ${JSON.stringify(answerAdd)}`)
        }
      });
    }

    // Get constanst ios, android 
    const isEmulator = RNDemoLib.isEmulator
    console.log(`isEmulator: ${isEmulator}`)

    // Promise ios, android 
    try {
      const answerSub = await RNDemoLib.subStract(15, 10)
      console.log(`answerSub: ${answerSub}`)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
