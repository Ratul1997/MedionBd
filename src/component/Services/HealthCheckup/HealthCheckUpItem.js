/** 
 name: HealthCheckUpItem
 function: This is a component for HealthCheckUpItem
**/
import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
//Colors And Dynamic Screens
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';
//Width of Window
const WIDTH = Dimensions.get('window').width;
//mew Width of Window
const newWidth = WIDTH * 0.4;
export default function HealthCheckUpItem(props) {
  /*
  Getting properties from navigation

  variables-
  item: HealthCheckUpItem data (Object)

  functions-
  onNavigate- passing from parent Component
  */
  const {item, onNavigate} = props;

  return (
    <TouchableOpacity
      onPress={onNavigate}
      style={{
        marginVertical: normalization(15),
        marginHorizontal: normalization(10),
        backgroundColor: COLORS.white,
        width: '44%',
        elevation: 6,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image style={{height: newWidth, width: newWidth}} source={item.img} />
      <Text
        style={{
          marginTop: normalization(10),
          fontSize: 16,
          textAlign: 'center',
        }}>
        {item.title} Health Checkup
      </Text>
    </TouchableOpacity>
  );
}
