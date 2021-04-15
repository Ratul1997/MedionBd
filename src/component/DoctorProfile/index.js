import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import AllPurposeHeader from '../../common/AllPurposeHeader';
import VirtualizedView from '../../common/VirtualizedView';
import COLORS from '../../constants/COLORS';
import normalization from '../../constants/normalization';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Chambers from './Chambers';
import DoctorProfileData from '../../helpers/DummyData/DoctorProfileData';
import VideoCallingSchedule from './VideoCallingSchedule';
import Patients from './Patients';
export default function DoctorProfile(props) {
  const {ChamberList, VideoCallingInfo, PatientList} = DoctorProfileData;
  const {navigation, route} = props;
  const [scheduleList, setScheduleList] = useState(false);
  const [ShowPatientList, setShowPatientList] = useState(false);
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
