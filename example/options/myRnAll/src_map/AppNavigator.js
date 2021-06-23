import React, { Component } from "react";
import {
  Image,
} from "react-native";

import TabMapScreen from "./TabMapScreen";
import TabGPSScreen from "./TabGPSScreen";

import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";




const TabStack = createBottomTabNavigator({
 
  TabMapScreen: {
    screen: TabMapScreen,
    navigationOptions: {
      tabBarLabel: "Map",
      tabBarIcon: ({ focused }) => (
        <Image
          style={{
            height: 28,
            width: 28
          }}
          resizeMode="contain"
          source={
            focused
              ? require("./assets/img/ic_map_press.png")
              : require("./assets/img/ic_map_normal.png")
          }
        />
      )
    }
  },
  TabGPSScreen: {
    screen: TabGPSScreen,
    navigationOptions: {
      tabBarLabel: "GPS",
      tabBarIcon: ({ focused }) => (
        <Image
          style={{
            height: 28,
            width: 28
          }}
          resizeMode="contain"
          source={
            focused
              ? require("./assets/img/ic_location_press.png")
              : require("./assets/img/ic_location_normal.png")
          }
        />
      )
    }
  },
}, {initialRouteName: "TabMapScreen"});

const AppStack = createStackNavigator(
  {
    TabScreens: {
      screen: TabStack,
      navigationOptions: {
        header: null
      }
    }
  },
  { initialRouteName: "TabScreens" }
);

export const AppNavigator = createAppContainer(
  createSwitchNavigator(
  {
    AppStack: AppStack
  },
  {
    initialRouteName: "AppStack"
  }
));
