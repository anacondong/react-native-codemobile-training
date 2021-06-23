import React, { Component } from "react";
import {
  View,
  Text, 
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  Alert,
  TouchableOpacity
} from "react-native";


import { AppNavigator } from "./src/AppNavigator";

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}