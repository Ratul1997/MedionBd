/** 
 name: VideoCallAppointMent
 function: This is a component for VideoCallAppointMent
**/
import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import AllPurposeHeader from '../../../../common/AllPurposeHeader';
import LoginModal from '../../../../common/LoginModal';
import Login from '../../../Auth/Login';
import DoctorInformation from '../DoctorInformation';
import AppointMentsFooter from '../AppointMentsFooter';
import CalenderContainer from './CalenderContainer';
import VirtualizedView from '../../../../common/VirtualizedView';
import {FlatList} from 'react-native-gesture-handler';
import normalization from '../../../../constants/normalization';
import COLORS from '../../../../constants/COLORS';


const AvailableTime = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '9:30 AM',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '9:30 AM',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '9:30 AM',
  },
  {
    id: 'dnvbsjdkvb-3da1-471f-bd96-145571e29d72',
    title: '9:30 AM',
  },
  {
    id: '58694anvkjdvbjkvb0f-3da1-471f-bd96-145571e29d72',
    title: '9:30 AM',
  },
];

export default function VideoCallAppointMent(props) {
  const {navigation} = props;
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedId, setSelectedId] = useState(null);
  const onBackNavigate = () => {
    navigation.pop();
  };
  const onPressCloseModal = () => {
    setModalVisible(false);
  };

  const onConfirm = () => {
    setModalVisible(true);
  };

  const applyButtonClick = () => {
    navigation.replace('VideoCallProfileInformation');
  };

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#19769F' : '#fff';
    const color = item.id === selectedId ? '#fff' : '#19769F';

    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        style={{
          backgroundColor,
          padding: 10,
          margin: 10,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: '#19769F',
        }}>
        <Text style={{color, fontSize: normalization(15)}}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <AllPurposeHeader title="Appointment" onBackNavigate={onBackNavigate} />
      <LoginModal
        modalVisible={modalVisible}
        onPressCloseModal={onPressCloseModal}>
        <Login applyButtonClick={applyButtonClick} />
      </LoginModal>
      <VirtualizedView>
        <DoctorInformation />
        <CalenderContainer />
        <View
          style={{
            elevation: 6,
            backgroundColor: '#fff',
            width: '100%',
            borderTopStartRadius: 30,
            borderTopEndRadius: 30,
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              width: '100%',
              padding: 25,
              borderTopStartRadius: 30,
              borderTopEndRadius: 30,
            }}>
            <Text style={{color: '#19769F', fontSize: normalization(16)}}>
              Select availble time
            </Text>
            <FlatList
              data={AvailableTime}
              horizontal={true}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
        <AppointMentsFooter title="Confirm Schedule" onConfirm={onConfirm} />
      </VirtualizedView>
    </>
  );
}
