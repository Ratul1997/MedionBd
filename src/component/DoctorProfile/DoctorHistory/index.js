import React from 'react';
import {View, Text} from 'react-native';
import AllPurposeHeader from '../../../common/AllPurposeHeader';
import Patients from '../AppointMents/Patients';
import PatientDataAppointMent from '../../../helpers/DummyData/PatientDataAppointMent';

export default function DoctorHistory() {
  return (
    <>
      <AllPurposeHeader title="History" />
      <Patients data={PatientDataAppointMent}/>
      
    </>
  );
}
