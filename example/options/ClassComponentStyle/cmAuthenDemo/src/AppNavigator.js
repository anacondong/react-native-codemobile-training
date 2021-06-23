import React, { Component } from "react";
import { Image } from "react-native";
import HomeScreen from "./HomeScreen";
import RegisterScreen from "./RegisterScreen";

import {
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import JSONFeedScreen from "./JSONFeedScreen";
import CameraScreen from "./CameraScreen";
import YoutubeScreen from "./YoutubeScreen";

const TabStack = createBottomTabNavigator({
  json: {screen: JSONFeedScreen,    
    navigationOptions: {
    tabBarLabel: "Feed",
    tabBarIcon: ({ focused }) => (
      <Image
        style={{
          height: 28,
          width: 28
        }}
        resizeMode="contain"
        source={
          focused
            ? require("./assets/img/ic_profile_select.png")
            : require("./assets/img/ic_profile.png")
        }
      />
    )
  }},
  camera: {screen: CameraScreen,
    navigationOptions: {
      tabBarLabel: "Camera",
      tabBarIcon: ({ focused }) => (
        <Image
          style={{
            height: 28,
            width: 28
          }}
          resizeMode="contain"
          source={
            focused
              ? require("./assets/img/ic_card_select.png")
              : require("./assets/img/ic_card.png")
          }
        />
      )
    }},
}, {
  initialRouteName: "json"
})


TabStack.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
 
  // You can do whatever you like here to pick the title based on the route name
  const headerTitle = routeName == "json" ? "JSONTab" : "CameraTab";
 
  return {
    headerTitle,
    headerStyle: { backgroundColor: '#339CED'},
    headerTitleStyle: { color: "#fff" },

  };
 };

// App Stack
const AppStack = createStackNavigator({
  youtube: {screen: YoutubeScreen},
  tab: {screen: TabStack}
},{
    initialRouteName: "tab"
})

// Authen Stack
const AuthenStack = createStackNavigator({
  home: {screen: HomeScreen},
  register: {screen: RegisterScreen},  
},{
    initialRouteName: "home"
})

export default createAppContainer(createSwitchNavigator({
  AuthenScene: AuthenStack,
  AppScene: AppStack
},{
  initialRouteName: "AuthenScene"
}))

