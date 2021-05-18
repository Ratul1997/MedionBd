/** 
 name: Confirmation
 function: This is a component for Confirmation
**/
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// Colors And Dynamic Screen
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';
//Vector Icons
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Confirmation(props) {
  /*
  Getting properties from navigation

  variables-
  navigation: navigation properties
  */
  const {navigation, route} = props;
  const {name, time} = route.params;
  console.log(props)
  return (
    <View style={{flex: 1, backgroundColor: COLORS.DoctorAppnt_Background}}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{flex: 0.1, padding: 15}}>
        <AntDesign name="close" size={30} color={COLORS.doctorListHeader} />
      </TouchableOpacity>

      <View style={{flex: 0.9, alignItems: 'center', padding: 25}}>
        <Text
          style={{
            fontSize: normalization(28),
            color: COLORS.doctorListHeader,
            fontWeight: 'bold',
          }}>
          Congratulation
        </Text>
        <Text style={{textAlign: 'center', fontSize: normalization(18)}}>
          Your appointment with {name} has been confirmed on
        </Text>
        <Text style={{textAlign: 'center', fontSize: normalization(18)}}>
          {time}
        </Text>
      </View>
    </View>
  );
}
