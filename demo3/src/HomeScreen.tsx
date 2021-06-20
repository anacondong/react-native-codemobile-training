import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
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
          {/* Icon */}
          <View
            style={{
              width: 35,
              height: 35,
              backgroundColor: 'green',
              borderRadius: 35 / 2,
            }}
          />
          <TextInput
            placeholder="Username"
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: '#0003',
              borderRadius: 5,
              marginLeft: 16,
              paddingLeft: 16,
            }}
          />
        </View>

        <View style={{height: 16}}></View>

        {/* Password section */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* Icon */}
          <View
            style={{
              width: 35,
              height: 35,
              backgroundColor: 'red',
              borderRadius: 35 / 2,
            }}
          />
          <TextInput
            placeholder="Password"
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: '#0003',
              borderRadius: 5,
              marginLeft: 16,
              paddingLeft: 16,
            }}
          />
        </View>

        <View style={{height: 32}}></View>

        {/* Login Btn section */}
        <Button
          title="Login"
          onPress={() => {
            navigation.navigate('Success', {
              screen: 'Json',
              params: {
                username: 'admin',
              },
            });
          }}
        />

        <View style={{height: 16}}></View>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Register', {dummy: '1234'})}>
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
