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
import Icon from "react-native-vector-icons/FontAwesome";

class CMEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // destructuring
    const {icon, hint, onChanged, isSecured, keyboardLayout} = this.props

    return (
      <View style={{ flexDirection: "row" }}>
        <Icon name={icon} size={35} />
        <TextInput
          keyboardType={keyboardLayout}
          secureTextEntry={isSecured}
          onChangeText={onChanged}
          placeholder={hint}
          style={{ flex: 1, marginLeft: 16 }}
        />
      </View>
    );
  }
}

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  onClickRegister = async ()=>{
    const {username, password} = this.state
    await AsyncStorage.setItem('username', username)
    await AsyncStorage.setItem('password', password)
    this.props.navigation.goBack()
  }


  render() {
    return (
      <ImageBackground
        source={require("./assets/img/bg.png")}
        style={{ flex: 1, flexDirection: "column" }}
      >
        {/* authen section */}
        <View
          style={{
            padding: 10,
            borderRadius: 5,
            marginTop: 32,
            marginLeft: 42,
            marginRight: 42,
            backgroundColor: "#fff7",
            flexDirection: "column"
          }}
        >
          {/* Username */}
          {/* isSecured, keyboardLayout */}
          <CMEntry keyboardLayout='email-address' icon='user' hint='Username' onChanged={text=>this.setState({username:text})}/>
          {/* Password */}
          <CMEntry isSecured={true} icon='lock' hint='Password' onChanged={text=>this.setState({password:text})}/>

          <TouchableOpacity
            onPress={this.onClickRegister}
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30,
              backgroundColor: "#4CAF50",
              height: 30,
              borderRadius: 5
            }}
          >
            <Text style={{ color: "white" }}>CONFIRM</Text>
          </TouchableOpacity>
        </View>

        <Image
          resizeMode="contain"
          style={{
            width: "100%",
            height: 100,
            marginTop: 20,
            marginBottom: 16
          }}
          source={require("./assets/img/header_react_native.png")}
        />
      </ImageBackground>
    );
  }
}




RegisterScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Register",
    headerStyle: {
      backgroundColor: '#119CED'
    },
    headerTintColor: "#FFFFFF",
    headerTitleStyle: { color: "#fff" },
    headerBackTitle: " ",
    headerRight: (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => alert("www.codemobiles.com")}
        style={{ padding: 10 }}>
        <Icon
          name="user"
          size={20}
          color="#fff"
          style={{
            height: 24,
            width: 20
          }}
        />
      </TouchableOpacity>
    )
  };
};