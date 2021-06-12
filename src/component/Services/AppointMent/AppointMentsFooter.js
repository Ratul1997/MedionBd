/** 
 name: AppointMentsFooter
 function: This is a component for AppointMentsFooter
**/
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
//Colors And Dynamic Screen
import normalization from '../../../constants/normalization';
import COLORS from '../../../constants/COLORS';

export default function AppointMentsFooter(props) {
  /**
   * Getting properties from navigation
   * 
   * variables-
   * title: title of Footer(string)
   * 
   * functions-
   * onConfirm- confirmation Pressed
   */
  const {title, onConfirm} = props;
  return (
    <TouchableOpacity
      onPress={onConfirm}
      style={{
        elevation: 6,
        backgroundColor: COLORS.doctorListHeader,
        alignItems: 'center',
        width: '90%',
        borderRadius: 30,
        padding: normalization(15),
        justifyContent:'center',
        alignSelf:'center',
        marginVertical: normalization(10)
      }}>
      <Text style={{color: '#fff', fontSize: normalization(18)}}>{title}</Text>
    </TouchableOpacity>
  );
}
