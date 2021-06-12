/** 
 name: AnsewerdItem
 function: This is a  component for AnsewerdItem
**/
import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

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
  const onComment = () => {};
  return (
    <View
      style={{
        borderBottomWidth: 0.8,
        borderColor: COLORS.doctorListHeader,
        padding: normalization(13),
      }}>
      <Text style={{fontSize: normalization(16), fontWeight: 'bold'}}>
        {item.patient_name}{' '}
      </Text>
      <Text style={{fontSize: normalization(14)}}>{item.date}</Text>
      <Text style={{fontSize: normalization(15), color: '#19769F'}}>
        {item.questions}
      </Text>
      <TouchableOpacity
        onPress={onComment}
        style={{position: 'absolute', right: 10, bottom: 10}}>
        <Text style={{color: COLORS.deepBlueHeader}}>Comments</Text>
      </TouchableOpacity>
    </View>
  );
}
