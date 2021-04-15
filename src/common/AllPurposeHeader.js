import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import COLORS from '../constants/COLORS';
import normalization from '../constants/normalization';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export default function AllPurposeHeader(props) {
  const {title, onBackNavigate, filter} = props;
  return (
    <View
      style={{
        height: normalization(50),
        backgroundColor: COLORS.doctorListHeader,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={onBackNavigate}
        style={{padding: normalization(15)}}>
        <AntDesign name="arrowleft" size={25} color={COLORS.white} />
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <Text style={{fontSize: normalization(20), color: COLORS.white}}>
          {title}
        </Text>
      </View>
      {filter && (
        <TouchableOpacity style={{padding: normalization(15)}}>
          <Feather
            name="filter"
            size={25}
            color={COLORS.white}
            style={{transform: [{rotateY: '180deg'}]}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
