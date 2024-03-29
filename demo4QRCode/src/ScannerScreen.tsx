/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './RootNavigationParams';

import QRCodeScanner from 'react-native-qrcode-scanner';
interface ScannerScreenProps {}
type ScannerScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Scanner'
>;

const ScannerScreen: React.FunctionComponent<ScannerScreenProps> = props => {
  const scannerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const navigation = useNavigation<ScannerScreenNavigationProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'Scanner'>>();

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 700);
  });

  const onSuccess = (result: string) => {
    route.params?.onResult(result);
    navigation.goBack();
  };

  const showScanner = () => {
    return (
      <QRCodeScanner
        ref={scannerRef}
        showMarker
        onRead={e => onSuccess(e.data)}
        style={{flex: 1}}
        bottomContent={
          <TouchableOpacity
            onPress={() => scannerRef.current.reactivate()}
            style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>SCAN</Text>
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
    <View style={{flex: 1, backgroundColor: 'black'}}>{isReady ? showScanner() : showLoading()}</View>
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
