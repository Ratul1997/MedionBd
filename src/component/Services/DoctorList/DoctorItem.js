/** 
 name: DoctorItem
 function: This is a component for DoctorItem
**/
import * as React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';
const WIDTH = Dimensions.get('window').width;

export default function DoctorItem(props) {
  const {item, navigation, index} = props;
  const navigateNormalAppointMent = () => {
    navigation.navigate('NormalAppointment');
  };

  const navigateVideoCallAppointMent = () => {
    navigation.navigate('VideoCallAppointMent');
  };

  const navigateDoctorProfile = () => {
    navigation.navigate('DoctorStack', {
      screen: 'DoctorProfile',
      params: {
        title: 'DoctorList',
      },
    });
  };
  return (
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
      <View
        style={{flex: 0.35, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{height: '63.63%', width: normalization(70), borderRadius: 10}}
          source={require('../../../images/doc.jpg')}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#F5F6F8',
            width: normalization(70),
            height: normalization(18),
            marginTop: normalization(5),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#979A9A',
          }}
          onPress={navigateDoctorProfile}>
          <Text
            style={{
              color: '#03318C',
              fontSize: normalization(12),
              fontWeight: 'bold',
            }}>
            See Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.8, justifyContent: 'center'}}>
        <View style={{height: normalization(70)}}>
          <Text
            style={{
              fontSize: normalization(14),
              color: '#19769F',
              fontWeight: 'bold',
            }}>
            {item.name}
          </Text>
          <Text style={{fontSize: normalization(11), color: '#444547'}}>
            {item.degree}
          </Text>
          <Text style={{fontSize: normalization(11), color: '#444547'}}>
            {item.position}
          </Text>
          <Text style={{fontSize: normalization(11), color: '#011A30'}}>
            Chamber: {item.chamber}
          </Text>
          <Text style={{fontSize: normalization(10), color: '#071734'}}>
            Consultation Fee: {item.fee} BDT
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#F5F6F8',
              width: '45%',
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
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#F5F6F8',
              width: '45%',
              marginEnd: normalization(10),
              height: normalization(18),
              marginTop: normalization(5),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#979A9A',
            }}
            onPress={navigateVideoCallAppointMent}>
            <Text
              style={{
                color: '#03318C',
                fontSize: normalization(12),
                fontWeight: 'bold',
              }}>
              Book Video Call
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
