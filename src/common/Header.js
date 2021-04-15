import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import COLORS from '../constants/COLORS';
import normalization from '../constants/normalization';

export default function Header({navigation}) {
  const [selectedValue, setSelectedValue] = useState('English');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{marginLeft: normalization(15)}}
        onPress={() => navigation.openDrawer()}>
        <Entypo
          name="menu"
          size={normalization(30)}
          color={COLORS.HPmenuIcon}
        />
      </TouchableOpacity>

      <Image
        style={{marginBottom: normalization(10)}}
        source={require('../images/asset-1.png')}
      />
      <TouchableOpacity style={styles.language}>
        <Text style={{color: COLORS.HPmenuIcon}}>{selectedValue}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 8,
    width: '100%',
    backgroundColor: COLORS.white,
  },
  language: {
    marginRight: normalization(15),
    borderWidth: 1,
    borderRadius: 50,
    paddingStart: normalization(10),
    paddingEnd: normalization(10),
    borderColor: COLORS.HPmenuIcon,
  },
});
