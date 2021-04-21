/** 
 name: VideoCallPatientInformation
 function: This is a component for VideoCallPatientInformation
**/

import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import normalization from '../../../../constants/normalization';
import COLORS from '../../../../constants/COLORS';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AllPurposeHeader from '../../../../common/AllPurposeHeader';
import ReferenceCode from './ReferenceCode';
import VirtualizedView from '../../../../common/VirtualizedView';
import DoctorInformation from '../DoctorInformation';
import AppointMentsFooter from '../AppointMentsFooter';
import PatientInformation from '../NormalAppointMent/PatientInformation';
export default function VideoCallPatientInformation(props) {
  const {navigation} = props;
  const onBackNavigate = () => {
    navigation.goBack();
  };

  const onConfirm = () => {
    navigation.navigate('Confirmation');
  };

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
