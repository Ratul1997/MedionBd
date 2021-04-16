import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useTheme} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from './constants/COLORS';
import normalization from './constants/normalization';
import HomePage from './component/common/HomePage';
import DoctorList from './component/Services/DoctorList';
import Filter from './component/Services/DoctorList/Filter';
import NormalAppointMent from './component/Services/AppointMent/NormalAppointMent';
import Confirmation from './component/Services/AppointMent/Confirmation';
import VideoCallAppointMent from './component/Services/AppointMent/VideoCallAppointMent';
import PatientInformation from './component/Services/AppointMent/VideoCallAppointMent/VideoCallPatientInformation';
import DoctorProfile from './component/DoctorProfile';
import PatientProfile from './component/PatientProfile';
import Reports from './component/PatientProfile/Reports';
import MedicineReminder from './component/PatientProfile/MedicineReminder';
import UpcomingAppointment from './component/PatientProfile/UpcomingAppointment';
import History from './component/PatientProfile/History';
import VideoCallingAppointment from './component/PatientProfile/VideoCallingAppointment';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Home = () => {
  const {colors} = useTheme();
  console.log(colors);
  return (
    <>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: colors.primary,
        }}></View>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: colors.background,
        }}></View>
      <View
        style={{height: 100, width: 100, backgroundColor: colors.text}}></View>
      <View
        style={{height: 100, width: 100, backgroundColor: colors.card}}></View>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: colors.notification,
        }}></View>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: colors.border,
        }}></View>
    </>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconColor;

          if (route.name === 'Home') {
            iconName = 'ios-home';
            iconColor = focused ? COLORS.iconColor : COLORS.textGrey;
          } else if (route.name === 'Doctor Chat') {
            iconName = 'md-chatbox';
            iconColor = focused ? COLORS.iconColor : COLORS.textGrey;
          } else if (route.name === 'Profile') {
            iconName = 'person';
            iconColor = focused ? COLORS.iconColor : COLORS.textGrey;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={iconColor} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#547896',
        inactiveTintColor: 'gray',
        tabStyle: {elevation: 20, backgroundColor: '#fff'},
        labelStyle: {fontSize: normalization(11)},
      }}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Doctor Chat" component={Home} />
      <Tab.Screen name="Profile" component={PatientProfile} />
    </Tab.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Tabbar">
      <Stack.Screen name="TabBar" component={BottomTab} />
      <Stack.Screen name="NormalAppointment" component={NormalAppointMent} />
      <Stack.Screen
        name="VideoCallAppointMent"
        component={VideoCallAppointMent}
      />
      <Stack.Screen
        name="VideoCallProfileInformation"
        component={PatientInformation}
      />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="DoctorList" component={DoctorList} />
      <Stack.Screen name="Filter" component={Filter} />
    </Stack.Navigator>
  );
};

const DoctorStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="DoctorProfile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
    </Stack.Navigator>
  );
};

const PatientStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MedicineReminder" component={MedicineReminder} />
      <Stack.Screen name="PatientReports" component={Reports} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="VideoCallingAppointment" component={VideoCallingAppointment} />
      <Stack.Screen
        name="UpcomingAppointment"
        component={UpcomingAppointment}
      />
    </Stack.Navigator>
  );
};

const LogInStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="DoctorStack" component={DoctorStack} />
      <Stack.Screen name="PatientStack" component={PatientStack} />
    </Stack.Navigator>
  );
};

export default function AppNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tab" component={LogInStack} />
    </Drawer.Navigator>
  );
}
