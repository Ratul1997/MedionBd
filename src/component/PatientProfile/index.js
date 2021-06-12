/** 
 name: PatientProfile
 function: This is a  component for PatientProfile
**/
import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
//Colors And Dynamic Screen
import COLORS from '../../constants/COLORS';
import normalization from '../../constants/normalization';

import AntDesign from 'react-native-vector-icons/AntDesign';
import VirtualizedView from '../../common/VirtualizedView';

import PatientProfileData from '../../helpers/DummyData/PatientProfileData';
import PatientProfileOptions from '../../helpers/PatientProfileOptions';

export default function PatientProfile(props) {
  /*
  Getting properties from navigation

  variables-
  navigation: navigation properties
  */
  const {navigation, userDetails} = props;
  /**
   * @name: onClickForNavigate
   * @function: navigate To patientStack according to individual Item
   */
  const onClickForNavigate = navTo => () => {
    navigation.navigate(navTo);
  };

  //rendering Items of PatientProfile Options
  const renderItem = ({item}) => {
    const borderBottomWidth = item.key === '8' ? 0 : 0.8;
    return (
      <TouchableOpacity
        style={{
          padding: normalization(15),
          borderBottomWidth,
          borderColor: '#D7DBE0',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={onClickForNavigate(item.navTo)}>
        <Text
          style={{
            fontSize: normalization(17),
            color: COLORS.deepBlueHeader,
            fontWeight: 'bold',
          }}>
          {item.title}
        </Text>
        <AntDesign name="right" size={20} color={COLORS.deepBlueHeader} />
      </TouchableOpacity>
    );
  };

  //render Main View
  return (
    <View style={{flex: 1, backgroundColor: COLORS.DoctorAppnt_Background}}>
      <VirtualizedView>
        <View
          style={{
            height: normalization(85),
            width: '100%',
            elevation: 4,
            position: 'absolute',
            backgroundColor: COLORS.white,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />
        <View
          style={{
            height: normalization(80),
            elevation: 4,
            backgroundColor: COLORS.deepBlueHeader,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
          }}
        />
        <View
          style={{
            height: normalization(110),
            width: normalization(110),
            borderRadius: normalization(55),
            backgroundColor: '#fff',
            elevation: 4,
            position: 'absolute',
            alignSelf: 'center',
            alignItems: 'center',
            top: normalization(25),
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../images/doc.jpg')}
            style={{
              borderRadius: normalization(50),
              borderWidth: 2,
              borderColor: COLORS.white,
              alignSelf: 'center',
              justifyContent: 'center',
              height: normalization(100),
              width: normalization(100),
            }}
          />
        </View>

        <View
          style={{
            marginTop: normalization(50),
            padding: normalization(10),
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: normalization(18),
              color: COLORS.deepBlueHeader,
              fontWeight: 'bold',
            }}>
            {userDetails.patient_name}
          </Text>
          <Text>Gender: {userDetails.patient_gender}</Text>

          <Text
            style={{
              fontSize: normalization(16),
              color: COLORS.deepBlueHeader,
            }}>
            Age: {userDetails.patient_age}
          </Text>
          <Text
            style={{fontSize: normalization(16), color: COLORS.deepBlueHeader}}>
            Membership Id: {userDetails.userId}
          </Text>
        </View>

        <View
          style={{
            elevation: 4,
            backgroundColor: COLORS.white,
            margin: normalization(15),
            borderRadius: 15,
            padding: normalization(15),
          }}>
          <FlatList data={PatientProfileOptions} renderItem={renderItem} />
        </View>
      </VirtualizedView>
    </View>
  );
}
