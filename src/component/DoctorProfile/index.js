/** 
 name: DoctorProfile
 function: This is a  component for DoctorProfile
**/

import React, {useState, useEffect} from 'react';
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
import axios from 'axios';
import {BASE_URL, BASE_URL_FINAL} from '@env';
import ActivityIndicatorComponent from '../../common/ActivityIndicatorComponent';
export default function DoctorProfile(props) {
  /*
  Getting properties from navigation

  variables-
  navigation: navigation properties
  route: routing properties
  
  */

  const {navigation, route} = props;
  const {title, item} = route.params;
  // Data of DoctorProfiles
  const {ChamberList, VideoCallingInfo, PatientList} = DoctorProfileData;

  const [chamberList, setChamberList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  /**
   * @name: onBackNavigate
   * @function: navigating Back
   */
  const onBackNavigate = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const url = BASE_URL_FINAL + 'chamberAddress';
    axios
      .post(url, {iddoctors: item.iddoctors})
      .then(res => {
        console.log(res.data.results);
        setIsLoading(false);
        setChamberList(res.data.results);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  console.log(chamberList);
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      {title && (
        <AllPurposeHeader onBackNavigate={onBackNavigate} title="Doctor Name" />
      )}
      {isLoading ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50%',
          }}>
          <ActivityIndicatorComponent size="large" />
        </View>
      ) : (
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
              {item.doctor_name}
            </Text>
            <Text
              style={{
                fontSize: normalization(15),
                textAlign: 'center',
                color: COLORS.textInputBorder,
              }}>
              {item.doctor_speciality}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: normalization(15),
                color: COLORS.textInputBorder,
                overflow: 'hidden',
              }}>
              {item.doctor_qualification}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: normalization(15),
                color: COLORS.textInputBorder,
              }}>
              {item.doctor_institution}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: normalization(15),
                color: COLORS.textInputBorder,
              }}>
              Time: {item.startTime} - {item.endTime}
            </Text>
          </View>
          <Chambers chamberData={chamberList} />
          <VideoCallingSchedule videoCallingInfo={VideoCallingInfo} />
          {!route.params && <Patients patientList={PatientList} />}
        </VirtualizedView>
      )}
    </View>
  );
}
