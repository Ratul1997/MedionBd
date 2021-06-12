/** 
 name: DoctorList
 function: This is a component for DoctorList
**/

import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Dimensions, FlatList} from 'react-native';
//Colors And Dynamic Screen
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';
//Vector Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
//DummyData of DoctorLists
import DoctorLists from '../../../helpers/DummyData/DoctorLists';

import DoctorSearch from './DoctorSearch';
import AllPurposeHeader from '../../../common/AllPurposeHeader';
import VirtualizedView from '../../../common/VirtualizedView';
import DoctorItem from './DoctorItem';
import axios from 'axios';
import {BASE_URL, BASE_URL_FINAL} from '@env';
import ActivityIndicatorComponent from '../../../common/ActivityIndicatorComponent';
import ModalComponent from '../../../common/ModalComponent';
import Filter from './Filter';

export default function DoctorList(props) {
  /*
  Getting properties from navigation

  variables-
  navigation: navigation properties
  */
  const {navigation, route} = props;
  const {title} = route.params;

  console.log(title);

  /**
   * States-
   * doctorList : lists of doctor (Array)
   */
  const [doctorList, setDoctorList] = useState([]);
  const [page, setPage] = useState(1);
  const [isDataFetching, setIsDataFetching] = useState(true);
  const [isInitialDataFetching, setIsInitialDataFetching] = useState(true);
  const [speciality, setSpeciality] = useState('');
  const [fee, setFee] = useState('');
  const [isConsultationFee, setIsConsultationFee] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  /**
   * useEffect for loading initial doctor data
   */
  useEffect(() => {
    loadData();
  }, []);

  /**
   * @name: loadData
   * @function: loading new Data
   */
  const loadData = async () => {
    try {
      const urlend = title === 'Online' ? 'online-doctor-list' : 'doctor-list';
      const url = BASE_URL_FINAL + urlend;
      console.log(url);
      const doctorData = await axios.post(url, {
        page: page,
      });
      const {doctors, page_number} = doctorData.data;
      console.log(doctors);
      setDoctorList([...doctorList, ...doctorData.data.doctors]);
      setPage(page + 1);
      setIsInitialDataFetching(false);
      setIsDataFetching(false);
    } catch (err) {
      console.log(err);
      setIsInitialDataFetching(false);
      setIsDataFetching(false);
    }
  };

  /**
   * @name: filterDoctor
   * @function: filtering Doctor by Category
   */

  const filterDoctor = (value, key) => {
    const {label} = value;
    console.log(label);

    if (key === 1) setSpeciality(label);
    if (key === 2) setFee(label);
    if (key === 3) setIsConsultationFee(true);
    setPage(1);
    loadData();
  };

  /**
   * @name: applyFilter
   * @function: applying filter
   */

  const applyFilter = () => {
    toggleModal();
  };

  /**
   * @name:loadMore
   * @function: load more doctor List
   */

  const loadMore = () => {
    setIsDataFetching(true);
    loadData();
  };

  /**
   * @name: toggle Modal
   * @function: set Modal true or false
   */
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  /**
   * @name: onBackNavigate
   * @function: navigate Back
   */
  const onBackNavigate = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <ModalComponent color="#acccf5" closeCross modalVisible={modalVisible}>
        <Filter
          onCloseModal={toggleModal}
          filterDoctor={filterDoctor}
          applyFilter={applyFilter}
        />
      </ModalComponent>
      <AllPurposeHeader
        title="Doctors"
        onBackNavigate={onBackNavigate}
        filter
      />
      {/**search part */}
      <DoctorSearch />

      {isInitialDataFetching ? (
        <ActivityIndicatorComponent size="large" />
      ) : (
        <FlatList
          data={doctorList}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          ListHeaderComponent={() => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: COLORS.textDeepBlue,
                  fontWeight: 'bold',
                  fontSize: normalization(15),
                }}>
                All Doctors
              </Text>
              <Text
                onPress={toggleModal}
                style={{
                  color: COLORS.textlightBlue,
                  fontWeight: 'bold',
                  fontSize: normalization(15),
                }}>
                filter
              </Text>
            </View>
          )}
          renderItem={({item, index}) => (
            <DoctorItem
              item={item}
              index={index}
              navigation={navigation}
              title={title}
            />
          )}
          ListFooterComponent={() =>
            isDataFetching ? (
              <ActivityIndicatorComponent size="small" />
            ) : (
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: normalization(5),
                }}
                onPress={loadMore}>
                <Text style={{color: COLORS.deepBlueHeader}}>Load More</Text>
              </TouchableOpacity>
            )
          }
        />
      )}
    </View>
  );
}
