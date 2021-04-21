/** 
 name: Approved
 function: This is a  component for Approved
**/

import React from 'react';
import {View, Text, FlatList} from 'react-native';
import AnswerAprrovedFeedDataDummy from '../../../../helpers/DummyData/AnswerAprrovedFeedDataDummy';
import normalization from '../../../../constants/normalization';
import ApprovedItem from './ApprovedItem';

export default function Approved(props) {
  const ApprovedData = AnswerAprrovedFeedDataDummy.Approved;
  const render_feed = ({item, index}) => {
    return <ApprovedItem item={item} />;
  };

  return (
    <FlatList
      data={ApprovedData}
      style={{marginBottom: normalization(7)}}
      renderItem={render_feed}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}
