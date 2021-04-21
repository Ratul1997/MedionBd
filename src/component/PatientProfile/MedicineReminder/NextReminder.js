/** 
 name: NextReminder
 function: This is a  component for NextReminder
**/

import React from 'react';
import {View, Text} from 'react-native';
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';

import Ionicons from 'react-native-vector-icons/Ionicons';
export default function NextReminder() {
  return (
    <>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: COLORS.textDeepBlue,
          marginVertical: normalization(15),
          marginHorizontal: normalization(20),
        }}>
        Next Reminder
      </Text>
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          borderWidth: 0.8,
          borderColor: COLORS.deepBlueHeader,
          backgroundColor: '#F0F6FE',
          elevation: 4,
          borderRadius: 20,
          alignSelf: 'center',
          justifyContent: 'center',
          marginBottom: normalization(15),
          padding: normalization(15),
        }}>
        <View style={{marginRight: normalization(20)}}>
          <Ionicons
            name="md-alarm-outline"
            size={normalization(40)}
            color={COLORS.deepBlueHeader}
          />
          <Text
            style={{fontSize: normalization(13), color: COLORS.textDeepBlue}}>
            (Tiime)
          </Text>
        </View>
        <Text style={{flex: 1}}>
          <Text
            style={{
              fontSize: normalization(18),
              fontWeight: 'bold',
              color: COLORS.textDeepBlue,
            }}>
            (Medicine Name)
          </Text>
          <Text
            style={{fontSize: normalization(16), color: COLORS.textDeepBlue}}>
            (Amount of pills)
          </Text>
        </Text>
      </View>
    </>
  );
}
