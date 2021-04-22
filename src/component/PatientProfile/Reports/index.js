import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AllPurposeHeader from '../../../common/AllPurposeHeader';
import VirtualizedView from '../../../common/VirtualizedView';
import FileUpload from './FileUpload';
import PreviousFiles from './PreviousFiles';

export default function Reports(props) {
  /*
  Getting properties from navigation

  variables-
  navigation: navigation properties
  */
  const {navigation} = props;
  /**
   * @name: onBackNavigate
   * @function: navigation Back
   */
  const onBackNavigate = () => {
    navigation.goBack();
  };

  //render Main View
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
