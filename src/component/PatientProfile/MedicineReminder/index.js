/** 
 name: MedicineReminder
 function: This is a  component for MedicineReminder
**/

import React from 'react';
import {View, Text} from 'react-native';

import AllPurposeHeader from '../../../common/AllPurposeHeader';
import VirtualizedView from '../../../common/VirtualizedView';
import NextReminder from './NextReminder';
import UpComingReminder from './UpComingReminder';
import GetMedicineFooter from '../../Services/AppointMent/AppointMentsFooter';

//Dummy Data
import MedicineReminderData from '../../../helpers/DummyData/MedicineReminderData';

export default function MedicineReminder(props) {
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
   * @function: navigation Back
   */
  const onConfirm = () => {
    navigation.goBack();
  };

  //render View
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
