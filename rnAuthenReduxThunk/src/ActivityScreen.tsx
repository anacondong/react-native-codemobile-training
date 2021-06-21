/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';

interface ActivityScreenProps {}

const ActivityScreen: React.FunctionComponent<ActivityScreenProps> = props => {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
        <View style={{flexDirection: 'column'}}>
          {['Angular', 'VueJS', 'ReactJS'].map(item => (
            <Text key={String(Math.random())}>{item}</Text>
          ))}
        </View>
      </ScrollView>
      <Button title="Clear" onPress={() => {}} />
    </View>
  );
};

export default ActivityScreen;
