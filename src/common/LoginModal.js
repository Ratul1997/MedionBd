import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import COLORS from '../constants/COLORS';
import normalization from '../constants/normalization';

export default function LoginModal(props) {
  const {modalVisible, onPressCloseModal, children} = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      presentationStyle="overFullScreen">
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View
          style={{
            width: '90%',
            backgroundColor: '#fff',
            borderRadius: 25,
            padding: 25,
            elevation: 100,
          }}>
          <TouchableOpacity onPress={onPressCloseModal}>
            <Feather
              style={{alignSelf: 'flex-end'}}
              name="x"
              size={30}
              color={COLORS.doctorListHeader}
            />
          </TouchableOpacity>
          {children}
        </View>
      </View>
    </Modal>
  );
}
