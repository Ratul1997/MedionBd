/** 
 name: Chambers
 function: This is a  component for Chambers
**/
import React from 'react';
import {View, Text, FlatList} from 'react-native';

//Colors And Dynamic Screen
import normalization from '../../../constants/normalization';
import COLORS from '../../../constants/COLORS';

export default function Chambers(props) {
  /*
  Getting properties from navigation

  variables-
  chamberData: chambers list of a doctor (Array of Object)
  */
  const {chamberData} = props;

  /**
   * @name: renderItem
   * @function: rendering the chamber Data
   */

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          padding: normalization(8),
          paddingHorizontal: normalization(15),
          marginRight: normalization(15),
          marginTop: normalization(5),
          backgroundColor: COLORS.white,
          borderColor: COLORS.textInputBorder,
          borderWidth: 3,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: normalization(12)}}>{item.chamber_name}</Text>
        <Text style={{fontSize: normalization(10)}}>
          {item.chamber_address}
        </Text>
      </View>
    );
  };
  return (
    <View style={{marginVertical: normalization(5)}}>
      <Text
        style={{
          fontSize: normalization(16),
          fontWeight: 'bold',
          marginLeft: normalization(20),
        }}>
        Chambers
      </Text>
      <FlatList
        style={{marginRight: normalization(20), marginLeft: normalization(20)}}
        data={chamberData}
        // horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        listKey={(item, index) => 'D' + index.toString()}
        keyExtractor={item => item.idchambers}
      />
    </View>
  );
}
