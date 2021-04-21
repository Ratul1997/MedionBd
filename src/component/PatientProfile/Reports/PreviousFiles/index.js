/** 
 name: PreviousFiles
 function: This is a  component for PreviousFiles
**/
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import normalization from '../../../../constants/normalization';
import COLORS from '../../../../constants/COLORS';
import HealthCheckUpFiles from './HealthCheckUpFiles';
import UploadedFiles from './UploadedFiles';

const option = [
  {title: 'Uploads', key: '1'},
  {title: 'Health CheckUp', key: '2'},
];

export default function PreviousFiles() {
  const [selected, setSelected] = useState('1');
  const renderItem3 = ({item}) => {
    const backgroundColor =
      selected === item.key ? COLORS.deepBlueHeader : null;
    const color = selected === item.key ? COLORS.white : COLORS.deepBlueHeader;
    return (
      <TouchableOpacity
        onPress={() => setSelected(item.key)}
        style={{
          width: COLORS.Width * 0.48,
          borderColor: COLORS.deepBlueHeader,
          borderWidth: 2,
          alignItems: 'center',
          margin: normalization(5),
          borderRadius: 5,
          backgroundColor,
          marginTop: normalization(20),
          paddingVertical: normalization(8),
        }}>
        <Text style={{color}}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          overflow: 'hidden',
          paddingHorizontal: normalization(10),
        }}>
        <Text
          style={{
            color: COLORS.textDeepBlue,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Previous Files
        </Text>
        <View
          style={{
            alignSelf: 'center',
            marginHorizontal: normalization(5),
            borderWidth: 0.5,
            borderColor: COLORS.black,
            flex: 1,
            height: 0,
          }}
        />
      </View>
      <View>
        <FlatList data={option} horizontal={true} renderItem={renderItem3} />
      </View>
      {selected === '1' ? <UploadedFiles/> : <HealthCheckUpFiles />}
    </>
  );
}
