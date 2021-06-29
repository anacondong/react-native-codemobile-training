/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../HomeScreen';
import RegisterScreen from '../RegisterScreen';
import JSONFeedScreen from '../JSONFeedScreen';
import { AS_AUTHEN_SUCCESS } from '../Constants';
import { Alert } from 'react-native';
import ActivityScreen from '../ActivityScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootStack = (props: any) => {

  const successTabOption = props => {
    return {
      title: "Success",
      headerStyle: {
        backgroundColor: '#119CED',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: { color: '#fff' },

      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.7} style={{ padding: 10 }} >
          <Icon
            onPress={async () => {
              await AsyncStorage.removeItem(AS_AUTHEN_SUCCESS);
              props.onLogout();
              Alert.alert('Logout');
            }}
            name="sign-out"
            size={20}
            color="#fff"
            style={{
              height: 24,
              width: 24,
            }}
          />
        </TouchableOpacity>
      ),
    };
  };

  return props.showAuthen ? ( // pre login
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="Success"
        component={SuccessTab}
        options={successTabOption(props)}
      />
    </Stack.Navigator>
  ) : ( // post login
    <Stack.Navigator initialRouteName="Success">
      <Stack.Screen
        name="Success"
        component={SuccessTab}
        options={successTabOption(props)}
      />
    </Stack.Navigator>
  );
};

const SuccessTab = () => {
  return (
    <Tab.Navigator initialRouteName="Json">
      <Tab.Screen name="Json" component={JSONFeedScreen} options={jsonTab} />
      <Tab.Screen name="Activity" component={ActivityScreen} options={activityTab} />
    </Tab.Navigator>
  );
};

const jsonTab = {
  tabBarLabel: 'JSON',
  tabBarIcon: ({ focused }: any) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require('./../assets/img/ic_profile_select.png')
          : require('./../assets/img/ic_profile.png')
      }
    />
  ),
};

const activityTab = {
  tabBarLabel: 'Activity',
  tabBarIcon: ({ focused }: any) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require('./../assets/img/ic_card_select.png')
          : require('./../assets/img/ic_card.png')
      }
    />
  ),
};

export default RootStack;
