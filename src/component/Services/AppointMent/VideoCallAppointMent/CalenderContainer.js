import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CalendarPicker from 'react-native-calendar-picker';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';
import COLORS from '../../../../constants/COLORS';
import normalization from '../../../../constants/normalization';

export default function CalenderContainer() {
  return (
    <View style={{width: '100%', marginBottom: 20}}>
      <Text
        style={{
          color: '#011A30',
          fontSize: normalization(18),
          marginBottom: 10,
          marginLeft: 10,
        }}>
        Appointment Schedule
      </Text>
      <CalendarPicker
        dayLabelsWrapper={{borderBottomWidth: 0, borderTopWidth: 0}}
        previousComponent={<AntDesign name="left" size={20} color="#000" />}
        nextComponent={<AntDesign name="right" size={20} color="#000" />}
        selectedDayColor="#19769F"
        minDate={moment().startOf('day')}
        maxDate={
          new Date(
            moment()
              .add(1, 'months')
              .startOf('day'),
          )
        }
      />
    </View>
  );
}
