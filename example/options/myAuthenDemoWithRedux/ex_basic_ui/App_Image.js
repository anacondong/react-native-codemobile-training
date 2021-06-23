import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';




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
        <Text style={styles.t4}> 4 </Text>
        <Text style={styles.t5}> 5 </Text>
        <Image style={{
          position: 'absolute', width: 100, height: 100,
          left: (Dimensions.get('window').width / 2) - 50,
          top: (Dimensions.get('window').height / 2) - 50,

        }}
          source={require('./../assets/img/avatar.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  t1: { flex: 1, backgroundColor: '#f00', color: '#fff' },
  t2: { flex: 1, backgroundColor: '#0f0', color: '#fff' },
  t3: { flex: 1, backgroundColor: '#00f', color: '#fff' },
  t4: { flex: 1, backgroundColor: '#a00', color: '#fff' },
  t5: { flex: 1, backgroundColor: '#aa0', color: '#fff' },
  logo: {}
});


