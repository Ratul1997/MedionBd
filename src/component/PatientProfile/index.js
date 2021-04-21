/** 
 name: PatientProfile
 function: This is a  component for PatientProfile
**/
import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import PatientProfileOptions from '../../helpers/PatientProfileOptions';
import COLORS from '../../constants/COLORS';
import normalization from '../../constants/normalization';

import AntDesign from 'react-native-vector-icons/AntDesign';
import VirtualizedView from '../../common/VirtualizedView';
import PatientProfileData from '../../helpers/DummyData/PatientProfileData';

export default function PatientProfile(props) {
  const {navigation} = props;
  const onClickForNavigate = navTo => () => {
    navigation.navigate('PatientStack', {
      screen: navTo,
    });
  };
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
            {PatientProfileData.name}
          </Text>
          <Text>{PatientProfileData.name}</Text>
          <Text
            style={{fontSize: normalization(16), color: COLORS.deepBlueHeader}}>
            {PatientProfileData.type}
          </Text>
          <Text
            style={{fontSize: normalization(16), color: COLORS.deepBlueHeader}}>
            Membership Id: {PatientProfileData.membershipId}
          </Text>
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              borderColor: COLORS.deepBlueHeader,
              paddingVertical: normalization(10),
              alignItems: 'center',
              width: COLORS.Width * 0.85,
              marginTop: normalization(10),
              backgroundColor: '#D7E6FB',
              borderRadius: 5,
            }}>
            <View
              style={{
                width: '85%',
                backgroundColor: COLORS.white,
                height: 5,
                borderRadius: 10,
                marginBottom: 5,
              }}>
              <View
                style={{
                  width: PatientProfileData.profileDone,
                  height: '100%',
                  backgroundColor: COLORS.deepBlueHeader,
                  borderRadius: 10,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: normalization(17),
                color: COLORS.deepBlueHeader,
                fontWeight: 'bold',
              }}>
              Complete your Profile: {PatientProfileData.profileDone} done
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              borderColor: COLORS.deepBlueHeader,
              paddingVertical: normalization(10),
              alignItems: 'center',
              width: COLORS.Width * 0.85,
              marginTop: normalization(10),
              backgroundColor: '#D7E6FB',
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: normalization(17),
                color: COLORS.deepBlueHeader,
                fontWeight: 'bold',
              }}>
              Upgrade to premium
            </Text>
          </TouchableOpacity>
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
