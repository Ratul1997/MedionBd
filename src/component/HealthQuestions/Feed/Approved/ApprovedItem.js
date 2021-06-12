/** 
 name: ApprovedItem
 function: This is a  component for ApprovedItem
**/
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useIsFocused} from '@react-navigation/native'
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

  const onComment = () => {};
  return (
    <View
      style={{
        borderWidth: 2,
        borderTopWidth: 0,
        borderColor: COLORS.doctorListHeader,
        padding: normalization(15),
      }}>
      <Text style={{fontSize: normalization(16), fontWeight: 'bold'}}>
        {item.date}
      </Text>
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
