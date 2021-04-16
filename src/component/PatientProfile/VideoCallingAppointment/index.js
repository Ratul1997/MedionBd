import React from 'react';
import {View, Text} from 'react-native';
import AllPurposeHeader from '../../../common/AllPurposeHeader';
import VirtualizedView from '../../../common/VirtualizedView';
import NextAppointMent from '../common/NextAppointMent';
import AppointmentSchedule from '../../../helpers/DummyData/AppointmentSchedule';
import UppCommingVOAppointMents from '../common/UppCommingVOAppointMents';
import GetAppointMentsFooter from '../../Services/AppointMent/AppointMentsFooter';

export default function VideoCallingAppointment(props) {
  const {navigation} = props;
  const onBackNavigate = () => {
    navigation.goBack();
  };

  const onConfirm = () => {
    navigation.goBack();
  };
  return (
    <>
      <AllPurposeHeader
        title="Video Call AppointMent"
        onBackNavigate={onBackNavigate}
      />
      <VirtualizedView>
        <NextAppointMent appointmentSchedule={AppointmentSchedule} />
        <UppCommingVOAppointMents appointmentSchedule={AppointmentSchedule} />
        <GetAppointMentsFooter
          title="Get An Appointment"
          onConfirm={onConfirm}
        />
      </VirtualizedView>
    </>
  );
}
