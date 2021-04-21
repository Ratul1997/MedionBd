/** 
 name: DoctorList
 function: This is a component for DoctorList
**/

import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, FlatList} from 'react-native';
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import DoctorSearch from './DoctorSearch';
import DoctorLists from '../../../helpers/DummyData/DoctorLists';
import VirtualizedView from '../../../common/VirtualizedView';
import DoctorItem from './DoctorItem';
import AllPurposeHeader from '../../../common/AllPurposeHeader';
const WIDTH = Dimensions.get('window').width;

export default function DoctorList(props) {
  const {navigation} = props;

  const onBackNavigate = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <AllPurposeHeader
        title="Doctors"
        onBackNavigate={onBackNavigate}
        filter
      />
      {/**search part */}

      <DoctorSearch />

      <FlatList
        data={DoctorLists}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{justifyContent: 'center', alignSelf: 'center'}}
        ListHeaderComponent={() => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: COLORS.textDeepBlue,
                fontWeight: 'bold',
                fontSize: normalization(15),
              }}>
              All Doctors
            </Text>
            <Text
              onPress={() => navigation.navigate('Filter')}
              style={{
                color: COLORS.textlightBlue,
                fontWeight: 'bold',
                fontSize: normalization(15),
              }}>
              filter
            </Text>
          </View>
        )}
        renderItem={({item, index}) => (
          <DoctorItem item={item} index={index} navigation={navigation} />
        )}
      />
    </View>
  );
}
