import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  Image,
} from 'react-native';

import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { InputEntry } from './components/InputEntry';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { RootStackParamsList } from './navigation/RootNavigationParams';
import AsyncStorage from '@react-native-community/async-storage';
import { AS_ACCOUNT } from './Constants';
import { REGISTER_REQUEST } from './constants/Constants';

interface RegisterScreenProps { }

// define Stack Navigation, Put ID it's self
type RegisterScreenNavigationProps = StackNavigationProp<
  RootStackParamsList,
  'Register'
>;

const RegisterScreen: React.FunctionComponent<RegisterScreenProps> = props => {
  // let count = 0; // no side effect on Render
  const navigation = useNavigation<RegisterScreenNavigationProps>();

  const [account, setAccount] = useState({ username: '', password: '' });

  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log('Register created');
    navigation.setOptions({
      title: 'Register',
      headerStyle: {
        backgroundColor: '#119CED',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: { color: '#fff' },
      headerBackTitle: ' ',
    });
  }, []);

  const handleRegister = async () => {

    dispatch({ type: REGISTER_REQUEST, payload: { username: account.username, password: account.password } })
    await AsyncStorage.setItem(AS_ACCOUNT, JSON.stringify(account));
    navigation.goBack();

  }
  return (
    <ImageBackground
      source={require('./assets/img/gradient_bg.png')}
      style={{ flex: 1 }}>
      {/* Banner  */}
      <Image
        source={require('./assets/img/header_react_native.png')}
        style={{ height: 100, width: '100%' }}
        resizeMode="contain"
      />

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
        <InputEntry
          icon="user"
          hint="user name"
          onValueChanged={txt => {
            setAccount({ ...account, username: txt });
          }}
        />

        <View style={{ height: 16 }}></View>

        {/* Password section */}
        <InputEntry
          icon="lock"
          hint="password"
          onValueChanged={txt => {
            setAccount({ ...account, password: txt });
          }}
          isPassword
        />

        {/* Register Btn section */}
        <Button
          title="Register"
          onPress={handleRegister}
        />

        <View style={{ height: 16 }}></View>

        <Button
          type="outline"
          title="Cancel"
          onPress={() => {
            navigation.goBack();
          }}
        />

        {/* <TouchableOpacity activeOpacity={0.5}>
            <Text style={{textAlign:'center'}}>Cancel</Text>
        </TouchableOpacity> */}
      </View>


    </ImageBackground>
  );
};

export default RegisterScreen;
