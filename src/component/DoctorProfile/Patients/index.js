/** 
 name: Patients
 function: This is a  component for Patients
**/
import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
//Colors And Dynamic Screen
import normalization from '../../../constants/normalization';
import COLORS from '../../../constants/COLORS';

import PatientItem from './PatientItem';

export default function Patients(props) {
  /*
  Getting properties from navigation

  variables-
  patientList: patienList of a Doctor (Array of Objects)
  */

  const {patientList} = props;

  /**
   * States
   */
  const [showPatientList, setShowPatientList] = useState(false);

  /**
   * @name: patientListItem
   * @function: rendering PatientList
   */
  const patientListItem = ({item}) => {
    if (!showPatientList && item.key < 4) {
      //Show Less
      return <PatientItem item={item} />;
    } else if (showPatientList) {
      //Show More
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
