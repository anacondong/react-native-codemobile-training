import React, { Component } from "react";
import {
  View,
  Alert,
  StyleSheet,
  Image,
  ImageBackground,
  Button,
  Text,
  TextInput,
  Keyboard,
  AsyncStorage,
  Platform,
  TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

class CMFormInput extends Component {
  constructor(props) {
    super(props);
  }
 

  render() {
    return (
      <View {...this.props}>
        <Icon
          name={this.props.iconName}
          size={40}
          color="#333"
          style={styles.form_icons}
        />
        <TextInput
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          autoCapitalize="none"
          editable={true}
          onChangeText={text => this.props.onValueChanged(text)}
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}

export default class RegisterScreen extends Component {
  static navigationOptions = { title: "Register" };

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }


  onClickRegister = async () => {
    const { username, password } = this.state;

    await AsyncStorage.setItem("username", username);
    await AsyncStorage.setItem("password", password);

    //Alert.alert(JSON.stringify(this.state));
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ImageBackground
        source={require("./../assets/img/gradient_bg.png")}
        resizeMode={"stretch"}
        style={styles.container}>
        <Image
          resizeMode={"contain"}
          style={{ width: "100%", height: 120, marginTop: 10, padding: 0 }}
          source={require("./../assets/img/header_react_native.png")}
        />

        {/* Authen box */}
        <View style={styles.authen_section}>
          {/* username box */}
          <CMFormInput
            style={styles.entry_section}
            iconName={"user"}
            placeholder={"Username"}
            secureTextEntry={false}
            onValueChanged={text => this.setState({ username: text })}
          />

          {/* password box */}
          <CMFormInput
            style={styles.entry_section}
            iconName={"lock"}
            placeholder={"Password"}
            secureTextEntry={true}
            onValueChanged={text => this.setState({ password: text })}
          />

          <TouchableOpacity
            onPress={this.onClickRegister}
            style={styles.register_button}>
            <Text> Register </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
   
   );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "column", justifyContent: "flex-start" },
  authen_section: {
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF77",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    padding: 16
  },
  entry_section: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  login_button: { marginTop: 32 },
  register_button: {
    borderRadius: 5,
    marginTop: 8,
    height: 35,
    backgroundColor: "#DDDDDD",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  //form_icons: { ...Platform.select({ android: { marginRight: 16 }, ios: { marginRight: 18 } }) },
  form_icons: { marginRight: Platform.OS == "android" ? 16 : 18 }
});
