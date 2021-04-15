import React from 'react';
import {View, Text} from 'react-native';
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';

export default function PatientItem(props) {
  const {item} = props;
  return (
    <View
      style={{
        width: '90%',
        alignItems: 'baseline',
        paddingHorizontal: normalization(10),
        paddingVertical: normalization(15),
        backgroundColor: '#B4D3FC',
        flexDirection: 'row',
        marginTop: normalization(10),
        alignSelf: 'center',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: COLORS.textInputBorder,
      }}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: normalization(15)}}>
          {item.date}, {item.month}
        </Text>
        <Text style={{fontSize: normalization(16)}}>{item.PatientName}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: normalization(14),
            fontWeight: 'bold',
            color: COLORS.textDeepBlue,
          }}>
          Prescription{' '}
        </Text>
        <Text
          style={{
            fontSize: normalization(14),
            fontWeight: 'bold',
            color: COLORS.textDeepBlue,
          }}>
          Reports
        </Text>
      </View>
    </View>
  );
}
