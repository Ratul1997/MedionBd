/** 
 name: HealthCheckUpDetails
 function: This is a component for HealthCheckUpDetails
**/
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import COLORS from '../../../../constants/COLORS';
import normalization from '../../../../constants/normalization';
import AllPurposeHeader from '../../../../common/AllPurposeHeader';
// import CheckBox from '@react-native-community/checkbox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import VirtualizedView from '../../../../common/VirtualizedView';

import RadioButtonRN from 'radio-buttons-react-native';
import CheckUpTestData from '../../../../helpers/DummyData/CheckUpTestData';

export default function HealthCheckUpDetails(props) {
  const {navigation} = props;

  const testData = CheckUpTestData
  const [isSelected, setSelection] = useState(false);

  const onBackNavigate = () => {
    navigation.goBack();
  };

  const BookingAlert = () =>
    Alert.alert(
      'Do you want to book?',
      '',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        {text: 'Cancel', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  const renderItem = ({item}) => {
    const checked =
      isSelected === item.key ? setSelection(true) : setSelection(false);
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: normalization(10),
        }}>
        {/* <CheckBox
          value={isSelected}
          onValueChange={checked}
          style={styles.checkbox}
        />
         */}

        <Text style={{fontSize: 18, marginHorizontal: normalization(10)}}>
          - {item.name}
        </Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.DoctorAppnt_Background}}>
      <AllPurposeHeader title="Details" onBackNavigate={onBackNavigate} />
      <View style={{flex: 1}}>
        <View style={{padding: normalization(15)}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomWidth: 0.8,
              borderBottomColor: COLORS.textInputBorder,
            }}>
            <Text style={styles.textStyle}>Total amount of selected tests</Text>
            <Text style={styles.textStyle}>48 tests</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomWidth: 0.8,
              borderBottomColor: COLORS.textInputBorder,
            }}>
            <Text style={styles.textStyle}>Cost for the Check Up</Text>
            <Text style={styles.textStyle}>Taka 4500/=</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity
            onPress={BookingAlert}
            style={{
              marginHorizontal: normalization(15),
              backgroundColor: COLORS.deepBlueHeader,
              padding: normalization(8),
              alignItems: 'center',
              borderRadius: 8,
            }}>
            <Text
              style={{color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}>
              Book
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <VirtualizedView>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.textlightBlue,
                marginVertical: normalization(10),
              }}>
              This Check Up includes following tests:
            </Text>
            <FlatList data={testData} renderItem={renderItem} />
          </VirtualizedView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textDeepBlue,
    marginVertical: normalization(8),
  },
  listContainer: {
    width: COLORS.Width,
    flex: 1,
    elevation: 6,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: COLORS.white,
    marginTop: normalization(20),
    padding: normalization(20),
  },
  checkbox: {
    alignSelf: 'center',
  },
});
