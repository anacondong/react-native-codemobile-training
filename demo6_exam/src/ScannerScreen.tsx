/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from './navigation/RootNavigationParams';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { CODE_SCAN_ADD_REQUEST } from './constants/Constants';
interface ScannerScreenProps { }
type ScannerScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'Scanner'
>;

const ScannerScreen: React.FunctionComponent<ScannerScreenProps> = props => {
  const dispatch = useDispatch();

  const scannerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const navigation = useNavigation<ScannerScreenNavigationProp>();
  const route = useRoute<RouteProp<RootStackParamsList, 'Scanner'>>();

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 700);
  });

  const onSuccess = (result: string) => {
    dispatch({ type: CODE_SCAN_ADD_REQUEST, payload: result })
    navigation.goBack();
  };

  const showScanner = () => {
    return (
      <QRCodeScanner
        showMarker
        onRead={e => onSuccess(e.data)}
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    );
  };

  const showLoading = () => {
    return (
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          textAlignVertical: 'center',
          color: 'white',
        }}>
        Loading...
      </Text>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>{isReady ? showScanner() : showLoading()}</View>
  );
};

export default ScannerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  buttonText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#FFF',
  },
  buttonTouchable: {
    height: 50,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fa4a4d',
  },
});
