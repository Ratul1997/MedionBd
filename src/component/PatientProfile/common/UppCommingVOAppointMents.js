/** 
 name: UppCommingVOAppointMents
 function: This is a  component for UppCommingVOAppointMents
**/

import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';

export default function UppCommingVOAppointMents(props) {
  /*
  Getting properties from navigation

  variables-
  appointmentSchedule: schedule of appointment Data (Array of Objects)
  */
  const {appointmentSchedule} = props;

  //renderItem
  const renderItem = ({item}) => {
    if (item.key !== '1') {
      return (
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: normalization(15),
            marginTop: normalization(15),
            paddingBottom: normalization(10),
            borderBottomWidth: 0.5,
            borderBottomColor: '#B4D3FC',
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
            <Text style={{fontSize: 18}}>{item.docName}</Text>
            <Text>{item.speciality}</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>{item.time}</Text>
              <Text>{item.chamber}</Text>
            </View>
          </View>
        </View>
      );
    }
  };

  return (
    <>
      <Text
        style={{
          color: COLORS.textDeepBlue,
          fontSize: 20,
          fontWeight: 'bold',
          margin: normalization(15),
        }}>
        Upcoming Appointment
      </Text>

      <FlatList
        data={appointmentSchedule}
        renderItem={renderItem}
        style={{
          flex: 1,
          width: COLORS.Width,
          backgroundColor: COLORS.white,
          elevation: 6,
          paddingTop: normalization(10),
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
        listKey={(item, index) => 'D' + index.toString()}
      />
    </>
  );
}
