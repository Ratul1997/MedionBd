/** 
 name: PatientInformation
 function: This is a  component for PatientInformation
**/

import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {connect} from 'react-redux';
//Colors And Dynamic Screen
import COLORS from '../../../../constants/COLORS';
import normalization from '../../../../constants/normalization';
import {userConstants} from '../../../../constants/userConstants';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
function PatientInformation(props) {
  const {
    storedata,
    patient_name,
    setPatient_Name,
    patient_age,
    setPatient_Age,
    patient_gender,
    setPatient_Gender,
    patient_phone_number,
    setPatient_phone_number,
    normalAppointMent,
    preferredTime,
    setPreferredTime,
  } = props;
  /**
   * States:
   */
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue1, setSelectedValue1] = useState('');
  const [selectedValue2, setSelectedValue2] = useState('');
  const [selectedValue3, setSelectedValue3] = useState('');
  const [selectedValue4, setSelectedValue4] = useState('');

  //Dummy Time data
  const timeData = [
    {id: '1', title: '9:30 AM'},
    {id: '2', title: '9:30 AM'},
    {id: '3', title: '9:30 AM'},
  ];
  // Dummy Date Data
  const dateData = [
    {id: '1', title: '25-09-2020'},
    {id: '2', title: '12-10-2020'},
    {id: '3', title: '11-10-2020'},
  ];
  // Dummy Chamber Address
  const chamberData = [
    {id: '1', title: 'LabAid'},
    {id: '2', title: 'DMC'},
    {id: '3', title: 'Padma'},
  ];
  return (
    <View style={{width: '100%', padding: 15}}>
      <Text style={{marginStart: 10, color: '#979A9A'}}>Patient Name</Text>
      <TextInput
        placeholder="Name"
        style={styles.refId}
        value={patient_name}
        onChangeText={text => setPatient_Name(text)}
      />
      <Text style={{marginStart: 10, color: '#979A9A'}}>Patient Age</Text>
      <TextInput
        placeholder="Age"
        style={styles.refId}
        value={patient_age}
        onChangeText={text => setPatient_Age(text)}
      />
      <Text style={{marginStart: 10, color: '#979A9A'}}>Patient Gender</Text>
      {/* <View style={styles.picker}> */}
      <Menu>
        <MenuTrigger
          text={patient_gender ? patient_gender : 'Select Gender'}
          style={[styles.refId, {color: '#979A9A'}]}
        />
        <MenuOptions>
          <MenuOption onSelect={() => setPatient_Gender('Male')} text="Male" />
          <MenuOption
            onSelect={() => setPatient_Gender('Female')}
            text="Female"
          />
        </MenuOptions>
      </Menu>
      <Text style={{marginStart: 10, color: '#979A9A'}}>Patient Phone</Text>
      <TextInput
        placeholder="phone Number"
        style={styles.refId}
        value={patient_phone_number}
        onChangeText={text => setPatient_phone_number(text)}
      />
      {normalAppointMent && (
        <>
          <Text style={{marginStart: 10, color: '#979A9A'}}>
            Preferred Time:
          </Text>
          <TextInput
            placeholder="ex: 9am/9:30am"
            style={styles.refId}
            value={preferredTime}
            onChangeText={text => setPreferredTime(text)}
          />
        </>
      )}
      {/* <Text style={{marginStart: 10, color: '#979A9A'}}>Select Chamber</Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={selectedValue3}
          style={{color: '#979A9A'}}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedValue3(itemValue)
          }>
          {chamberData.map(acct => (
            <Picker.Item key={acct.id} label={acct.title} value={acct.id} />
          ))}
        </Picker>
      </View>

      <Text style={{marginStart: 10, color: '#979A9A'}}>Select Time</Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={selectedValue}
          style={{color: '#979A9A'}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          {timeData.map(acct => (
            <Picker.Item key={acct.id} label={acct.title} value={acct.id} />
          ))}
        </Picker>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  refId: {
    fontSize: normalization(14),
    padding: 8,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#979A9A',
    marginBottom: 15,
    marginEnd: '2%',
  },
  picker: {
    fontSize: normalization(14),
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#979A9A',
    marginBottom: 15,
    marginEnd: '2%',
  },
});

function mapState(state) {
  const {userDetails} = state.userReducer;
  return {userDetails};
}

const actionCreators = {
  storedata: user => dispatch =>
    dispatch({type: userConstants.STORE_USER_DETAILS, user}),
};
export default connect(mapState, actionCreators)(PatientInformation);
