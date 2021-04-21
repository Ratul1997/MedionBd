/** 
 name: ReferenceCode
 function: This is a component for ReferenceCode
**/

import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import normalization from '../../../../constants/normalization';
import COLORS from '../../../../constants/COLORS';

export default function ReferenceCode() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginBottom: 30,
        elevation: 6,
        borderRadius: 15,
        width: '95%',
        padding: 20,
      }}>
      <Text style={{fontSize: normalization(16), color: '#444547', margin: 10}}>
        Reference ID (if any)
      </Text>
      <TextInput
        placeholder="Enter your Ref. Id"
        style={{
          fontSize: normalization(14),
          padding: 8,
          borderWidth: 2,
          borderRadius: 10,
          borderColor: '#979A9A',
          marginBottom: 10,
        }}
      />
      <TouchableOpacity
        style={{
          width: '100%',
          backgroundColor: COLORS.doctorListHeader,
          padding: 10,
          borderRadius: 10,
          marginBottom: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: normalization(16), color: '#fff'}}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
}
