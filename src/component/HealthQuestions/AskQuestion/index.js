/** 
 name: AskQuestion
 function: This is a  component for AskQuestion
**/
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

//Colors And Dynamic Screen
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';

import AllPurposeHeader from '../../../common/AllPurposeHeader';
//ScrollView Using FlatList
import VirtualizedView from '../../../common/VirtualizedView';
// Vector Icons
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function AskQuestion(props) {
  /*
  Getting properties from navigation

  variables-
  navigation: navigation properties
  */
  const {navigation} = props;
  /**
   * @name: onBackNavigate
   * @function: navigating Back
   */
  const onBackNavigate = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.DoctorAppnt_Background}}>
      <AllPurposeHeader
        title="Ask A Question"
        onBackNavigate={onBackNavigate}
      />
      <VirtualizedView style={{margin: normalization(10)}}>
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
          <Text style={styles.name_emailStyle}>Name:</Text>
          <TextInput
            style={styles.name_emailInput}
            placeholder="Enter your Name"
          />
          <Text style={styles.name_emailStyle}>Email:</Text>
          <TextInput
            style={styles.name_emailInput}
            placeholder="address@gmail.com"
          />
          <Text style={styles.name_emailStyle}>Question:</Text>
          <TextInput
            multiline={true}
            numberOfLines={15}
            maxLength={2000}
            style={styles.quesInputStyle}
            placeholder="Enter your question here"
          />

          <TouchableOpacity style={styles.submitButton}>
            <Text style={{fontSize: normalization(16), color: '#fff'}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.replace('Feed')}
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: normalization(15), color: '#19769F'}}>
            View News Feed{' '}
          </Text>
          <AntDesign name="arrowright" size={20} color="#19769F" />
        </TouchableOpacity>
      </VirtualizedView>
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
