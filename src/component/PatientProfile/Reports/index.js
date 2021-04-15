import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AllPurposeHeader from '../../../common/AllPurposeHeader';
import VirtualizedView from '../../../common/VirtualizedView';
import FileUpload from './FileUpload';
import PreviousFiles from './PreviousFiles';

export default function Reports(props) {
  const {navigation} = props;
  const onBackNavigate = () => {
    navigation.goBack();
  };
  return (
    <>
      <AllPurposeHeader title="Reports" onBackNavigate={onBackNavigate} />
      <VirtualizedView>
        <FileUpload />
        <PreviousFiles />
      </VirtualizedView>
    </>
  );
}
