import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
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

interface HomeScreenProps {}

// define Stack Navigation, Put ID it's self
type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'Home'
>;

const HomeScreen: React.FunctionComponent<HomeScreenProps> = props => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

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

  const handleLogin = () => {
    navigation.navigate('Success');
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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Input
            autoCapitalize="none"
            placeholder="UserName"
            leftIcon={{type: 'font-awesome', name: 'user'}}
            onChangeText={() => {}}
          />
        </View>

        {/* Password section */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Input
            secureTextEntry
            autoCapitalize="none"
            placeholder="Password"
            leftIcon={{type: 'font-awesome', name: 'lock'}}
            onChangeText={() => {}}
          />
        </View>

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
