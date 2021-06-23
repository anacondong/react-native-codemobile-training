import React, { Component } from "react";
import {
  View,
  Alert,
  StyleSheet,
  AsyncStorage,
  Image,
  ImageBackground,
  Button,
  Text,
  TextInput,
  Keyboard,
  Platform,
  TouchableOpacity
} from "react-native";

import TabQRcode from "./TabQRcode";
import TabScanner from "./TabScanner";
import TabBarcode from "./TabBarcode";
import ScannerScreen from './ScannerScreen'
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer

} from "react-navigation";




const TabStack = createBottomTabNavigator({
  QRcode: {
    screen: TabQRcode,
    navigationOptions: {
      tabBarLabel: "QRcode",
      tabBarIcon: ({ focused }) => (
        <Image
          style={{
            height: 28,
            width: 28
          }}
          resizeMode="contain"
          source={
            focused
              ? require("./assets/img/ic_qr_code_press.png")
              : require("./assets/img/ic_qr_code_normal.png")
          }
        />
      )
    }
  },
  Barcode: {
    screen: TabBarcode,
    navigationOptions: {
      tabBarLabel: "Barcode",
      tabBarIcon: ({ focused }) => (
        <Image
          style={{
            height: 28,
            width: 28
          }}
          resizeMode="contain"
          source={
            focused
            ? require("./assets/img/ic_barcode_press.png")
            : require("./assets/img/ic_barcode_normal.png")
          }
        />
      )
    }
  },
  Scanner: {
    screen: TabScanner,
    navigationOptions: {
      tabBarLabel: "Scan",
      tabBarIcon: ({ focused }) => (
        <Image
          style={{
            height: 28,
            width: 28
          }}
          resizeMode="contain"
          source={
            focused
            ? require("./assets/img/ic_qr_scan_press.png")
            : require("./assets/img/ic_qr_scan_normal.png")     
          }
        />
      )
    }
  }
});

const AppStack = createStackNavigator(
  {
    TabScreens: {
      screen: TabStack,
      navigationOptions: {
        header: null
      }
    },
    ScannerScreen : {
      screen: ScannerScreen,
    }
  },
  { initialRouteName: "TabScreens" }
);

export const AppNavigator =   createAppContainer(createSwitchNavigator(
  {
    AppStack: AppStack
  },
  {
    initialRouteName: "AppStack"
  }
));
