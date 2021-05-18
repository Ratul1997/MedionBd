import React from 'react';
import {View, Text} from 'react-native';
import AllPurposeHeader from '../../../common/AllPurposeHeader';
import Patients from './Patients';
import PatientDataAppointMent from '../../../helpers/DummyData/PatientDataAppointMent';

export default function AppointMents() {
  return (
    <>
      <AllPurposeHeader title="Appointments" />
      <Patients data={PatientDataAppointMent} />
    </>
  );
}
