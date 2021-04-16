import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AllPurposeHeader from '../../../common/AllPurposeHeader';
import VirtualizedView from '../../../common/VirtualizedView';
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';
import Appointment from './Apointment';
import Order from './Order';
import SubsCription from './SubsCription';

export default function History(props) {
  const {navigation} = props;

  const [selected, setSelected] = useState('1');
  const onBackNavigate = () => {
    navigation.goBack();
  };

  const onConfirm = () => {
    navigation.goBack();
  };

  const arrowMaringLeftSize = () => {
    return selected === '1' ? '15%' : selected === '2' ? '48%' : '80%';
  };
  return (
    <>
      <AllPurposeHeader title="History" onBackNavigate={onBackNavigate} />
      <VirtualizedView>
        <View style={{flexDirection: 'row', marginTop: normalization(10)}}>
          <TouchableOpacity
            style={styles.history_orderBtn}
            onPress={() => setSelected('1')}>
            <Text style={styles.textStyle}>Appointment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.history_orderBtn}
            onPress={() => setSelected('2')}>
            <Text style={styles.textStyle}>Order</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.history_orderBtn}
            onPress={() => setSelected('3')}>
            <Text style={styles.textStyle}>Subscription</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 5,
            marginLeft: arrowMaringLeftSize(),
            width: 0,
            height: 0,
            borderLeftWidth: 15,
            borderBottomWidth: 20,
            borderRightWidth: 15,
            borderStyle: 'solid',
            backgroundColor: 'transparent',
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: COLORS.white,
            elevation: 8,
          }}
        />
        {selected === '1' ? (
          <Appointment />
        ) : selected === '2' ? (
          <Order />
        ) : (
          <SubsCription />
        )}
      </VirtualizedView>
    </>
  );
}

const styles = StyleSheet.create({
  history_orderBtn: {
    flex: 1,
    paddingVertical: normalization(10),
    marginHorizontal: normalization(8),
    borderRadius: 10,
    backgroundColor: COLORS.deepBlueHeader,
    elevation: 4,
  },
  textStyle: {
    color: COLORS.textWhite,
    fontSize: 15,
    textAlign: 'center',
  },
});
