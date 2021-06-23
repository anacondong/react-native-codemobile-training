'use strict';
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class ScanScreen extends Component {
  onSuccess(e) {
    // Works on both iOS and Android
    Alert.alert(
      'Alert Title',
      e.data,
      [
        { text: 'Close', onPress: () => this.scanner.reactivate(), style: 'cancel' },
      ],
      { cancelable: false }
    )
  }

  scanAgain = ()=> {
    this.scanner.reactivate();
  }

  render() {
    return (
      <QRCodeScanner
        ref={(node) => { this.scanner = node }}
        onRead={this.onSuccess.bind(this)}
        topContent={
          <Text style={styles.centerText}>
            Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity onPress={this.scanAgain} style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>Scan</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});



/*
 *  maven { url "https://jitpack.io" }
 * 
  dependencies {
  def googlePlayServicesVersion = rootProject.hasProperty('googlePlayServicesVersion')  ? rootProject.googlePlayServicesVersion : DEFAULT_GOOGLE_PLAY_SERVICES_VERSION
  def supportLibVersion = rootProject.hasProperty('supportLibVersion')  ? rootProject.supportLibVersion : DEFAULT_SUPPORT_LIBRARY_VERSION

  provided 'com.facebook.react:react-native:+'
  provided 'com.facebook.infer.annotation:infer-annotation:+'
  compile "com.google.zxing:core:3.2.1"
  compile "com.drewnoakes:metadata-extractor:2.9.1"
  compile "com.google.android.gms:play-services-vision:$googlePlayServicesVersion"
  compile "com.android.support:exifinterface:$supportLibVersion"
  compile "com.android.support:support-annotations:$supportLibVersion"
  compile "com.android.support:support-v4:$supportLibVersion"
}
 */