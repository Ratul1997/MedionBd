/** 
 name: Confirmation
 function: This is a component for Confirmation
**/
import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CalendarPicker from 'react-native-calendar-picker';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';

export default function Confirmation(props) {
  const {navigation} = props;
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
          Your appointment with (Doctor name) has been confirmed on
        </Text>
        <Text style={{textAlign: 'center', fontSize: normalization(18)}}>
          (Date) at (time)
        </Text>
      </View>
    </View>
  );
}
