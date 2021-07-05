/* eslint-disable react-native/no-inline-styles */
import React, { Component, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import QRCode from 'react-native-qrcode-svg';
const PATH_TO_LOGO = './img/cmdev_icon.png';


interface TabQRcodeProps { }

const QRcodeScreen: React.FunctionComponent<TabQRcodeProps> = props => {
  const [qrValue, setQrValue] = useState('');

  return (
    <ImageBackground
      source={require('./assets/img/gradient_bg.png')}
      resizeMode={'stretch'}
      style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <MyQRCode
          value={qrValue}
        />
        <TextInput
          onChangeText={text => setQrValue(text)}
          placeholder="Insert Code"
          style={{
            fontSize: 18,
            height: 60,
            textAlign: 'center',
            borderWidth: 2,
            borderColor: '#000',
            borderRadius: 5,
            marginLeft: 32,
            marginRight: 32,
            marginBottom: 32,
            marginTop: 32,
          }}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default QRcodeScreen;

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
    <View style={{ marginTop: 8 }}>
      <QRCode
        {...props}
        value={props.value != '' ? props.value : 'www.google.com'}
      />
    </View>
  );
};
