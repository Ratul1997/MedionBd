/** 
 name: UppCommingVOAppointMents
 function: This is a  component for UppCommingVOAppointMents
**/

import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';
import {
  convertNumberToDay,
  checkTodayHasAnyAppointMent,
  convertStringToDate,
  checkDateIsPrevious,
} from '../../../constants/calcuationdata';
import IonIcons from 'react-native-vector-icons/Ionicons';

import RNFetchBlob from 'rn-fetch-blob';
export default function UppCommingVOAppointMents(props) {
  /*
  Getting properties from navigation

  variables-
  appointmentSchedule: schedule of appointment Data (Array of Objects)
  */
  const {appointmentSchedule, cross, getLink} = props;
  const getFileExtention = fileUrl => {
    // To get the file extension
    return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
  };

  //renderItem
  const renderItem = ({item}) => {
    const date = convertStringToDate(item.selectedDay);
    const day = (date.getDay() + 1) % 7;

    const borderWidth = checkTodayHasAnyAppointMent(day) ? 1 : null;
    const borderColor = checkTodayHasAnyAppointMent(day)
      ? 'red'
      : COLORS.deepBlueHeader;

    const download = () => {
      // Get today's date to add the time suffix in filename

      let date = new Date();
      // File URL which we want to download
      let FILE_URL = item.url;
      console.log(FILE_URL);
      // Function to get extention of the file url
      let file_ext = getFileExtention(FILE_URL);

      file_ext = '.' + file_ext[0];

      // config: To get response by passing the downloading related options
      // fs: Root directory path to download
      const {config, fs} = RNFetchBlob;
      let RootDir = fs.dirs.PictureDir;
      let options = {
        fileCache: true,
        addAndroidDownloads: {
          path:
            RootDir +
            '/file_' +
            Math.floor(date.getTime() + date.getSeconds() / 2) +
            file_ext,
          description: 'downloading file...',
          notification: true,
          // useDownloadManager works with Android only
          useDownloadManager: true,
        },
      };
      config(options)
        .fetch('GET', FILE_URL)
        .then(res => {
          // Alert after successful downloading
          console.log('res -> ', JSON.stringify(res));
          alert('File Downloaded Successfully.');
        });
    };
    if (checkDateIsPrevious(date)) {
      return (
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: normalization(15),
            marginTop: normalization(15),
            paddingBottom: normalization(10),
            borderBottomWidth: 0.5,
            borderBottomColor: '#B4D3FC',
          }}>
          <View
            style={{
              flex: 0.13,
              marginRight: normalization(5),
              paddingHorizontal: normalization(15),
              paddingVertical: normalization(10),
              borderWidth: 0.8,
              borderColor,
              borderRadius: 10,
            }}>
            <Text
              style={{fontSize: normalization(16), color: COLORS.textDeepBlue}}>
              {date.getDate()}
            </Text>
            <Text style={{fontSize: normalization(13)}}>
              {convertNumberToDay(day)}
            </Text>
            <Text style={{fontSize: normalization(9)}}>
              {date.getFullYear()}
            </Text>
          </View>

          <View
            style={{
              flex: 0.87,
              padding: normalization(10),
              backgroundColor: '#F0F6FE',
              borderWidth: 0.8,
              borderColor,
              borderRadius: 10,
              paddingHorizontal: normalization(15),
            }}>
            <Text style={{fontSize: 18}}>{item.doctor_name}</Text>
            <Text>{item.doctor_speciality}</Text>
            <View style={{justifyContent: 'space-between'}}>
              <Text>Time: {item.preferredTime}</Text>
              <Text>{item.chamber_name}</Text>
            </View>
          </View>
          {getLink && (
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 10,
                top: 32,
                backgroundColor: COLORS.deepBlueHeader,
                height: normalization(18),
                width: normalization(18),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 18,
              }}
              onPress={download}>
              <IonIcons name="file-tray-full" color="white" />
            </TouchableOpacity>
          )}
        </View>
      );
    }
  };

  return (
    <>
      {!cross && (
        <Text
          style={{
            color: COLORS.textDeepBlue,
            fontSize: 20,
            fontWeight: 'bold',
            margin: normalization(15),
          }}>
          Upcoming Appointment
        </Text>
      )}

      <FlatList
        data={appointmentSchedule}
        renderItem={renderItem}
        style={{
          flex: 1,
          width: COLORS.Width,
          backgroundColor: COLORS.white,
          elevation: 6,
          paddingTop: normalization(10),
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
        listKey={(item, index) => 'D' + index.toString()}
        keyExtractor={(item, index) => 'D' + index.toString()}
      />
    </>
  );
}
