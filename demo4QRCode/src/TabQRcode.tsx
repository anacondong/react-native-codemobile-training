/* eslint-disable react-native/no-inline-styles */
import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

import QRCode from 'react-native-qrcode-svg';
const PATH_TO_LOGO = './img/cmdev_icon.png';
interface TabQRcodeProps {}

const TabQRcode: React.FunctionComponent<TabQRcodeProps> = props => {
  const [qrValue, setQrValue] = useState('');

  return (
    <ImageBackground
      source={require('./img/gradient_bg.png')}
      resizeMode={'stretch'}
      style={styles.container}>
      <Image
        resizeMode={'contain'}
        style={{
          width: '100%',
          height: 120,
          ...ifIphoneX({marginTop: 30}, {marginTop: 0}),
          padding: 0,
        }}
        source={require('./img/header_react_native.png')}
      />
      <TextInput
        onChangeText={text => setQrValue(text)}
        placeholder="QRCode Value"
        style={{
          fontSize: 18,
          height: 40,
          textAlign: 'center',
          borderWidth: 1,
          borderColor: '#fff3',
          borderRadius: 5,
          marginLeft: 32,
          marginRight: 32,
          marginBottom: 32,
          marginTop: 32,
        }}
      />
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        {[1, 2, 3, 4, 5, 6, 7].map((value, index) => (
          <MyQRCode
            color={value % 2 ? 'red' : 'green'}
            key={index}
            value={qrValue}
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default TabQRcode;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'stretch',
    paddingTop: 15,
    paddingBottom: 15,
  },
  section: {
    marginTop: 15,
    marginBottom: 15,
  },
});

type MyQRCodeProps = {
  value: string;
};

const MyQRCode: React.FC<MyQRCodeProps> = props => {
  return (
    <View style={{marginTop: 8}}>
      <QRCode
        {...props}
        value={props.value != '' ? props.value : 'www.google.com'}
      />
    </View>
  );
};
