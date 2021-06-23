import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

export default class HomeScreen extends Component {
   

  constructor(props) {
    super(props);
    this.state = {
        username:"",
        password:""
    };
  }

  async componentDidMount(){
    let isLoggedIn = await AsyncStorage.getItem("isLoggedIn")
    if (isLoggedIn && isLoggedIn == "yes"){
      let regUsername = await AsyncStorage.getItem("username")
      let regPassword = await AsyncStorage.getItem("password")
      this.setState({username: regUsername, password: regPassword})

    }
  }

  onClickLogin = async ()=>{
    let regUsername = await AsyncStorage.getItem("username")
    let regPassword = await AsyncStorage.getItem("password")
    const{username, password} = this.state
    if (username == regUsername && password == regPassword){
      await AsyncStorage.setItem("isLoggedIn", "yes")
      this.props.navigation.navigate("AppScene")
    }else{
      alert("Login failed")
    }

  }

  render() {
    return (
      <ImageBackground
        source={require('./assets/img/bg.png')}
        style={{flex: 1, flexDirection: 'column'}}>
        <View
          style={{
            backgroundColor: '#fff2',
            marginTop: 16,
            marginLeft: 16,
            marginRight: 16,
            paddingTop: 16,
            paddingLeft: 16,
            paddingRight: 16,
            borderRadius: 5,
          }}>
          {/* Username layout */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: 'yellow',
                borderRadius: 20,
              }}
            />
            <TextInput
              autoCapitalize="none"
              value={this.state.username}
              keyboardType="email-address"
              onChangeText={text=>this.setState({username:text})}
              placeholder="Username"
              style={{
                flex: 1,
                borderColor: '#0003',
                borderWidth: 0.5,
                marginLeft: 16,
                height: 40,
                borderRadius: 5,
                paddingLeft: 8,
              }}
            />
          </View>

          {/* Password layout */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 8,
              marginBottom: 16,
            }}>
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: 'green',
                borderRadius: 20,
              }}
            />
            <TextInput
            secureTextEntry={true}
            autoCapitalize="none"
              value={this.state.password}
              onChangeText={text=>this.setState({password:text})}
              placeholder="Password"
              style={{
                flex: 1,
                borderColor: '#0003',
                borderWidth: 0.5,
                marginLeft: 16,
                height: 40,
                borderRadius: 5,
                paddingLeft: 8,
              }}
            />
          </View>

          
          {/* Login Button */}
          <View style={{marginBottom: 8}}>
            <Button title="Login" onPress={this.onClickLogin} />
          </View>

          <TouchableOpacity
            onPress={()=>this.props.navigation.navigate("register")}
            style={{
              height: 35,
              justifyContent:'center',
              alignItems: 'center',
              backgroundColor: '#FFF3',
              marginBottom:16,
              borderRadius: 5
            }}>
            <Text style={{color: "#000a"}}>Register</Text>
          </TouchableOpacity>
        </View>
         {/* End Authen section */}

         <Image resizeMode="contain" source={require("./assets/img/header_react_native.png")}
          style={{height: 80, width: '100%', marginTop:32}}/>

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