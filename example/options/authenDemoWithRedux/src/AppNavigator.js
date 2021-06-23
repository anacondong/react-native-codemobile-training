import React, { Component } from "react";
import { Image } from "react-native";

import HomeScreen from "./HomeScreen";
import RegisterScreen from "./RegisterScreen";
import JSONFeedScreen from "./JSONFeedScreen";
import CameraScreen from "./CameraScreen";


import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import YoutubeScreen from "./YoutubeScreen";


const TabStack = createBottomTabNavigator({
    JSONFeed: {screen: JSONFeedScreen, 
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
    Camera: {screen: CameraScreen,
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
          }
    }
})


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



const AppStack = createStackNavigator({
    Youtube: {screen: YoutubeScreen},
    Tab: {screen: TabStack}
}, {
    initialRouteName: "Tab"
})

const AuthenStack = createStackNavigator({
    Home: {screen: HomeScreen},
    Register: {screen: RegisterScreen},
},{
    initialRouteName: "Home"
})


export default createAppContainer(createSwitchNavigator({
    Authen: AuthenStack,
    App: AppStack
}, {
    initialRouteName: 'Authen'
}))