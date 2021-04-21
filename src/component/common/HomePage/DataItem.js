/** 
 name: DataItem
 function: This is a  component for DataItem
**/
import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
//Colors And Dynamic Screen
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';

const itemWidth = Dimensions.get('window').width * 0.35;

const DataItem = ({item, navigation, screenName}) => {
  return (
    <TouchableOpacity
      style={{
        width: itemWidth,
        height: itemWidth,
        borderRadius: 10,
        elevation: 6,
        backgroundColor: COLORS.white,
        margin: normalization(20),
        marginBottom: normalization(10),
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => navigation.navigate(screenName)}>
      <Image
        style={{
          height: '70%',
          width: '70%',
          borderRadius: normalization(10),
          marginBottom: normalization(5),
        }}
        source={item.image}
      />
      <View
        style={{
          borderTopWidth: 0.5,
          height: 0,
          width: '100%',
          marginTop: normalization(5),
        }}></View>
      <Text>{item.text}</Text>
    </TouchableOpacity>
  );
};
export default DataItem;
