import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: '#000',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
      {/* JSX */}
      <Text style={{...styles.item, backgroundColor: '#0FF'}}>box1</Text>
      <Text style={{...styles.item, backgroundColor: '#FFF'}}>box2</Text>
      <Text style={{...styles.item, backgroundColor: 'red'}}>box3</Text>
      <Text style={{...styles.item, backgroundColor: 'blue'}}>box4</Text>
      <Text style={{...styles.item, backgroundColor: '#DDD'}}>box5</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 30,
    // flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
