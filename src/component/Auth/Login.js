/** 
 name: Login
 function: This is a component for login
**/

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

//Colors And Dynamic Screen
import COLORS from '../../constants/COLORS';
import normalization from '../../constants/normalization';
import {connect} from 'react-redux';
import auth from '@react-native-firebase/auth';

import firebase from '@react-native-firebase/app';
import ActivityIndicatorComponent from '../../common/ActivityIndicatorComponent';
import axios from 'axios';
import {BASE_URL_FINAL} from '@env';
import {userConstants} from '../../constants/userConstants';
function Login(props) {
  /*

  Getting properties from navigation

  function-
  applyButtonClick: for navigating to next Page
  */
  const {applyButtonClick, onSignUp, storedata, loggedInReq} = props;

  const [confirmResult, setConfirmResult] = useState(null);
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoding] = useState(false);
  const [sendCode, setSendCode] = useState(false);
  const [userData, setUserData] = useState({});
  const validatePhoneNumber = phone => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/;
    return regexp.test(phone);
  };

  const checkId = () => {
    const url = BASE_URL_FINAL + 'check-patient';
    setIsLoding(true);
    axios
      .post(url, {
        patient_phone_number: phone,
      })
      .then(res => {
        console.log(res.data.results[0]);
        const data = res.data.results[0];

        data.userId = data.idpatients;
        delete data.idpatients;
        console.log(data);
        setUserData(data);
        handleSendCode();
      })
      .catch(error => {
        console.log(error);
        setIsLoding(false);
        alert('Phone Number Cannot be Found. Please Sign Up');
      });
  };
  const handleSendCode = () => {
    // Request to send OTP
    const phoneNew = '+880' + phone;

    if (validatePhoneNumber(phoneNew)) {
      auth()
        .signInWithPhoneNumber(phoneNew)
        .then(confirmResult => {
          setConfirmResult(confirmResult);
          setIsLoding(false);
          setSendCode(true);
          console.log(confirmResult);
        })
        .catch(error => {
          setIsLoding(false);
          alert(error.message);
          console.log(error);
        });
    } else {
      alert('Invalid Phone Number');
    }
  };
  const handleVerifyCode = () => {
    // Request for OTP verification
    if (verificationCode.length == 6) {
      setIsLoding(true);
      confirmResult
        .confirm(verificationCode)
        .then(user => {
          setIsLoding(false);
          storedata(userData);
          loggedInReq();
          // alert(`Verified! ${user.uid}`);
        })
        .catch(error => {
          setIsLoding(false);
          alert(error.message);
          console.log(error);
        });
    } else {
      alert('Please enter a 6 digit OTP code.');
    }
  };
  return (
    // Mani View
    <View>
      {!sendCode ? null : (
        <TouchableOpacity
          style={{position: 'absolute'}}
          onPress={() => setSendCode(false)}>
          <Text style={{color: COLORS.deepBlueHeader}}>Back</Text>
        </TouchableOpacity>
      )}
      <Image
        style={{margin: normalization(23), alignSelf: 'center'}}
        source={require('../../images/33.png')}
      />
      <Text
        style={{
          color: COLORS.textlightBlue,
          fontWeight: 'bold',
          fontSize: normalization(20),
          alignSelf: 'center',
          marginBottom: normalization(20),
        }}>
        Log in to continue
      </Text>
      <Text style={{marginStart: normalization(10), color: COLORS.textGrey}}>
        {!sendCode ? 'Phone Number' : 'Otp'}
      </Text>
      <TextInput
        placeholder={!sendCode ? 'Phone Number' : 'Otp'}
        style={styles.textInputStyle}
        value={!sendCode ? phone : verificationCode}
        onChangeText={text =>
          !sendCode ? setPhone(text) : setVerificationCode(text)
        }
      />
      <TouchableOpacity
        onPress={!sendCode ? checkId : handleVerifyCode}
        style={styles.logInButton}>
        {isLoading ? (
          <ActivityIndicatorComponent size="small" color="white" />
        ) : (
          <Text
            style={{
              fontSize: normalization(14),
              color: COLORS.white,
              fontWeight: 'bold',
            }}>
            {!sendCode ? 'Send Code' : 'Verify'}
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
          Don't have an account!{' '}
        </Text>
        <TouchableOpacity onPress={onSignUp}>
          <Text
            style={{
              marginStart: normalization(10),
              color: COLORS.textlightBlue,
              fontSize: normalization(13),
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    fontSize: normalization(14),
    padding: 8,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#979A9A',
    marginBottom: normalization(13),
  },
  logInButton: {
    height: normalization(47),
    width: Dimensions.get('window').width * 0.92 - normalization(57),
    backgroundColor: '#053871',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 25,
    marginBottom: normalization(7),
  },
});

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
export default connect(mapState, actionCreators)(Login);
