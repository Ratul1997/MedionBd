import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
//Colors And Dynamic Screen
import normalization from '../../../constants/normalization';

import Header from '../../../common/Header';
import ImageSlider from './ImageSlider';
import CallingOptions from './CallingOptions';
import ServicesHealthQuestion from './ServicesHealthQuestion';
import VirtualizedView from '../../../common/VirtualizedView';
import ServiceList from '../../../helpers/ServicesList';
import HealthQuestions from '../../../helpers/HealthQuestions';

const HEIGHT = Dimensions.get('window').height;

export default function HomePage(props) {
  /*
  Getting properties from navigation

  variables-
  navigation: navigation properties
  */
  const {navigation} = props;

  /**
   * @name: openDrawer
   * @function: for opening drawer
   */
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={{flex: 1}}>
      {/* Header */}
      <View style={{flex: 0.1}}>
        <Header openDrawer={openDrawer} />
      </View>

      <VirtualizedView style={{flex: 0.9}}>
        <View style={{height: HEIGHT * 0.3}}>
          {/* <SliderComponent/> */}
          <ImageSlider />
        </View>

        {/* <CallingOption /> */}
        <CallingOptions />

        {/* Services */}
        <ServicesHealthQuestion
          data={ServiceList}
          title="Services"
          navigation={navigation}
        />

        {/* Questions And Health Sevices */}
        <ServicesHealthQuestion
          data={HealthQuestions}
          title="Health Questions"
          navigation={navigation}
        />
      </VirtualizedView>
    </View>
  );
}