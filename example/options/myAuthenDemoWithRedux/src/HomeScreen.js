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
  TouchableOpacity,
  
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
  }

  async componentDidMount() {
    var credentail = { username: "", password: "" };

    const isAuthened = await AsyncStorage.getItem("isAuthened");

    if (isAuthened == "yes") {

      const _username = await AsyncStorage.getItem("username");
      const _password = await AsyncStorage.getItem("password");
      credentail = {
        username: _username,
        password: _password
      };
    }

    this.setState({username: credentail.username, password: credentail.password});
  }

  onClickLogin = async () => {  

    const _regUsername = await AsyncStorage.getItem("username");
    const _regPassword = await AsyncStorage.getItem("password");

    const { username, password } = this.state;


    if (_regUsername == username && _regPassword == password) {
      AsyncStorage.setItem("isAuthened", "yes");
      Keyboard.dismiss();

      
      this.props.navigation.navigate("AppStack",  {
        username: username,
        password: password
      });
    } else {
      Alert.alert("Error, incorrect username or password");
    }
  };

  onClickRegister = () => {
    //Alert.alert("Register");
    this.props.navigation.push("Register");
  };

  render() {

    return (
      <ImageBackground
        source={require("./../assets/img/gradient_bg.png")}
        resizeMode={"stretch"}
        style={styles.container}>
      
      <Image
        resizeMode="contain"
        style={{ width: "100%", height: 100, marginTop: 30, marginBottom: 40 }}
        source={require("./../assets/img/header_react_native.png")}
      />            

        {/* Authen box */}
        <View style={styles.authen_section}>
          
          {/* username box */}
          <View style={styles.entry_section}>
            <Icon
              name="user"
              size={40}
              color="#333"
              style={styles.form_icons}
            />
            <TextInput
              autoCapitalize="none"
              value={this.state.username}
              maxLength={30}
              onChangeText={text => this.setState({ username: text })}
              editable={true}
              placeholder="Username"
              style={{ flex: 1 }}
            />
          </View>

          {/* password box */}
          <View style={styles.entry_section}>
            <Icon
              name="lock"
              size={40}
              color="#333"
              style={styles.form_icons}
            />
            <TextInput
              autoCapitalize="none"
              maxLength={30}
              value={this.state.password}
              onChangeText={text => this.setState({ password: text })}
              secureTextEntry={true}
              editable={true}
              placeholder={"Password"}
              style={{ flex: 1 }}
            />
          </View>

          <View style={{ marginTop: 50 }}>
            <Button onPress={this.onClickLogin} title={"Login"} />
          </View>

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

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Home",
    headerStyle: {
      backgroundColor: '#339CED'
    },
    headerTintColor: "#FFFFFF",
    headerTitleStyle: { color: "#fff" },
    headerBackTitle: " ",
    headerRight: (
      <TouchableOpacity
        onPress={() => Alert.alert("www.codemobiles.com")}
        style={{ padding: 10 }}>
        <Icon
          name="unlock"
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

