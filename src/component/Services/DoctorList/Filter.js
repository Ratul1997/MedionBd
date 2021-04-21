/** 
 name: Filter
 function: This is a component for Filter
**/

import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import RadioButtonRN from 'radio-buttons-react-native';
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';
const WIDTH = Dimensions.get('window').width;

const DATA = [
  {
    key: '1',
    title: 'Speciality',
    subitems: [
      {label: 'Cardiologist'},
      {label: 'Dermatologist'},
      {label: 'Ear-Nose-Throat (ENT) Specialist'},
      {label: 'Gynecologist/Obstetrician'},
      {label: 'Neurologist'},
    ],
  },
  {
    key: '2',
    title: 'Consultation Fee',
    subitems: [
      {label: 'Free'},
      {label: '1-200'},
      {label: '201-500'},
      {label: '5001-1000'},
    ],
  },
  {
    key: '3',
    title: 'Sort by',
    subitems: [{label: 'Consultation Fee'}],
  },
  {
    key: '4',
    title: 'Online Booking',
    subitems: [{label: 'Online Booking'}],
  },
  {
    key: '5',
    title: 'In Hospital',
    subitems: [{label: 'govt hospital'}],
  },
];

const Item = ({item}) => (
  <View style={styles.section}>
    <Text
      style={{
        color: '#898A8F',
        fontSize: normalization(12),
        marginStart: normalization(15),
      }}>
      {item.title}
    </Text>
    <RadioButtonRN
      data={item.subitems}
      circleSize={3}
      box={false}
      textStyle={{color: '#313450', fontSize: normalization(13)}}
      selectedBtn={e => console.log(e)}
    />
  </View>
);

export default function Filter({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: normalization(50),
          paddingStart: normalization(15),
          paddingEnd: normalization(15),
          backgroundColor: '#0759C4',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: normalization(16),
            fontWeight: 'bold',
            color: COLORS.white,
          }}>
          Filter
        </Text>
        <Text style={{fontSize: normalization(12), color: COLORS.white}}>
          Apply
        </Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item item={item} />}
        contentContainerStyle={{
          alignItems: 'center',
          backgroundColor: '#acccf5',
          paddingTop: normalization(10),
        }}
      />
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          borderRadius: 80 / 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          elevation: 25,
          position:'absolute',
          right:10,
          bottom:30
        }}
        onPress={() => navigation.goBack()}>
        <Feather name="x" size={30} color="#4764ef" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: WIDTH * 0.92,
    marginBottom: normalization(15),
    paddingTop: normalization(15),
    paddingBottom: normalization(15),
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 10,
  },
  applyButton: {
    height: 50,
    width: WIDTH * 0.92 - 60,
    backgroundColor: '#053871',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 25,
  },
  closeButton: {},
});
