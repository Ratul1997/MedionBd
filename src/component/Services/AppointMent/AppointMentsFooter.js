/** 
 name: AppointMentsFooter
 function: This is a component for AppointMentsFooter
**/
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import normalization from '../../../constants/normalization';
import COLORS from '../../../constants/COLORS';

export default function AppointMentsFooter(props) {
  const {title, onConfirm} = props;
  return (
    <TouchableOpacity
      onPress={onConfirm}
      style={{
        elevation: 6,
        backgroundColor: COLORS.doctorListHeader,
        alignItems: 'center',
        width: '100%',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        padding: normalization(15),
      }}>
      <Text style={{color: '#fff', fontSize: normalization(18)}}>{title}</Text>
    </TouchableOpacity>
  );
}
