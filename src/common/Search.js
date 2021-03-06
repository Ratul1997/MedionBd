import React from 'react';
import {View, Text} from 'react-native';
import InputField from '../component/Services/DoctorList/DoctorSearch/InputField';

export default function Search(props) {
  const {onChangeText, value, title} = props;
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <InputField
        text={title}
        iconName="search"
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}
