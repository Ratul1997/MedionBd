/** 
 name: Filter
 function: This is a component for Filter
**/

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import RadioButtonRN from 'radio-buttons-react-native';
//Colors And Dynamic Screen
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';
//Vector Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
//Width of Window
const WIDTH = Dimensions.get('window').width;

//Filer Data
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
  // {
  //   key: '2',
  //   title: 'Consultation Fee',
  //   subitems: [
  //     {label: 'Free'},
  //     {label: '1-200'},
  //     {label: '201-500'},
  //     {label: '5001-1000'},
  //   ],
  // },
  // {
  //   key: '3',
  //   title: 'Sort by',
  //   subitems: [{label: 'Consultation Fee'}],
  // },
];

///Filter Items View
const Item = ({item, filterDoctor}) => {
  return (
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
        selectedBtn={e => filterDoctor(e, item.key)}
      />
    </View>
  );
};

export default function Filter(props) {
  /*
  Getting properties from navigation

  variables-
  navigation: navigation properties
  */
  const {navigation, onCloseModal, filterDoctor, applyFilter} = props;

  /**
   * states
   */
  //render Main View
  return (
    <View
      style={{
        // height: '90%',
        maxHeight: '90%',
        minHeight:'50%',
        width: '95%',
        borderRadius: 10,
        backgroundColor: '#acccf5',
      }}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item item={item} filterDoctor={filterDoctor} />
        )}
        contentContainerStyle={{
          alignItems: 'center',
          backgroundColor: '#acccf5',
          padding: normalization(10),
          borderRadius: 10,
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
          position: 'absolute',
          right: 10,
          bottom: 90,
        }}
        onPress={onCloseModal}>
        <Feather name="x" size={30} color="#4764ef" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          borderRadius: 80 / 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          elevation: 25,
          position: 'absolute',
          right: 10,
          bottom: 30,
        }}
        onPress={applyFilter}>
        <Feather name="check" size={30} color="green" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: WIDTH * 0.7,
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
