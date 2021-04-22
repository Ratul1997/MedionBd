/** 
 name: HealthCheckUp
 function: This is a component for HealthCheckUp
**/

import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
//Colors And Dynamic Screen
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';

import AllPurposeHeader from '../../../common/AllPurposeHeader';
import HealthCheckUpData from '../../../helpers/HealthCheckUpData';
import HealthCheckUpItem from './HealthCheckUpItem';

export default function HealthCheckUp(props) {
  /*
  Getting properties from navigation

  variables-
  navigation: navigation properties
  */
  const {navigation} = props;

  //Dummy Data of helthCheckUpData
  const healthCheckUpData = HealthCheckUpData;

  /**
   * @name: onBackNavigate
   * @function: navigation Back
   */
  const onBackNavigate = () => {
    navigation.goBack();
  };

  /**
   * @name: onNavigate
   * @function: navigation to dynamic Nav
   */
  const onNavigate = nav => () => {
    navigation.navigate(nav);
  };

  //render Items of HealthCheckUpData
  const renderItem = ({item, index}) => {
    return <HealthCheckUpItem item={item} onNavigate={onNavigate(item.nav)} />;
  };

  //render Main View
  return (
    <View style={{flex: 1, backgroundColor: COLORS.DoctorAppnt_Background}}>
      <AllPurposeHeader
        title="Health Checkup"
        onBackNavigate={onBackNavigate}
      />

      <View
        style={{
          marginTop: normalization(15),
          alignItems: 'center',
          backgroundColor: 'transparent',
          justifyContent: 'center',
        }}>
        <FlatList
          data={healthCheckUpData}
          numColumns={2}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
