npm i @react-native-community/async-storage react-navigation react-native-gesture-handler react-native-reanimated react-navigation-stack react-navigation-tabs react-native-iphone-x-helper react-native-svg react-native-qrcode-svg react-native-camera react-native-qrcode-scanner react-native-permissions
missingDimensionStrategy 'react-native-camera', 'general'

react-native link react-native-permissions
cd ios 
pod install


rm -rf node_modules;
rm -rf $TMPDIR/react-native-packager-cache-*;
rm -rf $TMPDIR/metro-*;
rm -rf $TMPDIR/react-*;
rm -rf $TMPDIR/haste-*;
watchman watch-del-all;
yarn;
yarn start --reset-cache; (for starting the bundler)