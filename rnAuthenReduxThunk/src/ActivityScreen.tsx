/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as activityActions from './actions/activity.action'

interface ActivityScreenProps {}

const ActivityScreen: React.FunctionComponent<ActivityScreenProps> = props => {

  const activityReducer = useSelector(state => state.activityReducer);
  
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
        <View style={{flexDirection: 'column'}}>
          {activityReducer.data.map(item => (
            <Text key={String(Math.random())}>{item}</Text>
          ))}
        </View>
      </ScrollView>
      <Button title="Clear" onPress={() => dispatch(activityActions.clear())} />
    </View>
  );
};

export default ActivityScreen;
