import React from 'react';
import {View, Text, ImageBackground, TextInput, Button
,TouchableOpacity
,Image
} from 'react-native';

interface HomeScreenProps {}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = props => {
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
        <Button title="Login" onPress={() => {}} />

        <View style={{height: 16}}></View>

        <TouchableOpacity activeOpacity={0.5}>
            <Text style={{textAlign:'center'}}>Register</Text>
        </TouchableOpacity>
      </View>

    {/* Banner  */}
    <Image 
        source={require('./assets/img/header_react_native.png')}
        style={{height:100,width: '100%'}}
        resizeMode='contain'
    />

    </ImageBackground>
  );
};

export default HomeScreen;
