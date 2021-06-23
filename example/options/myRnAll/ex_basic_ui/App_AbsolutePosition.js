import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const logoLeft = (Dimensions.get('window').width / 2) - 50;
const logoTop = (Dimensions.get('window').height / 2) - 50;

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
          ...styles.logo, 
          position: 'absolute',
          left: logoLeft,
          top: logoTop
        }}
          resizeMode={'contain'}
          source={require('./../assets/img/cmdev_icon.png')} />
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
  logo: { width: 100, height: 100 },
});


