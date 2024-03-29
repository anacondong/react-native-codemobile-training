import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useNavigation, StackActions} from '@react-navigation/native';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from './RootNavigationParams';
import AsyncStorage from '@react-native-community/async-storage';
import {AS_AUTHEN_SUCCESS, AS_ACCOUNT} from './Constants';
import { DongEntry } from './DongEntry';

interface HomeScreenProps {}

// define Stack Navigation, Put ID it's self
type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'Home'
>;

const HomeScreen: React.FunctionComponent<HomeScreenProps> = props => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [account, setAccount] = useState<AccountProps>({
    username: '',
    password: '',
  });

  React.useEffect(() => {
    console.log('Home created');
    navigation.setOptions({
      title: 'Home',
      headerStyle: {
        backgroundColor: '#119CED',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {color: '#fff'},
      headerBackTitle: ' ',
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Alert.alert('www.codemobiles.com')}
          style={{padding: 10}}>
          <Icon
            name="address-card"
            size={20}
            color="#fff"
            style={{
              height: 24,
              width: 24,
            }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  const handleLogin = async () => {
    const regAccJson = await AsyncStorage.getItem(AS_ACCOUNT);
    if (regAccJson) {
      const regAcc: AccountProps = JSON.parse(regAccJson);
      if (
        account.username === regAcc.username &&
        account.password === regAcc.password
      ) {
        await AsyncStorage.setItem(AS_AUTHEN_SUCCESS,'true')
        navigation.dispatch(StackActions.replace('Success',{screen:'Json'}));
      } else {
        Alert.alert('Failed Login');
      }
    } else {
      Alert.alert('Failed Login');
    }
  };

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

        {/* Password section */}
        <DongEntry
          icon="lock"
          hint="password"
          onValueChanged={txt => {
            setAccount({...account, password: txt});
          }}
          isPassword
        />

        {/* Login Btn section */}

        <Button title="Login" onPress={handleLogin} />

        <View style={{height: 16}}></View>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() =>
            navigation.navigate('Register', {
              dummy: 'Dummy value pass by route ',
            })
          }>
          <Text style={{textAlign: 'center'}}>Register</Text>
        </TouchableOpacity>
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

export default HomeScreen;
