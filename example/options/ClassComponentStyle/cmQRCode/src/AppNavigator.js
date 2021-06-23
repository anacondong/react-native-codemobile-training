import React, { Component } from "react";
import {
  Image
} from "react-native";

import TabQRcode from "./TabQRcode";
import TabScanner from "./TabScanner";
import ScannerScreen from './ScannerScreen'

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer} from "react-navigation";


const tab1_Option = {
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

const tab2_Option = {
  tabBarLabel: "Scanner",
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

const TabStack = createBottomTabNavigator({
  tab1: {screen: TabQRcode, navigationOptions: tab1_Option},
  tab2: {screen: TabScanner, navigationOptions: tab2_Option},
},{
  initialRouteName: "tab1"
})


const AppStack = createStackNavigator({
  tabs: {screen: TabStack, navigationOptions: {header: null}},
  scanner: {screen: ScannerScreen},
}, {
  initialRouteName: "tabs"
})

export default createAppContainer(AppStack)