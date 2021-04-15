import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import normalization from '../../../constants/normalization';
import COLORS from '../../../constants/COLORS';
import VideoCallingItem from './VideoCallingItem';

export default function VideoCallingSchedule(props) {
  const {videoCallingInfo} = props;

  const [scheduleList, setScheduleList] = useState(false);
  const renderItem = ({item}) => {
    const backgroundColor = item.key % 2 === 0 ? '#BCE5AB' : '#B4D3FC';
    if (!scheduleList && item.key < 4) {
      return <VideoCallingItem item={item} backgroundColor={backgroundColor} />;
    } else if (scheduleList) {
      return <VideoCallingItem item={item} backgroundColor={backgroundColor} />;
    }
  };
  return (
    <View style={{marginVertical: normalization(15)}}>
      <Text
        style={{
          fontSize: normalization(16),
          fontWeight: 'bold',
          marginLeft: normalization(20),
        }}>
        Video Calling Schedule
      </Text>
      <FlatList
        data={videoCallingInfo}
        renderItem={renderItem}
        listKey={(item, index) => 'D' + index.toString()}
      />
      {scheduleList ? (
        <Text
          onPress={() => setScheduleList(!scheduleList)}
          style={{
            alignSelf: 'center',
            fontSize: normalization(14),
            fontWeight: 'bold',
            color: COLORS.textDeepBlue,
          }}>
          Show less
        </Text>
      ) : (
        <Text
          onPress={() => setScheduleList(!scheduleList)}
          style={{
            alignSelf: 'center',
            fontSize: normalization(14),
            fontWeight: 'bold',
            color: COLORS.textDeepBlue,
          }}>
          See all
        </Text>
      )}
    </View>
  );
}
