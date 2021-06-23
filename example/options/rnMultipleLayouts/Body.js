import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import BodyAndroid from './BodyAndroid';
import BodyIOS from './BodyIOS'
import BodyTablet from './BodyTablet' 

export const Body = DeviceInfo.isTablet() 
? BodyTablet  
: Platform.select({
  ios: BodyIOS,
  android: BodyAndroid
});
