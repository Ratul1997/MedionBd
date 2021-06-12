/** 
 name: Answered
 function: This is a  component for Answered
**/
import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
//Dynamic Screen
import normalization from '../../../../constants/normalization';

import {useIsFocused} from '@react-navigation/native';
import AnsewerdItem from './AnsewerdItem';
//Dummy Data
import AnswerAprrovedFeedDataDummy from '../../../../helpers/DummyData/AnswerAprrovedFeedDataDummy';
import axios from 'axios';
import {BASE_URL_FINAL} from '@env';
import ActivityIndicatorComponent from '../../../../common/ActivityIndicatorComponent';
export default function Answered(props) {
  const [page, setPage] = useState(1);
  const [questionList, setQuestionList] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const isFocused = useIsFocused();
  // Dummy Data of Answered List
  const AnsweredData = AnswerAprrovedFeedDataDummy.Answered;

  // render Items of Data
  const render_feed = ({item, index}) => {
    return <AnsewerdItem item={item} />;
  };

  useEffect(() => {
    setIsLoading(true);
    load();
  }, [isFocused]);
  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const url = BASE_URL_FINAL + 'questions';
      console.log(url);
      const questionsData = await axios.post(url, {
        page: page,
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

  // render view
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
