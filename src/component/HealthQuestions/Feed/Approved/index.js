/** 
 name: Approved
 function: This is a  component for Approved
**/

import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

//Dynamic Screen
import normalization from '../../../../constants/normalization';
//Dummy Data
import AnswerAprrovedFeedDataDummy from '../../../../helpers/DummyData/AnswerAprrovedFeedDataDummy';

import {useIsFocused} from '@react-navigation/native';
import ApprovedItem from './ApprovedItem';
import {userConstants} from '../../../../constants/userConstants';
import {connect} from 'react-redux';
import {BASE_URL_FINAL} from '@env';
import axios from 'axios';
import ActivityIndicatorComponent from '../../../../common/ActivityIndicatorComponent';
function Approved(props) {
  const {userDetails} = props;
  const [page, setPage] = useState(1);
  const [questionList, setQuestionList] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const isFocused = useIsFocused();
  //Dummy Data
  const ApprovedData = AnswerAprrovedFeedDataDummy.Approved;

  // render items
  const render_feed = ({item, index}) => {
    return <ApprovedItem item={item} />;
  };

  useEffect(() => {
    setIsLoading(true);
    loadData();
  }, [isFocused]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const url = BASE_URL_FINAL + 'questions-patient';
      console.log(url);
      const questionsData = await axios.post(url, {
        page: page,
        idpatients: userDetails.userId,
      });
      const {questions, page_number} = questionsData.data;
      console.log(questions);
      setQuestionList([...questionList, ...questions]);
      setIsLoading(false);
      setPage(page + 1);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };
  return loading ? (
    <ActivityIndicatorComponent size="large" />
  ) : (
    <FlatList
      data={questionList}
      style={{marginBottom: normalization(7)}}
      renderItem={render_feed}
      keyExtractor={(item, index) => index.toString()}
    />
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
export default connect(mapState, actionCreators)(Approved);
