/** 
 name: VideoCallingAppointment
 function: This is a  component for VideoCallingAppointment
**/
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import AllPurposeHeader from '../../../../common/AllPurposeHeader';
import VirtualizedView from '../../../../common/VirtualizedView';
import NextAppointMent from '../../common/NextAppointMent';
import AppointmentSchedule from '../../../../helpers/DummyData/AppointmentSchedule';
import UppCommingVOAppointMents from '../../common/UppCommingVOAppointMents';
import GetAppointMentsFooter from '../../../Services/AppointMent/AppointMentsFooter';
import {connect} from 'react-redux';
import ActivityIndicatorComponent from '../../../../common/ActivityIndicatorComponent';
import {sortByDate} from '../../../../constants/calcuationdata';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/native';
import {BASE_URL, BASE_URL_FINAL} from '@env';

function OnlineApointMents(props) {
  /*
  Getting properties from navigation

  variables-
  navigation: navigation properties
  */
  const {navigation, userDetails} = props;

  const isFocused = useIsFocused();
  /**
   * States
   */
  const [isLoading, setIsLoading] = useState(true);
  const [appointments, setAppointMents] = useState([]);
  /**
   * @name: onBackNavigate
   * @function: navigate Back
   */
  const onBackNavigate = () => {
    navigation.goBack();
  };
  /**
   * @name: onConfirm
   * @function: navigate Back
   */

  useEffect(() => {
    setIsLoading(true);
    loadData();
  }, [isFocused]);

  const onConfirm = () => {
    navigation.navigate('DoctorList', {title: 'Online'});
  };

  const loadData = () => {
    const url = BASE_URL_FINAL + 'appointment-online-past-history';

    axios
      .post(url, {
        idpatients: userDetails.userId,
      })
      .then(res => {
        setIsLoading(false);
        console.log(res.data.results);

        const sortedArray = sortByDate(res.data.results);
        setAppointMents(sortedArray);
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };
  //render Main View
  return (
    <>
      {isLoading ? (
        <View
          style={{
            height: '50%',
            width: '80%',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <ActivityIndicatorComponent size="large" />
        </View>
      ) : (
        <VirtualizedView>
          <UppCommingVOAppointMents
            appointmentSchedule={appointments}
            cross
            getLink
          />
          <GetAppointMentsFooter
            title="Get An Appointment"
            onConfirm={onConfirm}
          />
        </VirtualizedView>
      )}
    </>
  );
}
function mapState(state) {
  const {userDetails} = state.userReducer;
  return {userDetails};
}

const actionCreators = {};
export default connect(mapState, actionCreators)(OnlineApointMents);
