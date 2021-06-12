import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
//Colors And Dynamic Screen
import normalization from '../../../constants/normalization';
import {connect} from 'react-redux';
import Header from '../../../common/Header';
import ImageSlider from './ImageSlider';
import CallingOptions from './CallingOptions';
import ServicesHealthQuestion from './ServicesHealthQuestion';
import VirtualizedView from '../../../common/VirtualizedView';
import ServiceList from '../../../helpers/ServicesList';
import HealthQuestions from '../../../helpers/HealthQuestions';
import {BASE_URL, BASE_URL_FINAL} from '@env';
const HEIGHT = Dimensions.get('window').height;
import axios from 'axios';

import messaging from '@react-native-firebase/messaging';
import ModalComponent from '../../../common/ModalComponent';
import COLORS from '../../../constants/COLORS';
function HomePage(props) {
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

  const onNavigation = () => {
    navigation.navigate('DoctorList', {
      title: 'Online',
    });
  };

  const [channelName, setChannelName] = useState();
  const [isModal, setIsModal] = useState(false);
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // alert(remoteMessage.data.content);
      setIsModal(true);
      setChannelName(remoteMessage.data.type);
      console.log(remoteMessage);
    });

    return unsubscribe;
  }, []);

  const onJoinCall = () => {
    setIsModal(false);
    navigation.navigate('Video Call', {
      channel: channelName,
      type: 'Patient',
    });
  };
  const onCallButton = () => {
    // const url = BASE_URL_FINAL + 'send-notification';
    // console.log(url);
    // axios
    //   .post(url, {
    //     topicName: '012345786801515279018',
    //     msg: 'You are next',
    //     type: 'notify',
    //   })
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  };
  return (
    <>
    
      <ModalComponent modalVisible={isModal} closeCross={true}>
        <View
          style={{
            height: normalization(150),
            width: '80%',
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Text>Doctor has started meeting</Text>
          <TouchableOpacity
            onPress={onJoinCall}
            style={{
              height: normalization(30),
              width: normalization(50),
              backgroundColor: COLORS.deepBlueHeader,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{color: 'white'}}>Join</Text>
          </TouchableOpacity>
        </View>
      </ModalComponent>
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
          <CallingOptions
            onNavigation={onNavigation}
            onCallButton={onCallButton}
          />

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
    </>
  );
}
function mapState(state) {
  const {userDetails} = state.userReducer;
  return {userDetails};
}

const actionCreators = {};

export default connect(mapState, actionCreators)(HomePage);
