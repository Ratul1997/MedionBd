import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import normalization from '../../../../constants/normalization';
import COLORS from '../../../../constants/COLORS';
import PatientHistoryData from '../../../../helpers/DummyData/PatientHistoryData';

export default function SubsCription() {
  const subscription = PatientHistoryData.subscription;
  const renderItem = ({item}) => {
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
            {item.packageName}
          </Text>
          <Text>Purchased on {item.date}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: normalization(13)}}>{item.cost}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            overflow: 'hidden',
          }}>
          <Text style={styles.nameStyle}>Health CheckUp</Text>
          <View style={styles.straightLine} />
        </View>
        <FlatList data={subscription} renderItem={renderItem} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: COLORS.Width,
    height: '100%',
    backgroundColor: COLORS.white,
    elevation: 8,
    paddingHorizontal: normalization(20),
    paddingVertical: normalization(15),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  nameStyle: {
    fontSize: normalization(15),
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
