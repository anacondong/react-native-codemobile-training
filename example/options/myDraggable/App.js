import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Draggable from 'react-native-draggable';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View >
      <Draggable renderSize={56} renderColor='black' offsetX={-100} offsetY={-200} renderText='A' pressDrag={()=>alert('touched!!')}/> 
      <Draggable reverse={false} renderColor='red' renderShape='square' offsetX={0} offsetY={0} renderText='B'/>
      <Draggable/>
  </View>
    );
  }
}
