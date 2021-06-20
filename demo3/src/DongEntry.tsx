import React from 'react';
import {View, TextInput, TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface DongEntryProps extends TextInputProps {
  icon: string;
  hint?: string;
  onValueChanged: (tet: string) => void; // or any
  isPassword?: boolean;
}

export const DongEntry: React.FunctionComponent<DongEntryProps> = props => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {/* Icon */}
      <Icon name={props.icon} size={30} color="#0007" style={{width: 35}} />

      <TextInput
        autoCapitalize="none"
        onChangeText={props.onValueChanged}
        placeholder={props.hint}
        secureTextEntry={props.isPassword ? true : false}
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
