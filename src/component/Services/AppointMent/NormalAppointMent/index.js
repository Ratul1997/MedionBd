import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import AllPurposeHeader from '../../../../common/AllPurposeHeader';
import DoctorInformation from '../DoctorInformation';
import {FlatList} from 'react-native-gesture-handler';
import AppointMentsFooter from '../AppointMentsFooter';
import PatientInformation from './PatientInformation';
import LoginModal from '../../../../common/LoginModal';
import Login from '../../../Auth/Login';

export default function NormalAppointMent(props) {
  const {navigation} = props;
  const [modalVisible, setModalVisible] = useState(false);

  const onBackNavigate = () => {
    navigation.goBack();
  };

  const onPressCloseModal = () => {
    setModalVisible(false);
  };

  const onConfirm = () => {
    setModalVisible(true);
  };

  const applyButtonClick = () => {
    navigation.navigate('Confirmation');
  };

  return (
    <>
      <AllPurposeHeader title="Appointment" onBackNavigate={onBackNavigate} />
      <LoginModal
        modalVisible={modalVisible}
        onPressCloseModal={onPressCloseModal}>
        <Login applyButtonClick={applyButtonClick} />
      </LoginModal>
      <ScrollView>
        <DoctorInformation accountInformation/>
        <PatientInformation />
        <AppointMentsFooter title="Confirm Schedule" onConfirm={onConfirm} />
      </ScrollView>
    </>
  );
}
