import * as React from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import COLORS from '../../../../constants/COLORS';
import normalization from '../../../../constants/normalization';

export default function InputField({text, iconName}) {
  return (
    <View
      style={{
        width: Dimensions.get('window').width * 0.9,
        height: normalization(30),
        backgroundColor: '#fff',
        elevation: 2,
        borderRadius: 10,
        marginTop: normalization(8),
        marginBottom: normalization(5),
        alignItems: 'center',
        flexDirection: 'row',
        paddingStart: normalization(10),
      }}>
      <EvilIcons name={iconName} size={25} color="#063777" onPress={() => {}} />
      <TextInput
        style={{padding: normalization(5), fontSize: 16}}
        placeholder={text}
      />
    </View>
  );
}
