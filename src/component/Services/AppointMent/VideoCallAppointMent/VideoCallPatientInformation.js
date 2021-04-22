/** 
 name: VideoCallPatientInformation
 function: This is a component for VideoCallPatientInformation
**/

import React, {useState} from 'react';

import AllPurposeHeader from '../../../../common/AllPurposeHeader';
import ReferenceCode from './ReferenceCode';
import VirtualizedView from '../../../../common/VirtualizedView';
import DoctorInformation from '../DoctorInformation';
import AppointMentsFooter from '../AppointMentsFooter';
import PatientInformation from '../NormalAppointMent/PatientInformation';
export default function VideoCallPatientInformation(props) {
  /*
  Getting properties from navigation

  variables-
  navigation: navigation properties
  */
  const {navigation} = props;
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
    navigation.navigate('Confirmation');
  };

  //render Main View
  return (
    <>
      <AllPurposeHeader
        title="Appointment Confirmation"
        onBackNavigate={onBackNavigate}
      />
      <VirtualizedView>
        <DoctorInformation />
        <ReferenceCode />
        <PatientInformation />
        <AppointMentsFooter title="Confirm" onConfirm={onConfirm} />
      </VirtualizedView>
    </>
  );
}
