/** 
 name: ApprovedItem
 function: This is a  component for ApprovedItem
**/
import React from 'react';
import {View, Text} from 'react-native';

//Colors And Dynamic Screen
import normalization from '../../../../constants/normalization';
import COLORS from '../../../../constants/COLORS';

export default function ApprovedItem(props) {
  /**
   * Getting properties from navigation
   * variables-
   * item: item of Approved List (Object)
   */
  const {item} = props;
  return (
    <View
      style={{
        borderWidth: 2,
        borderTopWidth: 0,
        borderColor: COLORS.doctorListHeader,
        padding: normalization(15),
      }}>
      <Text style={{fontSize: normalization(16), fontWeight: 'bold'}}>
        {item.name}{' '}
      </Text>
      <Text style={{fontSize: normalization(14)}}>{item.date}</Text>
      <Text style={{fontSize: normalization(15), color: '#19769F'}}>
        {item.que}
      </Text>
    </View>
  );
}
