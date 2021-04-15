import React from 'react';
import {View, Text, FlatList} from 'react-native';
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';

export default function UpComingReminder(props) {
  const {medicine} = props;
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          margin: normalization(10),
          paddingBottom: normalization(10),
          borderBottomWidth: 0.5,
          borderBottomColor: '#B4D3FC',
        }}>
        <View
          style={{
            flex: 0.17,
            marginRight: normalization(5),
            paddingHorizontal: normalization(15),
            paddingVertical: normalization(10),
            borderWidth: 0.8,
            borderColor: COLORS.deepBlueHeader,
            borderRadius: 10,
          }}>
          <Text
            style={{fontSize: normalization(13), color: COLORS.textDeepBlue}}>
            {item.time}
          </Text>
        </View>

        <View
          style={{
            flex: 0.83,
            padding: normalization(10),
            backgroundColor: '#F0F6FE',
            borderWidth: 0.8,
            borderColor: COLORS.deepBlueHeader,
            borderRadius: 10,
            paddingHorizontal: normalization(15),
          }}>
          <Text
            style={{
              fontSize: normalization(15),
              fontWeight: 'bold',
              color: COLORS.textDeepBlue,
            }}>
            {item.medicineName}
          </Text>
          <Text>{item.amount}</Text>
        </View>
      </View>
    );
  };
  return <FlatList data={medicine} renderItem={renderItem} />;
}
