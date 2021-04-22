/** 
 name: Approved
 function: This is a  component for Approved
**/

import React from 'react';
import {FlatList} from 'react-native';

//Dynamic Screen
import normalization from '../../../../constants/normalization';
//Dummy Data
import AnswerAprrovedFeedDataDummy from '../../../../helpers/DummyData/AnswerAprrovedFeedDataDummy';

import ApprovedItem from './ApprovedItem';

export default function Approved(props) {
  //Dummy Data
  const ApprovedData = AnswerAprrovedFeedDataDummy.Approved;

  // render items
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
