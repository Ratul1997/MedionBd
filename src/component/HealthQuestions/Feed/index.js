/** 
 name: Feed
 function: This is a  component for Feed
**/

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
//Colors And Dynamic Screen
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';

import AllPurposeHeader from '../../../common/AllPurposeHeader';
import VirtualizedView from '../../../common/VirtualizedView';
import FeedData from '../../../helpers/FeedData';
import Answered from './Answered';
import Approved from './Approved';

export default function Feed(props) {
  /*
  Getting properties from navigation

  variables-
  navigation: navigation properties
  */
  const {navigation} = props;

  //States

  /**
   * @name: selectedId for State
   * @function: setSelectedId for setting State
   */
  const [selectedId, setSelectedId] = useState('1');

  // render Items
  const renderItem = ({item}) => {
    const backgroundColor =
      item.key === selectedId ? COLORS.doctorListHeader : '#fff';
    const color = item.key === selectedId ? '#fff' : COLORS.doctorListHeader;
    return (
      <TouchableOpacity
        style={{
          backgroundColor,
          padding: 10,
          paddingStart: 15,
          paddingEnd: 15,
          borderColor: COLORS.doctorListHeader,
          borderWidth: 2,
        }}
        onPress={() => setSelectedId(item.key)}>
        <Text style={{color, fontSize: normalization(16)}}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  /**
   * @name: onBackNavigate
   * @function: navigate Back
   */
  const onBackNavigate = () => {
    navigation.goBack();
  };

  //render main
  return (
    <View style={{flex: 1, backgroundColor: COLORS.DoctorAppnt_Background}}>
      <AllPurposeHeader title="Feed" onBackNavigate={onBackNavigate} />
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 2,
          borderColor: COLORS.doctorListHeader,
        }}>
        <FlatList data={FeedData} horizontal={true} renderItem={renderItem} />
      </View>

      <VirtualizedView>
        {selectedId === '1' ? <Approved /> : <Answered />}
      </VirtualizedView>
    </View>
  );
}
