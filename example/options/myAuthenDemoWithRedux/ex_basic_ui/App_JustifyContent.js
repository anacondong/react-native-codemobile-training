import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.t1}> 1 </Text>
        <Text style={styles.t2}> 2 </Text>
        <Text style={styles.t3}> 3 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  t1:{height: 50, width: 50, backgroundColor: '#f00', color: '#fff' },
  t2:{height: 50, width: 50, backgroundColor: '#0f0', color: '#fff' },
  t3:{height: 50, width: 50, backgroundColor: '#00f', color: '#fff' }, 
});


