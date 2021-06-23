import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TextInput
} from "react-native";

import QRCode from "react-native-qrcode-svg";
const PATH_TO_LOGO = "./assets/img/cmdev_icon.png";

export default class TabQRcode extends Component {
  constructor(props) {
    super(props);
    this.state = { qrValue: "codemobiles" };
  }

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
        <TextInput
          editable={true}
          style={{
            height:50,
            fontSize: 20,
            textAlign: 'center',
            width: "100%",
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
            color: "#fff",
            alignSelf: "center"
          }}
          onChangeText={text => this.setState({ qrValue: text })}
        />

        <ScrollView contentContainerStyle={styles.container}>
          {this.state.qrValue != "" ? (
            <View style={styles.section}>
              <QRCode value={this.state.qrValue} />
            </View>
          ) : null}

          <View style={styles.section}>
            <QRCode value="codemobiles" size={200} />
          </View>
          <View style={styles.section}>
            <QRCode value="codemobiles" color="blue" backgroundColor="yellow" />
          </View>
          <View style={styles.section}>
            <QRCode value="codemobiles" logo={require(PATH_TO_LOGO)} />
          </View>
          <View style={styles.section}>
            <QRCode
              value="codemobiles"
              logo={require(PATH_TO_LOGO)}
              logoSize={50}
            />
          </View>
          <View style={styles.section}>
            <QRCode
              value="codemobiles"
              logo={require(PATH_TO_LOGO)}
              logoMargin={10}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              marginBottom: 200
            }}>
            <QRCode
              value="codemobiles"
              logo={require(PATH_TO_LOGO)}
              logoBorderRadius={15}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15
  },
  section: {
    marginTop: 15,
    marginBottom: 15
  }
});
