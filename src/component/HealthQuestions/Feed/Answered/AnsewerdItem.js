/** 
 name: AnsewerdItem
 function: This is a  component for AnsewerdItem
**/
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//Colors And Dynamic Screen
import COLORS from '../../../../constants/COLORS';
import normalization from '../../../../constants/normalization';

export default function AnsewerdItem(props) {
  /*
  Getting properties from navigation

  variables-
  item: an item of Answered List (Obeject)
  */
  const {item} = props;
  return (
    <View
      style={{
        borderBottomWidth: 0.8,
        borderColor: COLORS.doctorListHeader,
        padding: normalization(13),
      }}>
      <Text style={{fontSize: normalization(16), fontWeight: 'bold'}}>
        {item.patient}{' '}
      </Text>
      <Text style={{fontSize: normalization(14)}}>{item.date}</Text>
      <Text style={{fontSize: normalization(15), color: '#19769F'}}>
        {item.que}
      </Text>
      <Text style={{fontSize: normalization(16)}}>Answer: {item.ans}</Text>
      <Text style={{fontSize: normalization(16), fontWeight: 'bold'}}>
        by {item.doctor}
      </Text>
    </View>
  );
}
