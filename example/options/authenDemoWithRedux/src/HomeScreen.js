import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from './actions/home.action'
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

class HomeScreen extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
        username: "",
        password: ""
      }
    }

    async componentDidMount(){
      let isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
      if (isLoggedIn != null && isLoggedIn == 'true'){
        let regUsername = await AsyncStorage.getItem('username')
        let regPassword = await AsyncStorage.getItem('password')
        this.setState({
          username: regUsername,
          password: regPassword
        })
      }
    }

    onClickLogin = async ()=>{      
      
      const {username, password} = this.state
      this.props.login(this.state, this.props.navigation)


      // let regUsername = await AsyncStorage.getItem('username')
      // let regPassword = await AsyncStorage.getItem('password')
      // console.log(`${regUsername}, ${regPassword}`)

      // if (username == regUsername && password == regPassword) {
      //   await AsyncStorage.setItem('isLoggedIn', 'true')
      //   this.props.navigation.navigate('App')
      // }else{
      //   alert('Login failed!')
      // }

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
          {/* username section */}
          <View style={{ flexDirection: "row" }}>
            <Icon name="user" size={35} />
            <TextInput
              value = {this.state.username}
              autoCapitalize='none'
              onChangeText={text=>this.setState({username: text})}
              placeholder="Username"
              style={{ flex: 1, marginLeft: 16 }}
            />
          </View>

          {/* password section */}
          <View
            style={{
              flexDirection: "row",
              marginTop: Platform.OS == "android" ? 0 : 10
            }}
          >
            <Icon name="lock" size={35} />
            <TextInput   
              value = {this.state.password}
              secureTextEntry={true}           
              onChangeText={text=>this.setState({password: text})}
              placeholder="Password"
              style={{ flex: 1, marginLeft: 16 }}
            />
          </View>

          <TouchableOpacity
            onPress={this.onClickLogin}
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
            <Text style={{ color: "white" }}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Register');
            }}
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
              height: 30,
              borderRadius: 5
            }}
          >
            <Text style={{ color: "#0005" }}>REGISTER</Text>
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



HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Home",
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
          name="address-card"
          size={20}
          color="#fff"
          style={{
            height: 24,
            width: 24
          }}
        />
      </TouchableOpacity>
    )
  };
};

const mapStateToProps = (state) => ({
  homeReducer: state.homeReducer
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
