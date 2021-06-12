import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import PatientInformation from '../Services/AppointMent/NormalAppointMent/PatientInformation';
import {connect} from 'react-redux';
import IonIcons from 'react-native-vector-icons/Ionicons';
import normalization from '../../constants/normalization';
import COLORS from '../../constants/COLORS';
import axios from 'axios';
import {BASE_URL, BASE_URL_FINAL} from '@env';
import ActivityIndicatorComponent from '../../common/ActivityIndicatorComponent';
import {userConstants} from '../../constants/userConstants';
function SignUp(props) {
  const {onLogin, loggedIn, storedata, loggedInReq} = props;
  const [patient_name, setPatient_Name] = useState('');
  const [patient_age, setPatient_Age] = useState('');
  const [patient_gender, setPatient_Gender] = useState('');
  const [patient_phone_number, setPatient_phone_number] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      setPatient_Age('');
      setPatient_Gender('');
      setPatient_Name('');
      setPatient_phone_number('');
    };
  }, []);
  const onSignUp = () => {
    setIsLoading(true);

    const age = parseInt(patient_age);
    const url = BASE_URL_FINAL + 'signUp';
    axios
      .post(url, {
        patient_name: patient_name,
        patient_gender: patient_gender,
        patient_age: age,
        patient_phone_number: patient_phone_number,
      })
      .then(res => {
        setIsLoading(false);
        storedata(res.data);
        loggedInReq();
        onLogin();
        console.log(res.data);
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };
  return (
    <>
      <View
        style={{flexDirection: 'row', width: '90%', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={onLogin}
          style={{position: 'absolute', left: 0}}>
          <IonIcons
            name="arrow-back-circle-sharp"
            color={COLORS.deepBlueHeader}
            size={normalization(25)}
          />
        </TouchableOpacity>

        <View style={{}}>
          <Text
            style={{fontSize: normalization(20), color: COLORS.deepBlueHeader}}>
            Sign Up
          </Text>
        </View>
      </View>
      <PatientInformation
        patient_age={patient_age}
        patient_gender={patient_gender}
        patient_name={patient_name}
        patient_phone_number={patient_phone_number}
        setPatient_Age={setPatient_Age}
        setPatient_Name={setPatient_Name}
        setPatient_phone_number={setPatient_phone_number}
        setPatient_Gender={setPatient_Gender}
      />

      <TouchableOpacity
        onPress={onSignUp}
        style={{
          height: normalization(47),
          width: Dimensions.get('window').width * 0.92 - normalization(57),
          backgroundColor: '#053871',
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 25,
          marginBottom: normalization(7),
        }}>
        {isLoading ? (
          <ActivityIndicatorComponent size="small" color="white" />
        ) : (
          <Text
            style={{
              fontSize: normalization(14),
              color: COLORS.white,
              fontWeight: 'bold',
            }}>
            Sign Up
          </Text>
        )}
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Text
          style={{
            marginStart: normalization(10),
            color: COLORS.textGrey,
            fontSize: normalization(13),
          }}>
          Already have an account!{' '}
        </Text>
        <TouchableOpacity onPress={onLogin}>
          <Text
            style={{
              marginStart: normalization(10),
              color: COLORS.textlightBlue,
              fontSize: normalization(13),
            }}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

function mapState(state) {
  const {userDetails} = state.userReducer;
  const {loggedIn} = state.authReducer;
  return {userDetails, loggedIn};
}
const actionCreators = {
  storedata: user => dispatch =>
    dispatch({type: userConstants.STORE_USER_DETAILS, user}),
  loggedInReq: () => dispatch => dispatch({type: userConstants.LOGIN_SUCCESS}),
};
export default connect(mapState, actionCreators)(SignUp);
