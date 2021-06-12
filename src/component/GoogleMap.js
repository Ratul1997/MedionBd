import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import ActivityIndicatorComponent from '../common/ActivityIndicatorComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import normalization from '../constants/normalization';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export default function GoogleMap() {
  const initialState = {
    latitude: null,
    longitude: null,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0122,
  };
  const [location, setLocation] = useState(initialState);
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        const {latitude, longitude} = position.coords;
        setLocation({...location, longitude, latitude});
      },
      error => alert(error.message),
      {timeout: 20000, maximumAge: 1000},
    );
  }, []);
  //   console.log(location);
  const onRegionChange = region => {
    console.log(region);
  };
  return location.latitude ? (
    <View>
      <MapView
        style={{height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={location}
        // showsUserLocation
        onRegionChangeComplete={onRegionChange}>
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          key={1}
        />
        {/* <Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          key={2}
        /> */}
      </MapView>
      {/* <View
        style={{
          left: '50%',
          marginLeft: -13,
          marginTop: -28,
          position: 'absolute',
          top: '50%',
        }}>
        <FontAwesome name="map-marker" color="red" size={normalization(30)} />
      </View> */}
    </View>
  ) : (
    <ActivityIndicatorComponent size="large" />
  );
}
