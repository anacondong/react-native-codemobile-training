import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from './navigation/RootNavigationParams';
import { useDispatch, useSelector } from 'react-redux';
import { AuthSelector } from './reducers/auth.reducer';
import { InputEntry } from './components/InputEntry';
import { AUTH_LOGIN_REQUEST } from './constants/Constants';

interface HomeScreenProps { }

// define Stack Navigation, Put ID it's self
type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'Home'
>;

interface AccountProps {
  username: string;
  password: string;
}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = props => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [account, setAccount] = useState<AccountProps>({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();
  const authReducer = useSelector(AuthSelector);


  React.useEffect(() => {
    navigation.setOptions({
      title: 'Home',
      headerStyle: {
        backgroundColor: '#119CED',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: { color: '#fff' },
      headerBackTitle: ' ',
    });
  }, [authReducer.isReady]);

  const renderError = () => {
    return (authReducer.error) ? <Text style={{ textAlign: 'center', color: "red" }}>{authReducer.error}</Text> : null;
  }

  return (
    <ImageBackground
      source={require('./assets/img/gradient_bg.png')}
      style={{ flex: 1 }}>

      {/* Banner  */}
      <Image
        source={require('./assets/img/header_react_native.png')}
        style={{ height: 100, width: '100%' }}
        resizeMode="contain"
      />

      {renderError()}

      {/* authen section */}
      <View
        style={{
          padding: 25,
          backgroundColor: '#FFF7',
          margin: 30,
          borderRadius: 10,
          flexDirection: 'column',
        }}>
        {/* Username section */}
        <InputEntry
          icon="user"
          hint="user name"
          onValueChanged={txt => {
            setAccount({ ...account, username: txt });
          }}
        />

        {/* Password section */}
        <InputEntry
          icon="lock"
          hint="password"
          onValueChanged={txt => {
            setAccount({ ...account, password: txt });
          }}
          isPassword
        />

        {/* Login Btn section */}

        <Button title="Login" onPress={() => {
          dispatch({ type: AUTH_LOGIN_REQUEST, payload: { username: account.username, password: account.password } })
        }

        } />

        <View style={{ height: 16 }}></View>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() =>
            navigation.navigate('Register', {
              dummy: 'Dummy value pass by route ',
            })
          }>
          <Text style={{ textAlign: 'center' }}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
