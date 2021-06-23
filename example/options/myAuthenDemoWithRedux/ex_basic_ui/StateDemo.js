import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class StateDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 1
    };
  }

  componentDidMount(){
      setInterval(()=>{
        this.setState(prevState =>{ return {count: prevState.count + 1} })
      }, 1000);
  }

  render() {
    return (
      <View style={{flex: 1,flexDirection: 'column', justifyContent: 'center',}}>
        <Text style={{alignSelf: 'center', fontSize: 30}}> {this.state.count} </Text>
      </View>
    );
  }
}
