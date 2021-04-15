import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import normalization from '../../../constants/normalization';
import COLORS from '../../../constants/COLORS';
import FontIso from 'react-native-vector-icons/Fontisto';
import IonIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function CallingOptions() {
  return (
    <View
      style={{
        marginHorizontal: normalization(15),
        width: '80%',
        // justifyContent: 'center',
        alignSelf:'center',
      }}>
      <TouchableOpacity
        style={{
          marginBottom: normalization(10),
          backgroundColor: '#fff',
          elevation: 4,
          flexDirection: 'row',
          height: normalization(35),
          borderRadius: 8,
          borderWidth: 1.8,
          borderColor: '#F2F3F4',
          alignItems: 'center',
          padding: normalization(5),
          justifyContent: 'space-evenly',
        }}>
        <FontAwesome name="user-md" color="#029128" size={normalization(25)} />
        <Text
          style={{
            fontSize: normalization(15),
            color: '#029128',
            fontFamily: COLORS.font_family,
            fontWeight: 'bold',
          }}>
          Talk to a Doctor (Free)
        </Text>

        <View
          style={{
            height: normalization(25),
            width: normalization(25),
            backgroundColor: '#029128',
            borderRadius: 50,
            padding: normalization(5),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <IonIcons name="call-sharp" size={normalization(12)} color="white" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginBottom: normalization(10),
          backgroundColor: '#fff',
          elevation: 4,
          flexDirection: 'row',
          height: normalization(35),
          borderRadius: 8,
          borderWidth: 1.8,
          borderColor: '#F2F3F4',
          alignItems: 'center',
          padding: normalization(5),
          justifyContent: 'space-evenly',
        }}>
        <FontIso name="doctor" color="#023E73" size={normalization(25)} />
        <Text
          style={{
            fontSize: normalization(15),
            color: '#2468F1',
            fontFamily: COLORS.font_family,
            fontWeight: 'bold',
          }}>
          Doctor Appointment
        </Text>

        <View
          style={{
            height: normalization(25),
            width: normalization(25),
            backgroundColor: '#2468F1',
            borderRadius: 50,
            padding: normalization(5),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome
            name="video-camera"
            size={normalization(10)}
            color="white"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
