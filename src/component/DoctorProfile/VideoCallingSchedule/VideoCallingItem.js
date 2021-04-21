/** 
 name: VideoCallingItem
 function: This is a  component for VideoCallingItem
**/
import React from 'react';
import {View, Text} from 'react-native';
//Colors And Dynamic Screen
import normalization from '../../../constants/normalization';
import COLORS from '../../../constants/COLORS';

export default function VideoCallingItem(props) {
  /*
  Getting properties from navigation

  variables-
  item: Video Call Item (Object)
  backgroundColor: color of backGround
  */

  const {item, backgroundColor} = props;
  return (
    <View
      style={{
        width: '90%',
        borderRadius: 10,
        backgroundColor,
        padding: normalization(10),
        flexDirection: 'row',
        marginTop: normalization(10),
        alignSelf: 'center',
      }}>
      <View
        style={{borderRightWidth: 0.6, paddingHorizontal: normalization(15)}}>
        <Text
          style={{
            fontSize: normalization(15),
            color: COLORS.deepBlueHeader,
            fontWeight: 'bold',
          }}>
          {item.date}
        </Text>
        <Text style={{fontSize: normalization(15), fontWeight: 'bold'}}>
          {item.month}
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: normalization(20),
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: normalization(15),
            color: COLORS.deepBlueHeader,
            fontWeight: 'bold',
          }}>
          {item.day}, {item.time}
        </Text>
      </View>
    </View>
  );
}
