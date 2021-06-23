"use strict";

import React, { Component } from "react";

import {
  Alert,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";

import QRCodeScanner from "react-native-qrcode-scanner";

export default class ScannerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { isReady: false };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isReady: true });
    }, 500);
  }

  onSuccess(e) {
    const callback = this.props.navigation.getParam("resultCallback");
    callback("dummy result");
    this.props.navigation.goBack();
  }

  scanAgain = () => {
    //this.scanner.reactivate();
    const callback = this.props.navigation.getParam("resultCallback");
    //callback(e.data); 
    callback("Dummy Result"); 
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ImageBackground
        source={require("./assets/img/gradient_bg.png")}
        resizeMode={"stretch"}
        style={styles.container}>
        <Image
          resizeMode={"contain"}
          style={{ width: "100%", height: 120, marginTop: 10, padding: 0 }}
          source={require("./assets/img/header_react_native.png")}
        />
        {this.state.isReady ? (
          <QRCodeScanner
            showMarker
            style={{ flex: 1, marginBottom: 16 }}
            ref={node => {
              this.scanner = node;
            }}
            onRead={this.onSuccess.bind(this)}
            bottomContent={
              <TouchableOpacity
                onPress={this.scanAgain}
                style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>SCAN</Text>
              </TouchableOpacity>
            }
          />
        ) : (
          <Text style={{ flex: 1, marginBottom: 16, color: "#fff" }}>
            Loading...
          </Text>
        )}
      </ImageBackground>
    );
  }
}

ScannerScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Scanner",
    headerStyle: {
      backgroundColor: "#3F51B5"
    },
    headerTintColor: "#FFFFFF",
    headerTitleStyle: { color: "#fff" }
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start"
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
