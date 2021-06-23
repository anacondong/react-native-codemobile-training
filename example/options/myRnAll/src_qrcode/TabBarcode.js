"use strict";

import React, { Component } from "react";

import {
  Alert,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";

import Barcode from "react-native-barcode-builder";
import { ifIphoneX } from 'react-native-iphone-x-helper'


export default class TabBarcode extends Component {
 

  render() {
    return (
      <ImageBackground
        source={require("./assets/img/gradient_bg.png")}
        resizeMode={"stretch"}
        style={styles.container}>
        <Image
          resizeMode={"contain"}
          style={styles.banner}
          source={require("./assets/img/header_react_native.png")}
        />
        <Barcode value="Hello World" format="CODE128" />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  banner: { 
    width: "100%", 
    height: 120,     
    padding: 0,
    ...ifIphoneX({
      marginTop: 50
  }, {
      marginTop: 20
  })
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: "#777"
  },
  buttonText: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#FFF"
  },
  buttonTouchable: {
    flex: 1,
    height: 100,
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fa4a4d"
  }
});
