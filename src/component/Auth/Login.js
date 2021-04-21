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

export default function Login(props) {
  /*

  Getting properties from navigation

  function-
  applyButtonClick: for navigating to next Page
  */
  const {applyButtonClick} = props;

  return (
    // Mani View 
    <View>
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
        Username or Email
      </Text>
      <TextInput
        placeholder="Username/Email/numer"
        style={styles.textInputStyle}
      />
      <Text style={{marginStart: normalization(10), color: COLORS.textGrey}}>
        Password
      </Text>
      <TextInput placeholder="Password" style={styles.textInputStyle} />

      <TouchableOpacity onPress={applyButtonClick} style={styles.logInButton}>
        <Text
          style={{
            fontSize: normalization(14),
            color: COLORS.white,
            fontWeight: 'bold',
          }}>
          Apply
        </Text>
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
        <Text
          style={{
            marginStart: normalization(10),
            color: COLORS.textlightBlue,
            fontSize: normalization(13),
          }}>
          Sign Up
        </Text>
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
