/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import RegisterScreen from './RegisterScreen';
import JSONFeedScreen from './JSONFeedScreen';
import CameraScreen from './CameraScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Success" component={SuccessTab} />
    </Stack.Navigator>
  );
};

const SuccessTab = () => {
  return (
    <Tab.Navigator initialRouteName="Json">
      <Tab.Screen name="Json" component={JSONFeedScreen} options={tab1} />
      <Tab.Screen name="Camera" component={CameraScreen} options={tab2} />
    </Tab.Navigator>
  )
}

const tab1 = {
  tabBarLabel: 'JSON',
  tabBarIcon: ({focused}: any) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require('./assets/img/ic_profile_select.png')
          : require('./assets/img/ic_profile.png')
      }
    />
  ),
};

const tab2 = {
  tabBarLabel: 'Camera',
  tabBarIcon: ({focused}: any) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require('./assets/img/ic_card_select.png')
          : require('./assets/img/ic_card.png')
      }
    />
  ),
};

export default RootStack;
