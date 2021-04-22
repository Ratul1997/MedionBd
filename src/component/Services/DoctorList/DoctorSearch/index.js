/** 
 name: DoctorSearch
 function: This is a component for DoctorSearch
**/
import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
//Colors And Dynamic Screens
import COLORS from '../../../../constants/COLORS';
import normalization from '../../../../constants/normalization';
//Custom TextInput Component
import InputField from './InputField';

//Width of Window
const WIDTH = Dimensions.get('window').width;

export default function DoctorSearch() {
  //render Main View
  return (
    <View style={{alignItems: 'center'}}>
      <InputField text="Doctor, Specialist..." iconName="search" />
      <InputField text="Select Area" iconName="location" />
      <InputField text="Select Date, format: dd/mm/yyyy" iconName="calendar" />
      <TouchableOpacity
        style={{
          search: {
            width: WIDTH * 0.9,
            paddingVertical: normalization(8),
            elevation: 3,
            borderRadius: 10,
            marginTop: normalization(8),
            marginBottom: normalization(15),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.doctorListHeader,
          },
        }}>
        <Text style={{color: '#fff', fontSize: normalization(15)}}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}
