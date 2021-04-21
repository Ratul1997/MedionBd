/** 
 name: Answered
 function: This is a  component for Answered
**/
import React from 'react';
import {FlatList} from 'react-native';
import AnsewerdItem from './AnsewerdItem';
import AnswerAprrovedFeedDataDummy from '../../../../helpers/DummyData/AnswerAprrovedFeedDataDummy';
import normalization from '../../../../constants/normalization';

export default function Answered(props) {
  const AnsweredData = AnswerAprrovedFeedDataDummy.Answered;
  const render_feed = ({item, index}) => {
    return <AnsewerdItem item={item} />;
  };

  return (
    <FlatList
      data={AnsweredData}
      style={{marginBottom: normalization(7)}}
      renderItem={render_feed}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}
