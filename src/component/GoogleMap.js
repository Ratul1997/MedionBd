import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import ActivityIndicatorComponent from '../common/ActivityIndicatorComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import normalization from '../constants/normalization';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {BASE_URL_FINAL, BASE_URL} from '@env';
import axios from 'axios';
import COLORS from '../constants/COLORS';

export default function GoogleMap({navigation, route}) {
  const {title, item} = route.params;
  const initialState = {
    latitude: null,
    longitude: null,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0122,
  };
  const [location, setLocation] = useState(initialState);
  const [chembers, setChembers] = useState([]);
  const [chamber, setChamber] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  const geo = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        const {latitude, longitude} = position.coords;
        setLocation({...location, longitude, latitude});
      },
      error => alert(error.message),
      {timeout: 20000, maximumAge: 1000},
    );
  };
  const getData = () => {
    const url = BASE_URL_FINAL + 'allVirtualChembers';
    axios
      .get(url)
      .then(res => {
        console.log(res.data);
        setChembers(res.data);
        geo();
      })
      .catch(err => console.log(err));
  };
  //   console.log(location);
  const onRegionChange = region => {
    console.log(region);
  };
  const onCallOut = item => () => {
    console.log(item);
    setChamber(item);
  };
  const onProceed = () => {
    navigation.navigate('NormalAppointment', {
      item: item,
      title: 'Online',
      virtualChamberId: chamber.idvirtualchamber,
    });
  };
  return location.latitude ? (
    <View>
      <MapView
        style={{height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={location}
        showsUserLocation
        onRegionChangeComplete={onRegionChange}>
        {chembers.map((item, index) => {
          return (
            <Marker
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              onPress={onCallOut(item)}
              key={index}>
              <Callout>
                <View style={{minWidth: normalization(100)}}>
                  <Text style={{fontSize: normalization(15)}}>
                    {item.chamber_name}
                  </Text>
                  <Text>{item.chamber_address}</Text>
                  <Text>
                    {item.startTime} - {item.endTime}
                  </Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
      {chamber && (
        <View
          style={{
            position: 'absolute',
            height: normalization(150),
            width: '80%',
            bottom: 10,
            backgroundColor: COLORS.DoctorAppnt_Background,
            alignSelf: 'center',
            elevation: 10,
            padding: normalization(20),
          }}>
          <Text style={{fontSize: normalization(18)}}>
            {chamber.chamber_name}
          </Text>

          <Text style={{fontSize: normalization(13)}}>
            Address: {chamber.chamber_address}
          </Text>
          <Text style={{fontSize: normalization(13)}}>
            Doctor Name: {chamber.doctor_name}
          </Text>
          <Text style={{fontSize: normalization(13)}}>
            Qualification: {chamber.doctor_qualification}
          </Text>
          <Text style={{fontSize: normalization(13)}}>
            Available Time: {chamber.startTime} - {chamber.endTime}
          </Text>
          <Button title="Proceed" onPress={onProceed} />
        </View>
      )}
    </View>
  ) : (
    <ActivityIndicatorComponent size="large" />
  );
}
