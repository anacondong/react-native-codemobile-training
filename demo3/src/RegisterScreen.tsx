import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import {Button} from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

interface RegisterScreenProps {}

const RegisterScreen: React.FunctionComponent<RegisterScreenProps> = props => {
  // let count = 0; // no side effect on Render

  const [count, setCount] = useState(0);

  return (
    <ImageBackground
      source={require('./assets/img/gradient_bg.png')}
      style={{flex: 1}}>
      <Text>{count}</Text>
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
        <DongEntry
          icon="user"
          hint="user name"
          onValueChanged={txt => {
            console.log('user name =', txt);
          }}
          
        />

        <View style={{height: 16}}></View>

        {/* Password section */}
        <DongEntry
          icon="lock"
          hint="password"
          onValueChanged={txt => {
            console.log('password =', txt);
          }}
          isPassword
        />

        <View style={{height: 32}}></View>

        {/* Register Btn section */}
        <Button
          title="Register"
          onPress={() => {
            setCount(count + 1);
            console.log('count >>', count);
          }}
        />

        <View style={{height: 16}}></View>

        <Button type="outline" title="Cancel" onPress={() => {}} />

        {/* <TouchableOpacity activeOpacity={0.5}>
            <Text style={{textAlign:'center'}}>Cancel</Text>
        </TouchableOpacity> */}
      </View>

      {/* Banner  */}
      <Image
        source={require('./assets/img/header_react_native.png')}
        style={{height: 100, width: '100%'}}
        resizeMode="contain"
      />
    </ImageBackground>
  );
};

export default RegisterScreen;

interface DongEntryProps {
  icon: string;
  hint?: string;
  onValueChanged: (tet:string) => void; // or any
  isPassword?: boolean;
}
const DongEntry: React.FunctionComponent<DongEntryProps> = props => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {/* Icon */}
      <Icon name={props.icon} size={30} color="#0007" style={{width: 35}} />
      <TextInput
        onChangeText={props.onValueChanged}
        placeholder={props.hint}
        secureTextEntry={props.isPassword ? true: false}
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: '#0003',
          borderRadius: 5,
          marginLeft: 16,
          paddingLeft: 16,
        }}
      />
    </View>
  );
};
