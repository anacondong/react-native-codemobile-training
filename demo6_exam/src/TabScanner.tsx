/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Alert,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { useNavigation, StackActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from './navigation/RootNavigationParams';
import { CodeScanSelector } from './reducers/codescan.reducer';
import { CODE_SCAN_CLEAR_REQUEST } from './constants/Constants';

interface TabScannerProps { }
type TabScannerNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'MainTab'
>;

const TabScanner: React.FunctionComponent<TabScannerProps> = props => {

  const codeScanSelector = useSelector(CodeScanSelector);
  const navigation = useNavigation<TabScannerNavigationProp>();
  const dispatch = useDispatch();
  const onClickScan = () => {
    navigation.navigate('Scanner');
  };

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
          padding: 0,
          ...ifIphoneX({ marginTop: 30 }, { marginTop: 0 }),
        }}
        source={require('./assets/img/header_react_native.png')}
      />
      <Text>CODE: {(codeScanSelector) ? codeScanSelector.codeScan : "Please Click Scan !!"}
      </Text>
      <Text onPress={() => dispatch({ type: CODE_SCAN_CLEAR_REQUEST })}>Clear</Text>
      <TouchableOpacity
        style={{
          flex: 1,
          marginBottom: 16,
          alignSelf: 'center',
          justifyContent: 'center',
        }}
        onPress={() => onClickScan()}>
        <Image
          source={require('./assets/img/scan_button.png')}
          style={{ width: 100, height: 100 }}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default TabScanner;

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
    flex: 1,
    height: 100,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fa4a4d',
  },
});
