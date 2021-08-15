/** 
 name: DoctorItem
 function: This is a component for DoctorItem
**/
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Button,
} from 'react-native';
//Colors And Dynamic Screens
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';
import ModalComponent from '../../../common/ModalComponent';
//Width of Window
const WIDTH = Dimensions.get('window').width;

export default function DoctorItem(props) {
  /*
  Getting properties from navigation

  variables-
  item: doctor Information (Object)
  navigation: navigation properties
  */
  const {item, navigation, index, title} = props;
  const [modalVisible, setModalVisible] = useState(false);
  /**
   * @name: navigateNormalAppointMent
   * @function: navigate to NormalAppointMent Page
   */
  const navigateNormalAppointMent = () => {
    navigation.navigate('NormalAppointment', {
      item: item,
      title: 'Offline',
    });
  };
  /**
   * @name: navigateVideoCallAppointMent
   * @function: navigate to VideoCallAppointMent Page
   */
  const navigateVideoCallAppointMent = () => {
    navigation.navigate('NormalAppointment', {
      item: item,
      title: 'Online',
    });
  };
  /**
   * @name: navigateDoctorProfile
   * @function: navigate to DoctorProfile by passing DoctorList title
   */
  const navigateDoctorProfile = () => {
    navigation.navigate('DoctorProf', {
      title: 'DoctorList',
      item: item,
    });
  };
  const onVirtualChamber = () => {
    navigation.navigate('GoogleMap', {item: item, title: 'Online'});
  };

  const modalToggle = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <ModalComponent
        modalVisible={modalVisible}
        onPressCloseModal={modalToggle}>
        <Text style={{textAlign: 'center', fontSize: normalization(15)}}>
          Book By
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: normalization(15),
          }}>
          <Button
            title="Virtual Chamber"
            style={{margin: normalization(5)}}
            onPress={onVirtualChamber}
          />
          <Button
            title="Video Call"
            style={{margin: normalization(5)}}
            onPress={navigateVideoCallAppointMent}
          />
        </View>
      </ModalComponent>
      <View
        style={{
          width: WIDTH * 0.9,
          height: normalization(110),
          backgroundColor: '#fff',
          elevation: 3,
          borderRadius: 10,
          marginTop: 10,
          marginBottom: 10,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{flex: 0.35, justifyContent: 'center', alignItems: 'center'}}
          onPress={navigateDoctorProfile}>
          <Image
            style={{
              height: '63.63%',
              width: normalization(70),
              borderRadius: 10,
            }}
            source={require('../../../images/doc.jpg')}
          />
          <TouchableOpacity
            style={{
              // backgroundColor: '#F5F6F8',
              width: normalization(70),
              height: normalization(18),
              marginTop: normalization(5),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              // borderWidth: 1,
              // borderColor: '#979A9A',
            }}
          />
        </TouchableOpacity>
        <View style={{flex: 0.8, justifyContent: 'center'}}>
          <View style={{height: normalization(70)}}>
            <Text
              style={{
                fontSize: normalization(14),
                color: '#19769F',
                fontWeight: 'bold',
              }}>
              {item.doctor_name}
            </Text>
            <Text
              style={{fontSize: normalization(11), color: '#444547'}}
              numberOfLines={1}>
              {item.doctor_qualification}
            </Text>
            <Text
              style={{fontSize: normalization(11), color: '#444547'}}
              numberOfLines={1}>
              {item.doctor_institution}
            </Text>
            <Text style={{fontSize: normalization(11), color: '#011A30'}}>
              Time: {item.startTime} - {item.endTime}
            </Text>
            <Text style={{fontSize: normalization(10), color: '#071734'}}>
              Consultation Fee: {item.fee} BDT
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            {/* <TouchableOpacity
            style={{
              backgroundColor: '#F5F6F8',
              width: normalization(90),
              marginEnd: normalization(10),
              height: normalization(18),
              marginTop: normalization(5),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#979A9A',
            }}
            onPress={navigateNormalAppointMent}>
            <Text
              style={{
                color: '#03318C',
                fontSize: normalization(12),
                fontWeight: 'bold',
              }}>
              Appointment
            </Text>
          </TouchableOpacity> */}
            <TouchableOpacity
              style={{
                backgroundColor: '#F5F6F8',
                width: normalization(90),
                marginEnd: normalization(10),
                height: normalization(18),
                marginTop: normalization(5),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#979A9A',
              }}
              onPress={() => {
                title === 'Online'
                  ? modalToggle()
                  : navigateNormalAppointMent();
              }}>
              <Text
                style={{
                  color: '#03318C',
                  fontSize: normalization(12),
                  fontWeight: 'bold',
                }}>
                {title === 'Online' ? 'Book Call' : 'Book'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
