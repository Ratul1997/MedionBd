/** 
 name: ServicesHealthQuestion
 function: This is a  component for ServicesHealthQuestion
**/

import React from 'react';
import {View, Text, FlatList} from 'react-native';
//Colors And Dynamic Screen
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';

import DataItem from './DataItem';

export default function ServicesHealthQuestion(props) {
  /*
  Getting properties from navigation

  variables-
  navigation: navigation properties
  data: service data (Array of Objects)
  title: service name (string)
  */
  const {data, title, navigation} = props;

  /**
   *
   * @name: renderItem
   * @function: rendering DataItems
   */
  const renderItem = ({item, index}) => {
    return (
      //Render an Item of Data
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
        {/* Service Name */}
        <Text
          style={{
            fontSize: normalization(18),
            fontWeight: 'bold',
            fontFamily: COLORS.font_family,
            marginEnd: normalization(5),
          }}>
          {title}
        </Text>

        {/* Straigth Line View */}
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
      {/* FlatList */}
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
