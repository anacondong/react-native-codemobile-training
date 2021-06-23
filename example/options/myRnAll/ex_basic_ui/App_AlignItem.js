import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onClickT1 = () => {
    Alert.alert("T2")
  }


  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.t1} onPress={() => Alert.alert("T1")}> 1 </Text>
        <Text style={styles.t2} onPress={this.onClickT1}> 2 </Text>
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
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  t1: { height: 50, width: 50, backgroundColor: '#f00', color: '#fff' },
  t2: { height: 50, width: 50, backgroundColor: '#0f0', color: '#fff' },
  t3: { height: 50, width: 50, backgroundColor: '#00f', color: '#fff' },
  t4: { height: 50, width: 50, backgroundColor: '#00f', color: '#fff' },
});


