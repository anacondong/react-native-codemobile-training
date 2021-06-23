import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

import QRCode from 'react-native-qrcode-svg';
const PATH_TO_LOGO = './assets/img/cmdev_icon.png';

export default class TabQRcode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qrValue: '',
      logo: require(PATH_TO_LOGO),
    };
  }

  getQRValue = () => {
    return this.state.qrValue != '' ? this.state.qrValue : 'codemobiles.com';
  };

  render() {
    return (
      <ImageBackground
        source={require('./assets/img/gradient_bg.png')}
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
          source={require('./assets/img/header_react_native.png')}
        />

        <TextInput
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
          onChangeText={text => this.setState({qrValue: text})}
        />
        <ScrollView
          contentContainerStyle={{
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <QRCode value={this.getQRValue()} />

          <View style={styles.section}>
            <QRCode
              value={this.getQRValue()}
              logo={this.state.logo}
              logoSize={50}
            />
          </View>
          <View style={styles.section}>
            <QRCode
              value={this.getQRValue()}
              logo={this.state.logo}
              logoMargin={10}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              marginBottom: 200,
            }}>
            <QRCode
              value={this.getQRValue()}
              logo={this.state.logo}
              logoBorderRadius={15}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

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
