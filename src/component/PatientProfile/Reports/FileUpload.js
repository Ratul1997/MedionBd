/** 
 name: FileUpload
 function: This is a  component for FileUpload
**/
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
//Colors And Dynamic Screen
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';
//Vector Icons
import Feather from 'react-native-vector-icons/Feather';
import DocumentPicker from 'react-native-document-picker';

import RNFetchBlob from 'rn-fetch-blob';
import axios from 'axios';
import FilePickerManager from 'react-native-file-picker';
import ModalComponent from '../../../common/ModalComponent';
import ActivityIndicatorComponent from '../../../common/ActivityIndicatorComponent';
import {Server} from 'http';
import {BASE_URL_FINAL} from '@env';

export default function FileUpload() {
  /**
   * states-
   * file - selectedFiles
   */
  const [selectedFiles, setSelectedFiles] = useState();
  const [singleFile, setSingleFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [fileUrl, setFileUrl] = useState();
  /**
   * @name: onPressCloseModal
   * @function: setting Modal False
   */
  const onPressCloseModal = () => {
    setModalVisible(false);
  };

  /**
   * @name: selectFile
   * @function: select a file to upload
   */

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.allFiles],
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      // Printing the log realted to the file

      console.log('res : ' + JSON.stringify(res));

      // Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const upload = async () => {
    console.log('click');
    // Check if any file is selected or not
    setModalVisible(true);
    setIsLoading(true);
    if (singleFile != null) {
      // If file selected then create FormData
      const fileToUpload = singleFile;
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file_attachment', fileToUpload);
      // Please change file upload URL
      try {
        let res = await fetch('https://videoallapi.medionbd.com/upload.php', {
          method: 'post',
          body: data,
          headers: {
            'Content-Type': 'multipart/form-data; ',
          },
        });
        let responseJson = await res.json();
        if (responseJson.status == 1) {
          console.log(responseJson);
          setFileUrl(responseJson.data[0]);
          alert('Upload Successful');
          setIsLoading(false);
          setModalVisible(false);
        } else {
          setIsLoading(false);
          setModalVisible(false);
          alert(responseJson.msg);
        }
      } catch (error) {
        alert('Some Thing Went Wrong');
        setIsLoading(false);

        setModalVisible(false);
      }
    } else {
      // If no file selected the show alert
      alert('Please Select File first');
    }
  };

  const getFileExtention = fileUrl => {
    // To get the file extension
    return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
  };
  const download = () => {
    // Get today's date to add the time suffix in filename

    let date = new Date();
    // File URL which we want to download
    let FILE_URL = BASE_URL_FINAL + fileUrl;
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
  return (
    <>
      <ModalComponent
        modalVisible={modalVisible}
        onPressCloseModal={onPressCloseModal}
        closeCross={isLoading ? true : false}>
        <ActivityIndicatorComponent size="large" />
      </ModalComponent>
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
            onPress={upload}
          />
          <Feather
            name="download"
            size={30}
            style={{
              backgroundColor: COLORS.white,
              elevation: 6,
              padding: normalization(10),
              borderRadius: 50,
              marginBottom: normalization(10),
            }}
            onPress={download}
          />
          <TouchableOpacity
            style={{
              padding: normalization(8),
              paddingHorizontal: normalization(20),
              backgroundColor: COLORS.deepBlueHeader,
              borderRadius: normalization(10),
            }}
            onPress={selectFile}>
            <Text style={{color: COLORS.textWhite, fontSize: 16}}>
              Choose File
            </Text>
          </TouchableOpacity>
          <Text style={{color: COLORS.textGrey}}>
            (File Name, e.g. 123.jpg)
          </Text>
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
    </>
  );
}
