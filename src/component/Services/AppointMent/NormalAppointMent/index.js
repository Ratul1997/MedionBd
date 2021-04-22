/** 
 name: NormalAppointMent
 function: This is a  component for NormalAppointMent
**/

import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

import AllPurposeHeader from '../../../../common/AllPurposeHeader';
import DoctorInformation from '../DoctorInformation';
import AppointMentsFooter from '../AppointMentsFooter';
import PatientInformation from './PatientInformation';
import LoginModal from '../../../../common/LoginModal';
import Login from '../../../Auth/Login';

export default function NormalAppointMent(props) {
  /*
  Getting properties from navigation

  variables-
  navigation: navigation properties
  */
  const {navigation} = props;
  /**
   * States-
   * modalVisible: for showing modal
   */
  const [modalVisible, setModalVisible] = useState(false);

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
    setModalVisible(true);
  };

  /**
   * @name: applyButtonClick
   * @function: navigate to Confirmation Page
   */
  const applyButtonClick = () => {
    navigation.navigate('Confirmation');
  };

  //rendering Main View
  return (
    <>
    {/* AllPurposeHeader */}
      <AllPurposeHeader title="Appointment" onBackNavigate={onBackNavigate} />
      {/* Modal of Login */}
      <LoginModal
        modalVisible={modalVisible}
        onPressCloseModal={onPressCloseModal}>
        {/* Login Page */}
        <Login applyButtonClick={applyButtonClick} />
      </LoginModal>
      <ScrollView>
        <DoctorInformation accountInformation />
        <PatientInformation />
        <AppointMentsFooter title="Confirm Schedule" onConfirm={onConfirm} />
      </ScrollView>
    </>
  );
}
