import React, {Component} from 'react';
import {  
  View,
  Text,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

const CMEntryFunc = ({iconName, hint, onChangeValue, isPassword, keyboardLayout})=>{

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
      }}>
      <Icon name={iconName} size={26} />
      <TextInput
        autoCapitalize="none"
        keyboardType={keyboardLayout}
        secureTextEntry={isPassword}
        onChangeText={onChangeValue}
        placeholder={hint}
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
  );
}

CMEntryFunc.prototype = {
  iconName : PropTypes.string,
  hint: PropTypes.string,  
  onChangeValue: PropTypes.any,
  isPassword: PropTypes.oneOf([true, false]),
  keyboardLayout: PropTypes.string
}

class CMEntryClass extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 8,
        }}>
        <Icon name={this.props.iconName} size={26} />
        <TextInput
          autoCapitalize="none"
          keyboardType={this.props.keyboardLayout}
          secureTextEntry={this.props.isPassword}
          onChangeText={this.props.onChangeValue}
          placeholder={this.props.hint}
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
    );
  }
}

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onClickRegister = async ()=>{
    // Destructuring
    const{username, password} = this.state
    await AsyncStorage.setItem("username", username)
    await AsyncStorage.setItem("password", password)
    this.props.navigation.goBack()
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
          <CMEntryFunc
            keyboardLayout="email-address"
            iconName="user"
            hint="Username"
            onChangeValue={text => this.setState({username: text})}
          />
          {/* Password layout */}
          <CMEntryFunc
            iconName="lock"
            hint="Password"
            onChangeValue={text => this.setState({password: text})}
            isPassword={true}
          />

          {/* Login Button */}
          <View style={{marginBottom: 8, marginTop: 16}}>
            <Button
              title="Confirm"
              onPress={this.onClickRegister}
            />
          </View>

          <TouchableOpacity
          onPress={()=>this.props.navigation.goBack()}
            style={{
              height: 35,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFF3',
              marginBottom: 16,
              borderRadius: 5,
            }}>
            <Text style={{color: '#000a'}}>Cancel</Text>
          </TouchableOpacity>
        </View>
        {/* End Authen section */}

        <Image
          resizeMode="contain"
          source={require('./assets/img/header_react_native.png')}
          style={{height: 80, width: '100%', marginTop: 32}}
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
    
  };
};