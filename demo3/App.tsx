import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import HomeScreen from './src/HomeScreen';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = props => {
  return (
    <ImageBackground
      source={require('./src/assets/img/gradient_bg.png')}
      style={{flex: 1}}>
      {/* authen section */}

      <View
        style={{
          backgroundColor: '#FFF7',
          height: 200,
          margin: 30,
          borderRadius: 10,
          flexDirection: 'column',
        }}></View>


    </ImageBackground>
  );
};

export default App;
