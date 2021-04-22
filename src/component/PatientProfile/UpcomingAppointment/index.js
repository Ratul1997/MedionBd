/** 
 name: UpcomingAppointment
 function: This is a  component for UpcomingAppointment
**/

import React from 'react';
import {View, Text} from 'react-native';
import AllPurposeHeader from '../../../common/AllPurposeHeader';
import VirtualizedView from '../../../common/VirtualizedView';
import NextAppointMent from '../common/NextAppointMent';
import AppointmentSchedule from '../../../helpers/DummyData/AppointmentSchedule';
import UppCommingVOAppointMents from '../common/UppCommingVOAppointMents';
import GetAppointMentsFooter from '../../Services/AppointMent/AppointMentsFooter';

export default function UpcomingAppointment(props) {
  /*
  Getting properties from navigation

  variables-
  navigation: navigation properties
  */
  const {navigation} = props;

  /**
   * @name: onBackNavigate
   * @function: navigate Back
   */

  const onBackNavigate = () => {
    navigation.goBack();
  };

  /**
   * @name: onConfirm
   * @function: navigate Back
   */

  const onConfirm = () => {
    navigation.goBack();
  };

  //render Main View
  return (
    <>
      <AllPurposeHeader
        title="Upcoming AppointMent"
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
