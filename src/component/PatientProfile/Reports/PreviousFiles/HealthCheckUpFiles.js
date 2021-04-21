/** 
 name: HealthCheckUpFiles
 function: This is a  component for HealthCheckUpFiles
**/

import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import COLORS from '../../../../constants/COLORS';
import normalization from '../../../../constants/normalization';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import ReportsData from '../../../../helpers/DummyData/ReportsData';
export default function HealthCheckUpFiles() {
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: normalization(20),
          paddingVertical: normalization(10),
          borderBottomWidth: 0.5,
          borderBottomColor: '#B4D3FC',
        }}>
        {item.fileType === 'pdf' ? (
          <AntDesign
            name="pdffile1"
            size={normalization(25)}
            color={COLORS.textGrey}
          />
        ) : (
          <Feather
            name="image"
            size={normalization(25)}
            color={COLORS.textGrey}
          />
        )}
        <View style={{marginLeft: normalization(20)}}>
          <Text style={{fontSize: normalization(15)}}>{item.fileName}</Text>
          <Text style={{color: COLORS.textGrey}}>{item.date}</Text>
        </View>
        <TouchableOpacity
          style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
          <Fontisto
            style={{marginRight: normalization(15)}}
            name="preview"
            size={normalization(20)}
            color={COLORS.textGrey}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'flex-end', justifyContent: 'center'}}>
          <AntDesign
            name="closecircle"
            size={normalization(20)}
            color={COLORS.textGrey}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <View
        style={{
          marginLeft: '75%',
          marginTop: 5,
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

      <FlatList
        data={ReportsData}
        renderItem={renderItem}
        style={{
          width: '95%',
          backgroundColor: COLORS.white,
          elevation: 8,
          justifyContent: 'center',
          alignSelf: 'center',
          paddingVertical: normalization(10),
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
      />
    </>
  );
}
