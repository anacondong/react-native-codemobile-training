/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';



class MyWidget extends Component {

  count = 0;
  constructor(props) {
    super(props);
    this.state = { count: 0, iam: "CodeMobiles" };
  }

  onClickV1 = ()=>{
    this.setState({count: ++this.count});
  }

  onClickV2 =()=>{
    setInterval(()=>{
      this.setState(previousState=>{
        return {count: previousState.count + 1};
      });
    }, 1000);

  }

  onClickV3 =()=>{
    this.setState({count: 0})
  }

  render() {
    return (
      <View>
        <Text>{this.props.message}{this.state.iam}, {this.state.count}</Text>
        <View style={styles.button}/>
        <Button raised onPress={this.onClickV1} title="MANUAL"/>
        <View style={styles.button}/>
        <Button raised onPress={this.onClickV2} title="AUTO"/>
        <View style={styles.button}/>
        <Button onPress={this.onClickV3} title="RESET 1" />
        <View style={styles.button}/>
        <Button onPress={()=>{this.setState({count: 0})}} title="RESET 2" />
      </View>
    )
  }
}

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <MyWidget message="Hi, " />
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
  button: {
    marginBottom: 10,
  },
});
