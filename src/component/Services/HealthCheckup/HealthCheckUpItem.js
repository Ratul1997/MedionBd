/** 
 name: HealthCheckUpItem
 function: This is a component for HealthCheckUpItem
**/
import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';

const WIDTH = Dimensions.get('window').width;

const newWidth = WIDTH * 0.4;
export default function HealthCheckUpItem(props) {
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
