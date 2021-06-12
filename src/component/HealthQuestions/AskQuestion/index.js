/** 
 name: AskQuestion
 function: This is a  component for AskQuestion
**/
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

//Colors And Dynamic Screen
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';

import AllPurposeHeader from '../../../common/AllPurposeHeader';
//ScrollView Using FlatList
import VirtualizedView from '../../../common/VirtualizedView';
// Vector Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import {BASE_URL_FINAL} from '@env';
import {connect} from 'react-redux';
import {userConstants} from '../../../constants/userConstants';
import ActivityIndicatorComponent from '../../../common/ActivityIndicatorComponent';
function AskQuestion(props) {
  /*
  Getting properties from navigation

  variables-
  navigation: navigation properties
  */
  const {navigation, loggedIn, userDetails} = props;

  const [questions, setQuestions] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  /**
   * @name: onBackNavigate
   * @function: navigating Back
   */
  const onBackNavigate = () => {
    navigation.goBack();
  };
  const submittedQuestion = () => {
    if (loggedIn) {
      const url = BASE_URL_FINAL + 'ask-question';
      console.log(userDetails);
      setIsLoading(true);
      axios
        .post(url, {
          idpatients: userDetails.userId,
          questions: questions,
          date: new Date(),
        })
        .then(res => {
          setIsLoading(false);
          alert('Your question has been posted');
        })
        .catch(err => {
          setIsLoading(false);
          alert('Something went wrong');
        });
    } else {
      alert('You have to log in first');
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.DoctorAppnt_Background}}>
      <AllPurposeHeader
        title="Ask A Question"
        onBackNavigate={onBackNavigate}
      />
      <ScrollView contentContainerStyle={{margin: normalization(10)}}>
        <Text
          style={{
            color: '#19769F',
            fontSize: normalization(18),
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          স্বাস্থ্য জিজ্ঞাসা
        </Text>
        <Text style={{color: '#444547', fontSize: normalization(15)}}>
          স্বাস্থ্য বিষয়ক যেকোনো প্রশ্ন করতে নিচের ফর্ম টি পূরন করুন। আমাদের
          সম্মানিত ডাক্তাররা আপনার প্রশ্নের উত্তর দিবেন। আপনার প্রশ্ন টি বাংলা
          অথবা ইংরেজি যেকোনো ভাষায় করতে পারবেন।
        </Text>
        <Text
          style={{
            color: '#444547',
            fontSize: normalization(15),
            marginBottom: normalization(17),
          }}>
          বি.দ্র : আপনার প্রশ্ন এবং এর উত্তর ওয়েবসাইট এ পাবলিশ এর ব্যাপারে
          কর্তৃপক্ষ সিদ্ধান্ত নিবে।
        </Text>

        <View
          style={{
            elevation: 4,
            padding: 10,
            marginBottom: 10,
            backgroundColor: COLORS.DoctorAppnt_Background,
            borderColor: '#19769F',
            borderWidth: 1,
            borderRadius: 15,
          }}>
          <Text style={styles.name_emailStyle}>Question:</Text>
          <TextInput
            multiline={true}
            numberOfLines={15}
            maxLength={2000}
            style={styles.quesInputStyle}
            value={questions}
            placeholder="Enter your question here"
            onChangeText={text => setQuestions(text)}
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={isLoading ? null : submittedQuestion}>
            {isLoading ? (
              <ActivityIndicatorComponent size="small" color="white" />
            ) : (
              <Text style={{fontSize: normalization(16), color: '#fff'}}>
                Submit
              </Text>
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.replace('Feed')}
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            alignItems: 'center',
            marginBottom: normalization(20),
          }}>
          <Text style={{fontSize: normalization(15), color: '#19769F'}}>
            View News Feed{' '}
          </Text>
          <AntDesign name="arrowright" size={20} color="#19769F" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  name_emailStyle: {
    color: '#444547',
    fontSize: normalization(15),
    marginBottom: 10,
  },
  name_emailInput: {
    backgroundColor: '#fff',
    borderWidth: 0.8,
    borderColor: '#979A9A',
    marginBottom: 10,
    fontSize: normalization(15),
    borderRadius: 5,
  },
  quesInputStyle: {
    height: 300,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    borderWidth: 0.8,
    borderColor: '#979A9A',
    marginBottom: 10,
    fontSize: normalization(15),
    borderRadius: 5,
  },
  submitButton: {
    padding: 10,
    paddingStart: 20,
    paddingEnd: 20,
    backgroundColor: COLORS.doctorListHeader,
    alignSelf: 'flex-start',
    borderRadius: 5,
    marginBottom: 10,
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
export default connect(mapState, actionCreators)(AskQuestion);
