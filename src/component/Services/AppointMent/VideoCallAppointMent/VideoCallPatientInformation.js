/** 
 name: VideoCallPatientInformation
 function: This is a component for VideoCallPatientInformation
**/

import React, {useState} from 'react';
import {FlatList, TouchableOpacity, Text} from 'react-native';
import AllPurposeHeader from '../../../../common/AllPurposeHeader';
import ReferenceCode from './ReferenceCode';
import VirtualizedView from '../../../../common/VirtualizedView';
import DoctorInformation from '../DoctorInformation';
import AppointMentsFooter from '../AppointMentsFooter';
import PatientInformation from '../NormalAppointMent/PatientInformation';
import normalization from '../../../../constants/normalization';
import COLORS from '../../../../constants/COLORS';
import {convertNumberToDay} from '../../../../constants/calcuationdata';
import ModalComponent from '../../../../common/ModalComponent';
import Login from '../../../Auth/Login';
import ActivityIndicatorComponent from '../../../../common/ActivityIndicatorComponent';
export default function VideoCallPatientInformation(props) {
  /*
  Getting properties from navigation

  variables-
  navigation: navigation properties
  */
  const {navigation, route} = props;
  const {item} = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [patient_name, setPatient_Name] = useState('');
  const [patient_age, setPatient_Age] = useState('');
  const [patient_gender, setPatient_Gender] = useState('');
  const [patient_phone_number, setPatient_phone_number] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [preferredTime, setPreferredTime] = useState('');
  const [weekDays, setWeekDays] = useState(item.doctor_day.split(','));
  const [selectedId, setSelectedId] = useState('');
  /**
   * @name: onBackNavigate
   * @function: navigation Back
   */
  const onBackNavigate = () => {
    navigation.goBack();
  };
  /**
   * @name: onConfirm
   * @function: navigate to Confirmation Page
   */
  const onConfirm = () => {
    navigation.navigate('Confirmation', {
      name: item.doctor_name,
      time: preferredTime,
      selectedDay: convertNumberToDay(parseInt(selectedId)),
    });
  };
  /**
   * @name: onPressCloseModal
   * @function: setting Modal False
   */
  const onPressCloseModal = () => {
    setModalVisible(false);
  };
  /**
   * @name: applyButtonClick
   * @function: navigate to Confirmation Page
   */
  const applyButtonClick = () => {
    navigation.navigate('Confirmation', {
      name: item.doctor_name,
      time: preferredTime,
      selectedDay: convertNumberToDay(parseInt(selectedId)),
    });
  };

  const onSelectedDays = value => () => {
    console.log(value);

    setSelectedId(value);
  };
  const renderDay = ({item, index}) => {
    const backgroundColor = item === selectedId ? '#19769F' : '#fff';
    const color = item === selectedId ? '#fff' : '#19769F';

    return (
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: COLORS.deepBlueHeader,
          height: normalization(50),
          width: normalization(50),
          marginHorizontal: normalization(5),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor,
        }}
        onPress={onSelectedDays(item)}>
        <Text style={{color}}>{convertNumberToDay(parseInt(item))}</Text>
      </TouchableOpacity>
    );
  };

  //render Main View
  return (
    <>
      <AllPurposeHeader
        title="Appointment Confirmation"
        onBackNavigate={onBackNavigate}
      />
      <ModalComponent
        modalVisible={modalVisible}
        onPressCloseModal={onPressCloseModal}
        closeCross={isLoading ? true : false}>
        {/* Login Page */}
        {isLoading ? (
          <ActivityIndicatorComponent size="large" />
        ) : (
          {
            /* <Login applyButtonClick={applyButtonClick} onSignUp={onSignUp} /> */
          }
        )}
      </ModalComponent>
      <VirtualizedView>
        <DoctorInformation item={item} />
        {/* <ReferenceCode /> */}
        <PatientInformation
          patient_age={patient_age}
          patient_gender={patient_gender}
          patient_name={patient_name}
          patient_phone_number={patient_phone_number}
          setPatient_Age={setPatient_Age}
          setPatient_Name={setPatient_Name}
          setPatient_phone_number={setPatient_phone_number}
          setPatient_Gender={setPatient_Gender}
          normalAppointMent
          preferredTime={preferredTime}
          setPreferredTime={setPreferredTime}
        />
        <FlatList
          data={weekDays}
          horizontal={true}
          renderItem={renderDay}
          keyExtractor={item => item}
          style={{margin: normalization(10)}}
        />
        <AppointMentsFooter title="Confirm" onConfirm={onConfirm} />
      </VirtualizedView>
    </>
  );
}
