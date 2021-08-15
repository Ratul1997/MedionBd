/** 
 name: NormalAppointMent
 function: This is a  component for NormalAppointMent
**/

import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import AllPurposeHeader from '../../../../common/AllPurposeHeader';
import DoctorInformation from '../DoctorInformation';
import AppointMentsFooter from '../AppointMentsFooter';
import PatientInformation from './PatientInformation';
import LoginModal from '../../../../common/LoginModal';
import Login from '../../../Auth/Login';
import {connect} from 'react-redux';
import {userConstants} from '../../../../constants/userConstants';
import axios from 'axios';
import {BASE_URL, BASE_URL_FINAL} from '@env';
import ActivityIndicatorComponent from '../../../../common/ActivityIndicatorComponent';
import ModalComponent from '../../../../common/ModalComponent';
import {FlatList} from 'react-native-gesture-handler';
import VirtualizedView from '../../../../common/VirtualizedView';
import COLORS from '../../../../constants/COLORS';
import normalization from '../../../../constants/normalization';
import firestore from '@react-native-firebase/firestore';
import {
  checkCurrenDate,
  convertNumberToDay,
  getSelectedDate,
} from '../../../../constants/calcuationdata';

function NormalAppointMent(props) {
  /*
  Getting properties from navigation

  variables-
  navigation: navigation properties
  */
  const {
    navigation,
    storedata,
    userDetails,
    loggedInReq,
    loggedIn,
    route,
  } = props;

  const {item, title, virtualChamberId} = route.params;
  /**
   * States-
   * modalVisible: for showing modal
   */
  const [modalVisible, setModalVisible] = useState(false);
  const [patient_name, setPatient_Name] = useState('');
  const [patient_age, setPatient_Age] = useState('');
  const [patient_gender, setPatient_Gender] = useState('');
  const [patient_phone_number, setPatient_phone_number] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [preferredTime, setPreferredTime] = useState('');
  const [weekDays, setWeekDays] = useState(item.doctor_day.split(','));
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    if (loggedIn) {
      const {
        patient_age,
        patient_gender,
        patient_name,
        patient_phone_number,
      } = userDetails;
      setPatient_Age(patient_age.toString());
      setPatient_Name(patient_name);
      setPatient_Gender(patient_gender);
      setPatient_phone_number(patient_phone_number);
    }
  }, []);
  /**
   * @name: onBackNavigate
   * @function: navigate Pop
   */
  const onBackNavigate = () => {
    navigation.pop();
  };

  /**
   * @name: onPressCloseModal
   * @function: setting Modal False
   */
  const onPressCloseModal = () => {
    setModalVisible(false);
  };

  /**
   * @name: onConfirm
   * @function: setting Modal Visible
   */

  const onConfirm = () => {
    if (loggedIn) {
      bookAppointMnet(userDetails);
    } else {
      setModalVisible(true);
    }
  };

  /**
   * @name:onSignUp
   * @function: signing Up
   */

  const onSignUp = () => {
    const age = parseInt(patient_age);
    const user = {
      patient_name,
      patient_gender,
      age,
      patient_phone_number,
    };
    setIsLoading(true);
    // console.log(BASE_URL)
    const url = BASE_URL_FINAL + 'signUp';
    axios
      .post(url, {
        patient_name: patient_name,
        patient_gender: patient_gender,
        patient_age: age,
        patient_phone_number: patient_phone_number,
      })
      .then(res => {
        setIsLoading(false);
        setModalVisible(false);
        loggedInReq();
        console.log(res.data);
        storedata(res.data);
        bookAppointMnet(res.data);
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };

  /**
   * @name: applyButtonClick
   * @function: navigate to Confirmation Page
   */
  const applyButtonClick = () => {
    // const c = item.connect_number.replace(/\+/g, '');
    navigation.navigate('Confirmation', {
      name: item.doctor_name,
      time: preferredTime,
      selectedDay: convertNumberToDay(parseInt(selectedId)),
      docName: patient_phone_number + item.contact_number,
    });
  };

  /**
   * @name: bookAppointMnet
   * @function: appointMnet booking
   */

  const bookAppointMnet = userDetails => {
    setModalVisible(true);
    setIsLoading(true);

    const urlEnd = title === 'Online' ? 'bookonline' : 'bookoffline';

    const url = BASE_URL_FINAL + urlEnd;
    console.log(item);
    const data = {
      iddoctors: title === 'Online' ? item.idonlinedoctors : item.iddoctors,
      idpatients: userDetails.userId,
      preferredTime: preferredTime,
      status: 1,
      selectedDay: getSelectedDate(parseInt(selectedId)),
    };
    if (title === 'Online') {
      data.virtualChamberId = virtualChamberId ? virtualChamberId : null;
    }
    axios
      .post(url, {...data})
      .then(res => {
        setModalVisible(false);
        setIsLoading(false);
        applyButtonClick();
      })
      .catch(err => {
        setModalVisible(false);
        setIsLoading(false);
      });
  };

  const onSelectedDays = value => () => {
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
  //rendering Main Viewidpatientsidpatients
  return (
    <>
      {/* AllPurposeHeader */}
      <AllPurposeHeader title="Appointment" onBackNavigate={onBackNavigate} />
      {/* Modal of Login */}
      <ModalComponent
        modalVisible={modalVisible}
        onPressCloseModal={onPressCloseModal}
        closeCross={isLoading ? true : false}>
        {/* Login Page */}
        {isLoading ? (
          <ActivityIndicatorComponent size="large" />
        ) : (
          <Login applyButtonClick={applyButtonClick} onSignUp={onSignUp} />
        )}
      </ModalComponent>
      <ScrollView>
        <DoctorInformation accountInformation item={item} />
        {virtualChamberId && (
          <Text
            style={{
              textAlign: 'center',
              fontSize: normalization(15),
            }}>
            Book Via By Virtual Chamber
          </Text>
        )}
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
        <AppointMentsFooter title="Confirm Schedule" onConfirm={onConfirm} />
      </ScrollView>
    </>
  );
}
function mapState(state) {
  const {userDetails} = state.userReducer;
  const {loggedIn} = state.authReducer;
  return {userDetails, loggedIn};
}
const actionCreators = {
  storedata: user => dispatch =>
    dispatch({type: userConstants.STORE_USER_DETAILS, user}),
  loggedInReq: () => dispatch => dispatch({type: userConstants.LOGIN_SUCCESS}),
};
export default connect(mapState, actionCreators)(NormalAppointMent);
