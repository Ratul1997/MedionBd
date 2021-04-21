/** 
 name: Order
 function: This is a  component for Order
**/

import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import COLORS from '../../../../constants/COLORS';
import normalization from '../../../../constants/normalization';
import PatientHistoryData from '../../../../helpers/DummyData/PatientHistoryData';
import Entypo from 'react-native-vector-icons/Entypo';
export default function Order() {
  const packages = PatientHistoryData.packages;
  const medicine = PatientHistoryData.medicine;

  const package_renderItem = ({item}) => {
    return (
      <View style={{borderBottomWidth: 0.5, borderBottomColor: '#B4D3FC'}}>
        <View
          style={{
            flex: 0.87,
            padding: normalization(10),
            marginVertical: normalization(10),
            backgroundColor: '#F0F6FE',
            borderWidth: 0.8,
            borderColor: COLORS.deepBlueHeader,
            borderRadius: 10,
            paddingHorizontal: normalization(15),
          }}>
          <Text style={{fontSize: normalization(15), fontWeight: 'bold'}}>
            {item.name}
          </Text>
          <Text>Purchased on {item.purchased}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            overflow: 'hidden',
          }}>
          <Text style={styles.nameStyle}>Medicine Names</Text>
          <View style={styles.straightLine} />
        </View>
        <FlatList data={medicine} renderItem={renderItem} />
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Entypo name="dot-single" size={normalization(27)} />
        <Text
          style={{
            fontSize: normalization(15),
            marginHorizontal: normalization(10),
          }}>
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          overflow: 'hidden',
        }}>
        <Text style={styles.nameStyle}>Health Packages</Text>
        <View style={styles.straightLine} />
      </View>
      <FlatList data={packages} renderItem={package_renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: COLORS.Width,
    height: '100%',
    backgroundColor: COLORS.white,
    elevation: 6,
    paddingHorizontal: normalization(20),
    paddingVertical: normalization(15),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  nameStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: COLORS.font_family,
    marginVertical: normalization(10),
    marginRight: normalization(5),
  },
  straightLine: {
    alignSelf: 'center',
    marginEnd: normalization(10),
    borderWidth: 0.5,
    borderColor: COLORS.black,
    width: '100%',
    height: 0,
  },
});
