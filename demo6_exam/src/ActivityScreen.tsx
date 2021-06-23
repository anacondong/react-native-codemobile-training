/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { ACTIVITY_CLEAR } from './constants/Constants';
import { ActivitySelector } from './reducers/activity.reducer';

interface ActivityScreenProps {}

const ActivityScreen: React.FunctionComponent<ActivityScreenProps> = props => {
  const activityReducer = useSelector(ActivitySelector);
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
      <Button title="Clear" onPress={() => dispatch({type: ACTIVITY_CLEAR})} />
    </View>
  );
};

export default ActivityScreen;
