/**
 * @format
 * @flow strict-local
 */
import React, {Component, useState} from 'react';
import {
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Modal,
  Button,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import RtcEngine, {
  RtcLocalView,
  RtcRemoteView,
  VideoRenderMode,
} from 'react-native-agora';

import {AGORA_API_ID} from "@env"

import requestCameraAndAudioPermission from '../../common/Permission';
import axios from 'axios';

const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
export default class VideoCall extends Component {
  _engine = RtcEngine;

  constructor(props) {
    super(props);
    this.state = {
      appId: AGORA_API_ID,
      token: '',
      channelName: '',
      uid: 0,
      joinSucceed: false,
      peerIds: [],
      isVisible: true,
      tmpuid: '',
      enabledAudio: false,
      enabledVideo: true,
      isLoading: false,
    };
    if (Platform.OS === 'android') {
      // Request required permissions from Android
      requestCameraAndAudioPermission()
        .then(() => {
          console.log('requested!');
        })
        .catch(err => console.log(err));
    }
  }

  componentDidMount() {
    this.init();
  }

  /**
   * @name init
   * @description Function to initialize the Rtc Engine, attach event listeners and actions
   */
  init = async () => {
    const {appId} = this.state;
    this._engine = await RtcEngine.create(appId);
    await this._engine.enableVideo();

    this._engine.addListener('Warning', warn => {
      console.log('Warning', warn);
    });

    this._engine.addListener('Error', err => {
      console.log('Error', err);
    });

    this._engine.addListener('UserJoined', (uid, elapsed) => {
      console.log('UserJoined', uid, elapsed);
      // Get current peer IDs
      const {peerIds} = this.state;
      // If new user
      if (peerIds.indexOf(uid) === -1) {
        this.setState({
          // Add peer ID to state array
          peerIds: [...peerIds, uid],
        });
      }
    });

    this._engine.addListener('UserOffline', (uid, reason) => {
      console.log('UserOffline', uid, reason);
      const {peerIds} = this.state;
      this.setState({
        // Remove peer ID from state array
        peerIds: peerIds.filter(id => id !== uid),
      });
    });

    // If Local user joins RTC channel
    this._engine.addListener('JoinChannelSuccess', (channel, uid, elapsed) => {
      console.log('JoinChannelSuccess', channel, uid, elapsed);
      // Set state variable to true
      this.setState({
        joinSucceed: true,
      });
    });
  };

  /**
   * @name startCall
   * @description Function to start the call
   */
  startCall = async () => {
    // Join Channel using null token and channel name
    console.log(this.state.token, this.state.channelName);
    await this._engine?.joinChannel(
      this.state.token,
      this.state.channelName,
      null,
      0,
    );
  };

  getAuthKey = () => {
    console.log('preessed');
    this.setState({isLoading: true});
    axios
      .post('https://apimedion.medionbd.com/rtcServer', {
        channelName: this.state.channelName.toLowerCase(),
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          token: res.data.tokens,
          isVisible: false,
          isLoading: false,
        });
      })
      .catch(err => this.setState({isLoading: false, channelName: ''}));
  };

  /**
   * @name endCall
   * @description Function to end the call
   */
  endCall = async () => {
    await this._engine?.leaveChannel();
    this.setState({peerIds: [], joinSucceed: false});
  };

  muteCall = async () => {
    this.setState({enabledAudio: !this.state.enabledAudio});
    await this._engine?.enableLocalAudio(this.state.enabledAudio);
  };

  disableVideo = async () => {
    this.setState({enabledVideo: !this.state.enabledVideo});
    await this._engine?.enableLocalVideo(this.state.enabledVideo);
  };

  disableVideo2 = async () => {
    this.setState({enabledVideo: false});
    await this._engine?.disableVideo();
  };
  enableVideo2 = async () => {
    this.setState({enabledVideo: true});
    await this._engine?.enableVideo();
  };

  render() {
    return (
      <View style={styles.max}>
        <Modal
          animationType={'fade'}
          visible={this.state.isVisible}
          transparent={true}
          presentationStyle="overFullScreen"
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          {/* Background of Modal */}
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            {/*All views of Modal*/}

            <View
              style={{
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: 'white',
                height: 200,
                width: '80%',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#fff',
                marginTop: 80,
                marginVertical: 40,
              }}>
              {this.state.isLoading ? (
                <ActivityIndicator size="small" color="#0000ff" />
              ) : (
                <>
                  <TextInput
                    style={{
                      width: '80%',
                      borderColor: 'gray',
                      borderWidth: 1,
                      textAlignVertical: 'top',
                    }}
                    value={this.state.channelName}
                    autoCorrect={false}
                    onChangeText={text =>
                      this.setState({channelName: text.toLowerCase()})
                    }
                    multiline
                  />
                  <Button title="Channel Name" onPress={this.getAuthKey} />
                </>
              )}
            </View>
          </View>
        </Modal>
        <View style={styles.max}>
          {this.state.joinSucceed ? null : (
            <>
              <Text>Channel Name: {this.state.channelName}</Text>
              <Button
                title="Edit"
                onPress={() => this.setState({isVisible: true})}></Button>
            </>
          )}
          <View style={styles.buttonHolder}>
            {this.state.joinSucceed ? null : (
              <TouchableOpacity onPress={this.startCall} style={styles.button}>
                <Text style={styles.buttonText}> Start Call </Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={this.muteCall} style={styles.button}>
              <Text style={styles.buttonText}>
                {' '}
                {this.state.enabledAudio ? 'Mute' : 'UnMute'}{' '}
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={
                this.state.enabledVideo ? this.disableVideo2 : this.enableVideo2
              }
              style={styles.button}>
              <Text style={styles.buttonText}>
                {' '}
                {!this.state.enabledVideo ? 'Disable' : 'Show'}{' '}
              </Text>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={this.endCall} style={styles.button}>
              <Text style={styles.buttonText}> End Call </Text>
            </TouchableOpacity>
          </View>
          {this._renderVideos()}
        </View>
      </View>
    );
  }

  _renderVideos = () => {
    const {joinSucceed} = this.state;
    return joinSucceed ? (
      <View style={styles.fullView}>
        <RtcLocalView.SurfaceView
          style={styles.max}
          channelId={this.state.channelName}
          renderMode={VideoRenderMode.Hidden}
        />
        {this._renderRemoteVideos()}
      </View>
    ) : null;
  };

  _renderRemoteVideos = () => {
    const {peerIds} = this.state;
    return (
      <ScrollView
        style={styles.remoteContainer}
        contentContainerStyle={{paddingHorizontal: 2.5}}
        horizontal={true}>
        {peerIds.map((value, key) => {
          return (
            <RtcRemoteView.TextureView
              style={styles.remote}
              uid={value}
              key={key}
              channelId={this.state.channelName}
              renderMode={VideoRenderMode.Hidden}
              zOrderMediaOverlay={true}
            />
          );
        })}
      </ScrollView>
    );
  };
}

const styles = StyleSheet.create({
  max: {
    flex: 1,
  },
  buttonHolder: {
    height: 100,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#0093E9',
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
  },
  fullView: {
    width: dimensions.width,
    height: dimensions.height - 100,
  },
  remoteContainer: {
    width: '100%',
    height: 150,
    position: 'absolute',
    top: 5,
  },
  remote: {
    width: 150,
    height: 150,
    marginHorizontal: 2.5,
  },
  noUserText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#0093E9',
  },
});
