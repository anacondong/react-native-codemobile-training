import React, {useEffect, useState} from 'react';
import { Alert } from 'react-native';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {DongEntry} from './DongEntry';

interface RegisterScreenProps {}

const RegisterScreen: React.FunctionComponent<RegisterScreenProps> = props => {
  // let count = 0; // no side effect on Render
  const navigation = useNavigation();
  const [account, setAccount] = useState({username: '', password: ''});

  React.useEffect(() => {
    console.log('Register created');
    navigation.setOptions({
      title: 'Register',
      headerStyle: {
        backgroundColor: '#119CED',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {color: '#fff'},
      headerBackTitle: ' ',
    });
  }, []);

  return (
    <ImageBackground
      source={require('./assets/img/gradient_bg.png')}
      style={{flex: 1}}>
      {/* authen section */}

      <View
        style={{
          padding: 25,
          backgroundColor: '#FFF7',
          margin: 30,
          borderRadius: 10,
          flexDirection: 'column',
        }}>
        {/* Username section */}
        <DongEntry
          icon="user"
          hint="user name"
          onValueChanged={txt => {
            setAccount({...account, username: txt});
          }}
        />

        <View style={{height: 16}}></View>

        {/* Password section */}
        <DongEntry
          icon="lock"
          hint="password"
          onValueChanged={txt => {
            setAccount({...account, password: txt});
          }}
          isPassword
        />

        <Text>debug : {JSON.stringify(account)}</Text>

        <View style={{height: 32}}></View>

        {/* Register Btn section */}
        <Button
          title="Register"
          onPress={() => {
            console.log('Register');
          }}
        />

        <View style={{height: 16}}></View>

        <Button type="outline" title="Cancel" onPress={() => {navigation.goBack}} />

        {/* <TouchableOpacity activeOpacity={0.5}>
            <Text style={{textAlign:'center'}}>Cancel</Text>
        </TouchableOpacity> */}
      </View>

      {/* Banner  */}
      <Image
        source={require('./assets/img/header_react_native.png')}
        style={{height: 100, width: '100%'}}
        resizeMode="contain"
      />
    </ImageBackground>
  );
};

export default RegisterScreen;
