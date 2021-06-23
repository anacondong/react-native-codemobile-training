import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
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
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {DongEntry} from './DongEntry';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from './RootNavigationParams';
import {AS_ACCOUNT} from './constants/Constants';

interface RegisterScreenProps {}

// define Stack Navigation, Put ID it's self
type RegisterScreenNavigationProps = StackNavigationProp<
  RootStackParamsList,
  'Register'
>;

const RegisterScreen: React.FunctionComponent<RegisterScreenProps> = props => {
  // let count = 0; // no side effect on Render
  const navigation = useNavigation<RegisterScreenNavigationProps>();

  const [account, setAccount] = useState({username: '', password: ''});

  const route = useRoute<RouteProp<RootStackParamsList, 'Register'>>();

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

  const handleRegister = async () => {
    navigation.goBack();
  };
  return (
    <ImageBackground
      source={require('./assets/img/gradient_bg.png')}
      style={{flex: 1}}>
      {/* authen section */}

      {/* Banner  */}
      <Image
        source={require('./assets/img/header_react_native.png')}
        style={{height: 100, width: '100%', marginTop: 10}}
        resizeMode="contain"
      />

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
        <View style={{height: 16}}></View>

        {/* Register Btn section */}
        <Button title="Register" onPress={handleRegister} />

        <View style={{height: 16}}></View>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}>
          <Text style={{textAlign: 'center'}}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;
