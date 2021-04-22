/** 
 name: FileUpload
 function: This is a  component for FileUpload
**/
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
//Colors And Dynamic Screen
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';
//Vector Icons
import Feather from 'react-native-vector-icons/Feather';
export default function FileUpload() {
  return (
    <View
      style={{
        width: COLORS.Width * 0.9,
        backgroundColor: COLORS.white,
        elevation: 4,
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: normalization(15),
        padding: normalization(15),
      }}>
      <View
        style={{
          borderColor: COLORS.textInputBorder,
          borderWidth: 0.4,
          borderRadius: 15,
          alignItems: 'center',
          alignSelf: 'center',
          padding: normalization(15),
          width: COLORS.Width * 0.8,
        }}>
        <Feather
          name="upload"
          size={30}
          style={{
            backgroundColor: COLORS.white,
            elevation: 6,
            padding: normalization(10),
            borderRadius: 50,
            marginBottom: normalization(10),
          }}
        />
        <TouchableOpacity
          style={{
            padding: normalization(8),
            paddingHorizontal: normalization(20),
            backgroundColor: COLORS.deepBlueHeader,
            borderRadius: normalization(10),
          }}>
          <Text style={{color: COLORS.textWhite, fontSize: 16}}>
            Choose File
          </Text>
        </TouchableOpacity>
        <Text style={{color: COLORS.textGrey}}>(File Name, e.g. 123.jpg)</Text>
      </View>
      <Text
        style={{
          color: COLORS.textGrey,
          fontSize: 16,
          fontWeight: 'bold',
          marginTop: normalization(15),
          marginLeft: normalization(15),
        }}>
        Send to:{' '}
      </Text>
      <TextInput
        placeholder="Enter Doctor's Name"
        style={{
          fontSize: normalization(14),
          padding: normalization(8),
          borderWidth: 2,
          borderRadius: 10,
          borderColor: COLORS.textInputBorder,
          margin: normalization(10),
        }}
      />
      <TouchableOpacity
        style={{
          padding: normalization(10),
          marginHorizontal: normalization(10),
          backgroundColor: COLORS.deepBlueHeader,
          borderRadius: normalization(10),
        }}>
        <Text
          style={{
            color: COLORS.textWhite,
            fontSize: 17,
            alignSelf: 'center',
          }}>
          Send
        </Text>
      </TouchableOpacity>
    </View>
  );
}
