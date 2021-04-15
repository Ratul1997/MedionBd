import React from 'react';
import {View, Text, FlatList} from 'react-native';
import normalization from '../../../constants/normalization';
import COLORS from '../../../constants/COLORS';

export default function Chambers(props) {
  const {chamberData} = props;
  const ChamberItems = ({item}) => {
    return (
      <View
        style={{
          padding: normalization(8),
          paddingHorizontal: normalization(15),
          marginRight: normalization(15),
          marginTop: normalization(5),
          backgroundColor: COLORS.white,
          borderColor: COLORS.textInputBorder,
          borderWidth: 3,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: normalization(15)}}>{item.title}</Text>
        <Text style={{fontSize: normalization(15)}}>{item.address}</Text>
      </View>
    );
  };
  return (
    <View style={{marginVertical: normalization(5)}}>
      <Text
        style={{
          fontSize: normalization(16),
          fontWeight: 'bold',
          marginLeft: normalization(20),
        }}>
        Chambers
      </Text>
      <FlatList
        style={{marginRight: normalization(20), marginLeft: normalization(20)}}
        data={chamberData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={ChamberItems}
        listKey={(item, index) => 'D' + index.toString()}
      />
    </View>
  );
}
