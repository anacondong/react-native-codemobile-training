import React, { Component } from "react";
import { Image } from "react-native";

import HomeScreen from "./HomeScreen";
import RegisterScreen from "./RegisterScreen";
import YoutubeScreen from "./YoutubeScreen";
import JSONFeedScreen from "./JSONFeedScreen";
import CameraScreen from "./CameraScreen";

import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

const TabStack = createBottomTabNavigator(
  {
    FeedJSON: {
      screen: JSONFeedScreen,
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
                ? require("./../assets/img/ic_profile_select.png")
                : require("./../assets/img/ic_profile.png")
            }
          />
        )
      }
      
    },
    UploadCamera: {
      screen: CameraScreen,
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
                ? require("./../assets/img/ic_card_select.png")
                : require("./../assets/img/ic_card.png")
            }
          />
        )
      }
    }
  },
  { initialRouteName: "FeedJSON" }
);


TabStack.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
 
  // You can do whatever you like here to pick the title based on the route name
  const headerTitle = routeName;
 
  return {
    headerTitle,
    headerStyle: { backgroundColor: '#339CED'},
    headerTitleStyle: { color: "#fff" },

  };
 };


const AuthenStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Register: {
      screen: RegisterScreen
    }
  },
  { initialRouteName: "Home" }
);

const AppStack = createStackNavigator(
  {
    TabScreens: {
      screen: TabStack
    },
    YoutubeScreen: {
      screen: YoutubeScreen
    } 
  },
  { initialRouteName: "TabScreens" }
);

// in react-navigation 3.0,   createAppContainer is required!
export const AppNavigator =   createAppContainer(createSwitchNavigator(
  {
    AuthenStack: AuthenStack,
    AppStack: AppStack
  },
  {
    initialRouteName: "AuthenStack"
  }
));
