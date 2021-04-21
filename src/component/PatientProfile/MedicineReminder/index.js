/** 
 name: MedicineReminder
 function: This is a  component for MedicineReminder
**/

import React from 'react';
import {View, Text} from 'react-native';
import AllPurposeHeader from '../../../common/AllPurposeHeader';
import VirtualizedView from '../../../common/VirtualizedView';
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NextReminder from './NextReminder';
import UpComingReminder from './UpComingReminder';
import MedicineReminderData from '../../../helpers/DummyData/MedicineReminderData';
import GetMedicineFooter from '../../Services/AppointMent/AppointMentsFooter';
export default function MedicineReminder(props) {
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
        title="Medicine Reminder"
        onBackNavigate={onBackNavigate}
      />
      <VirtualizedView>
        <NextReminder />
        <UpComingReminder medicine={MedicineReminderData} />
        <GetMedicineFooter
          title="Get Medicine Schedule"
          onConfirm={onConfirm}
        />
      </VirtualizedView>
    </>
  );
}
