/** 
 name: Appointment
 function: This is a  component for Appointment
**/

import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
//Colors And Dynamic Screen
import normalization from '../../../../constants/normalization';
import COLORS from '../../../../constants/COLORS';

//Dummy Data
import PatientHistoryData from '../../../../helpers/DummyData/PatientHistoryData';

export default function Appointment() {
  
  //Dummy Data of appointmentHistory
  const appointmentHistory = PatientHistoryData.appointmentHistory;
  
  
  // render Items
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          margin: normalization(15),
          paddingBottom: normalization(10),
          borderBottomWidth: 0.5,
          borderBottomColor: '#B4D3FC',
          flex:1,
        }}>
        <View
          style={{
            flex: 0.13,
            marginRight: normalization(5),
            paddingHorizontal: normalization(15),
            paddingVertical: normalization(10),
            borderWidth: 0.8,
            borderColor: COLORS.deepBlueHeader,
            borderRadius: 10,
          }}>
          <Text
            style={{fontSize: normalization(22), color: COLORS.textDeepBlue}}>
            {item.date}
          </Text>
          <Text style={{fontSize: normalization(13)}}>{item.month}</Text>
          <Text style={{fontSize: normalization(9)}}>{item.year}</Text>
        </View>

        <View
          style={{
            flex: 0.87,
            padding: normalization(10),
            backgroundColor: '#F0F6FE',
            borderWidth: 0.8,
            borderColor: COLORS.deepBlueHeader,
            borderRadius: 10,
            paddingHorizontal: normalization(15),
          }}>
          <Text style={{fontSize: normalization(15)}}>{item.docName}</Text>
          <Text>{item.speciality}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>{item.time}</Text>
            <Text>{item.type}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={appointmentHistory}
      renderItem={renderItem}
      style={{
        width: COLORS.Width,
        height: '100%',
        backgroundColor: COLORS.white,
        elevation: 8,
        paddingVertical: normalization(10),
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
      }}
    />
  );
}
