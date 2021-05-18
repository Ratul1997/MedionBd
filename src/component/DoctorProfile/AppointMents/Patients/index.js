import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
// Colors and Dynamic Screen
import normalization from '../../../../constants/normalization';
import COLORS from '../../../../constants/COLORS';
// Vector Icons
import IonIcons from 'react-native-vector-icons/Ionicons';

import ModalComponent from '../../../../common/ModalComponent';
import CalenderContainer from '../../../Services/AppointMent/VideoCallAppointMent/CalenderContainer';
import convertDate from '../../../../helpers/convertDate';

export default function Patients(props) {
  const {data} = props;
  /**
   * States-
   * modalVisible: for showing modal
   * date: for getting Date
   */
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState('');

  /**
   * @name: onPressCloseModal
   * @function: setting Modal False
   */
  const onPressCloseModal = () => {
    setModalVisible(false);
  };
  /**
   * @name: onPressOpenModal
   * @function: setting Modal True
   */
  const onPressOpenModal = () => {
    setModalVisible(true);
  };

  const onDateChange = date => {
    const newDate = convertDate.convertDateToString(date);
    setDate(newDate);
    onPressCloseModal();
    console.log(newDate);
  };
  //render Patient List
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          width: '90%',
          height: normalization(80),
          backgroundColor: COLORS.prescription_Notselected,
          alignSelf: 'center',
          marginVertical: normalization(5),
          borderColor: COLORS.slideItemBorder, // if you need
          borderWidth: 1,
          overflow: 'hidden',
          shadowColor: COLORS.slideItemBorder,
          shadowRadius: 10,
          shadowOpacity: 1,
          borderRadius: 10,
          padding: normalization(10),
          flexDirection: 'row',
        }}>
        <View style={{width: '20%', alignSelf: 'center'}}>
          <Image
            source={item.image_path}
            style={{
              height: normalization(50),
              width: normalization(50),
              borderRadius: 30,
            }}
          />
        </View>
        <View style={{width: '80%', alignSelf: 'center'}}>
          <Text style={{fontSize: normalization(15), fontWeight: 'bold'}}>
            {item.patientName}
          </Text>
          <Text>{item.description}</Text>
          <Text style={{fontSize: normalization(10)}}>Date: {item.date}</Text>
          <Text style={{fontSize: normalization(10)}}>Time: {item.time}</Text>
        </View>
        {item.virtual_chamber && (
          <TouchableOpacity
            style={{
              position: 'absolute',
              backgroundColor: COLORS.Prescription_button,
              right: 5,
              bottom: 10,
              padding: normalization(2),
            }}>
            <Text style={{color: 'white', fontSize: normalization(10)}}>
              Virtual Chamber
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  //render Main
  return (
    <View style={{flex: 1}}>
      <ModalComponent
        onPressCloseModal={onPressCloseModal}
        modalVisible={modalVisible}>
        <CalenderContainer onDateChange={onDateChange} headerHide={true} />
      </ModalComponent>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          overflow: 'hidden',
          marginHorizontal: normalization(10),
          marginVertical: normalization(10),
        }}>
        {/* Service Name */}
        <Text
          style={{
            fontSize: normalization(18),
            fontWeight: 'bold',
            fontFamily: COLORS.font_family,
            marginEnd: normalization(5),
          }}>
          Sort By
        </Text>

        {/* Straigth Line View */}
        <View
          style={{
            alignSelf: 'center',
            marginEnd: normalization(10),
            borderWidth: 0.5,
            borderColor: COLORS.black,
            width: '76%',
            height: 0,
          }}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={[styles.dateContainer]}>
          <Text> {date ? date : 'Select Date'} </Text>
          <IonIcons
            name="calendar-outline"
            size={normalization(15)}
            color={COLORS.Prescription_button}
            onPress={onPressOpenModal}
          />
        </View>
        <View style={[styles.dateContainer]}>
          <Text> Select Time </Text>
          <IonIcons
            name="time"
            size={normalization(16)}
            color={COLORS.Prescription_button}
          />
        </View>
        <IonIcons
          name="search-circle"
          size={normalization(25)}
          color={COLORS.Prescription_button}
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            marginRight: normalization(10),
          }}
        />
      </View>

      {/* PatientFlatList */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-around',
    height: normalization(30),
    borderColor: COLORS.textlightBlue,
    borderWidth: 1,
    alignItems: 'center',
    marginVertical: normalization(10),
    marginHorizontal: normalization(10),
    borderRadius: 10,
  },
});
