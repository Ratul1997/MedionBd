/** 
 name: DoctorProfile
 function: This is a  component for DoctorProfile
**/

import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
//Colors And Dynamic Screen
import COLORS from '../../constants/COLORS';
import normalization from '../../constants/normalization';

import AllPurposeHeader from '../../common/AllPurposeHeader';
import VirtualizedView from '../../common/VirtualizedView';
import Chambers from './Chambers';
import DoctorProfileData from '../../helpers/DummyData/DoctorProfileData';
import VideoCallingSchedule from './VideoCallingSchedule';
import Patients from './Patients';
export default function DoctorProfile(props) {
  /*
  Getting properties from navigation

  variables-
  navigation: navigation properties
  route: routing properties
  
  */

  const {navigation, route} = props;
  // Data of DoctorProfiles
  const {ChamberList, VideoCallingInfo, PatientList} = DoctorProfileData;

  /**
   * @name: onBackNavigate
   * @function: navigating Back
   */
  const onBackNavigate = () => {
    navigation.goBack();
  };
  
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {route.params && (
        <AllPurposeHeader onBackNavigate={onBackNavigate} title="Doctor Name" />
      )}
      <VirtualizedView>
        <View style={{padding: normalization(20), alignItems: 'center'}}>
          <Image
            source={require('../../images/doc.jpg')}
            style={{
              marginRight: normalization(20),
              borderRadius: 100,
              height: normalization(100),
              width: normalization(100),
            }}
          />
          <Text
            style={{
              fontSize: normalization(18),
              textAlign: 'center',
              color: COLORS.deepBlueHeader,
              fontWeight: 'bold',
            }}>
            Kaniz Fatima Tonni{' '}
          </Text>
          <Text
            style={{
              fontSize: normalization(15),
              textAlign: 'center',
              color: COLORS.textInputBorder,
            }}>
            Cardiologist{' '}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: normalization(15),
              color: COLORS.textInputBorder,
              overflow: 'hidden',
            }}>
            MBBS From Dhaka Medical College and hospital
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: normalization(15),
              color: COLORS.textInputBorder,
            }}>
            PhD from Japan
          </Text>
        </View>
        <Chambers chamberData={ChamberList} />
        <VideoCallingSchedule videoCallingInfo={VideoCallingInfo} />
        {!route.params && <Patients patientList={PatientList} />}
      </VirtualizedView>
    </View>
  );
}
