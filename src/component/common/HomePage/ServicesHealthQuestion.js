import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';
import DataItem from './DataItem';

export default function ServicesHealthQuestion(props) {
  const {data, title, navigation} = props;
  const renderItem = ({item, index}) => {
    return (
      <DataItem item={item} screenName={item.navPage} navigation={navigation} />
    );
  };
  return (
    <View
      style={{
        width: '100%',
        paddingStart: normalization(10),
        paddingEnd: normalization(10),
      }}>
      <View style={{flexDirection: 'row', width: '100%', overflow: 'hidden'}}>
        <Text
          style={{
            fontSize: normalization(18),
            fontWeight: 'bold',
            fontFamily: COLORS.font_family,
            marginEnd: normalization(5),
          }}>
          {title}
        </Text>
        <View
          style={{
            alignSelf: 'center',
            marginEnd: normalization(10),
            borderWidth: 0.5,
            borderColor: COLORS.black,
            width: '100%',
            height: 0,
          }}
        />
      </View>

      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        style={{alignSelf: 'center'}}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        listKey={(item, index) => 'D' + index.toString()}
      />
    </View>
  );
}
