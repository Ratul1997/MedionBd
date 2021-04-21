/** 
 name: Feed
 function: This is a  component for Feed
**/

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';
import AllPurposeHeader from '../../../common/AllPurposeHeader';
import VirtualizedView from '../../../common/VirtualizedView';
import FeedData from '../../../helpers/FeedData';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AnswerAprrovedFeedDataDummy from '../../../helpers/DummyData/AnswerAprrovedFeedDataDummy';
import AnsewerdItem from './Answered/AnsewerdItem';
import Answered from './Answered';
import Approved from './Approved';
export default function Feed(props) {
  const {navigation} = props;

  const [selectedId, setSelectedId] = useState('1');

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

  const onBackNavigate = () => {
    navigation.goBack();
  };
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
