import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

export default function ActivityIndicatorComponent({size}) {
  return (
    <View>
      <ActivityIndicator size={size} color="#0000ff" />
    </View>
  );
}
