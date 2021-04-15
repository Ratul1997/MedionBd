import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';

export default function NextAppointMent(props) {
  const {appointmentSchedule} = props;
  const renderItem = ({item}) => {
    if (item.key === '1') {
      return (
        <View
          style={{
            backgroundColor: '#B4D3FC',
            borderWidth: 0.8,
            borderColor: COLORS.deepBlueHeader,
            padding: normalization(15),
            borderRadius: 15,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{fontSize: normalization(16), fontWeight: 'bold'}}>
                {item.docName}
              </Text>
              <Text style={{fontSize: normalization(13)}}>
                {item.speciality}
              </Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{fontSize: normalization(16), fontWeight: 'bold'}}>
                {item.date} {item.month}, {item.year}
              </Text>
              <Text style={{fontSize: normalization(13)}}>{item.chamber}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: COLORS.deepBlueHeader,
              borderRadius: 10,
              marginTop: normalization(10),
              paddingHorizontal: normalization(15),
              paddingVertical: normalization(8),
            }}>
            <Text style={{color: COLORS.textWhite}}>Edit Appointment</Text>
          </TouchableOpacity>
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
        Next Appointment
      </Text>

      <View>
        <FlatList
          style={{marginHorizontal: normalization(15)}}
          data={appointmentSchedule}
          renderItem={renderItem}
          listKey={(item, index) => 'D' + index.toString()}
        />
      </View>
    </>
  );
}
