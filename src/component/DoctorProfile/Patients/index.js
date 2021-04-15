import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import normalization from '../../../constants/normalization';
import COLORS from '../../../constants/COLORS';
import PatientItem from './PatientItem';

export default function Patients(props) {
  const {patientList} = props;
  const [showPatientList, setShowPatientList] = useState(false);
  const patientListItem = ({item}) => {
    if (!showPatientList && item.key < 4) {
      return <PatientItem item={item} />;
    } else if (showPatientList) {
      return <PatientItem item={item} />;
    }
  };

  return (
    <View style={{marginVertical: normalization(15)}}>
      <Text
        style={{
          fontSize: normalization(16),
          fontWeight: 'bold',
          marginLeft: normalization(20),
        }}>
        Patients
      </Text>
      <FlatList
        data={patientList}
        renderItem={patientListItem}
        listKey={(item, index) => 'D' + index.toString()}
      />
      {showPatientList ? (
        <Text
          onPress={() => setShowPatientList(!showPatientList)}
          style={{
            alignSelf: 'center',
            fontSize: normalization(14),
            fontWeight: 'bold',
            color: COLORS.textDeepBlue,
          }}>
          Show less
        </Text>
      ) : (
        <Text
          onPress={() => setShowPatientList(!showPatientList)}
          style={{
            alignSelf: 'center',
            fontSize: normalization(14),
            fontWeight: 'bold',
            color: COLORS.textDeepBlue,
          }}>
          See all
        </Text>
      )}
    </View>
  );
}
