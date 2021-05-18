/** 
 name: DoctorInformation
 function: This is a component for DoctorInformation
**/

import React from 'react';
import {View, Text, Image} from 'react-native';
//Colors And Dynamic Screen
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';

export default function DoctorInformation(props) {
  /*
  Getting properties from navigation

  variables-
  accountInformation: accountInformation of Doctor
  */

  const {accountInformation, item} = props;
  //render Main View
  return (
    <>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            elevation: 6,
            marginBottom: 15,
            backgroundColor: COLORS.white,
            alignItems: 'center',
            width: '100%',
            borderBottomStartRadius: 30,
            borderBottomEndRadius: 30,
          }}>
          <View
            style={{
              elevation: 6,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.doctorListHeader,
              padding: normalization(15),
              borderBottomStartRadius: 30,
              borderBottomEndRadius: 30,
            }}>
            <View
              style={{
                height: normalization(110),
                width: normalization(110),
                borderRadius: 100,
                borderColor: '#fff',
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: normalization(100),
                  width: normalization(100),
                  borderWidth: 2,
                  borderColor: '#fff',
                  borderRadius: 100,
                }}
                source={
                  item.doctor_image_url
                    ? item.doctor_image_url
                    : require('../../../images/doc.jpg')
                }
              />
            </View>
            <View
              style={{
                flex: 1,
                marginStart: normalization(15),
                overflow: 'hidden',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: normalization(18),
                  fontWeight: 'bold',
                }}>
                {item.doctor_name}
              </Text>
              <Text style={{color: '#fff', fontSize: normalization(15)}}>
                {item.doctor_speciality}
              </Text>
              <Text style={{color: '#fff', fontSize: normalization(11)}}>
                {item.doctor_qualification}
              </Text>
              <Text style={{color: '#fff', fontSize: normalization(10)}}>
                {item.doctor_institution}
              </Text>
              <Text style={{color: '#fff', fontSize: normalization(10)}}>
                Time: {item.startTime}- {item.endTime}
              </Text>
            </View>
          </View>
          <View
            style={{
              elevation: 4,
              backgroundColor: COLORS.white,
              width: '100%',
              borderBottomStartRadius: 30,
              borderBottomEndRadius: 30,
              alignItems: 'center',
              padding: normalization(15),
            }}>
            <Text style={{color: '#19769F', fontSize: normalization(18)}}>
              Consultation Free: {item.fee} BDT
            </Text>
          </View>
        </View>

        {accountInformation && (
          <Text
            style={{
              fontSize: normalization(18),
              color: COLORS.doctorListHeader,
            }}>
            Appointment Information
          </Text>
        )}
      </View>
    </>
  );
}
