import React from 'react';
import { View, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

interface InputEntryProps extends TextInputProps {
  icon: string;
  hint?: string;
  onValueChanged: (tet: string) => void; // or any
  isPassword?: boolean;
}

export const InputEntry: React.FunctionComponent<InputEntryProps> = props => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {/* Icon */}
      <Icon name={props.icon} size={30} />

      <Input autoCapitalize="none"
        onChangeText={props.onValueChanged}
        placeholder={props.hint}
        secureTextEntry={props.isPassword ? true : false}
      />



    </View>
  );
};
