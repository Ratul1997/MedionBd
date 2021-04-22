/** 
 name: Answered
 function: This is a  component for Answered
**/
import React from 'react';
import {FlatList} from 'react-native';
//Dynamic Screen
import normalization from '../../../../constants/normalization';

import AnsewerdItem from './AnsewerdItem';
//Dummy Data
import AnswerAprrovedFeedDataDummy from '../../../../helpers/DummyData/AnswerAprrovedFeedDataDummy';

export default function Answered(props) {
  // Dummy Data of Answered List
  const AnsweredData = AnswerAprrovedFeedDataDummy.Answered;

  // render Items of Data
  const render_feed = ({item, index}) => {
    return <AnsewerdItem item={item} />;
  };

  // render view
  return (
    <FlatList
      data={AnsweredData}
      style={{marginBottom: normalization(7)}}
      renderItem={render_feed}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}
