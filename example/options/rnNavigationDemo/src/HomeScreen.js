import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

import AsyncStorage from '@react-native-community/async-storage';


export default class HomeScreen extends Component {
  onClickLogin = async () => {
    // AsyncStorage.setItem("username", "lek_codemobiles").then(() => {
    //   this.props.navigation.navigate("AppScene");
    // });

    await AsyncStorage.setItem("username", "lek_codemobiles")
    this.props.navigation.navigate("AppScene")
  };

  onClickRegister = () => {
    this.props.navigation.navigate("Register");
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-around"
        }}
      >
        <Button title="Login" onPress={this.onClickLogin} />
        <Button title="Register" onPress={this.onClickRegister} />
      </View>
    );
  }
}

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "CodeMobiles",
    headerStyle: {
      backgroundColor: "#119CED"
    },
    headerTintColor: "#FFFFFF",
    headerTitleStyle: { color: "#fff" },
    headerBackTitle: " ",
    headerRight: (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => alert("www.codemobiles.com")}
        style={{ padding: 10 }}
      >
        <Image
          source={require("./assets/img/avatar.png")}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
    )
  };
};
