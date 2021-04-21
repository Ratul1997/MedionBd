import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
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
import AskQuestion from './component/HealthQuestions/AskQuestion';
import Feed from './component/HealthQuestions/Feed';
import HealthCheckUp from './component/Services/HealthCheckup';
import HealthCheckUpDetails from './component/Services/HealthCheckup/HealthCheckUpDetails';
import Blog from './component/Blog';
import BlogDetails from './component/Blog/BlogDetails';
import SplashScreen from './SplashScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const MaterialTab = createMaterialBottomTabNavigator();

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

const MaterialTabNavigator = () => {
  return (
    <MaterialTab.Navigator
      shifting={true}
      sceneAnimationEnabled={false}
      initialRouteName="Home"
      activeColor={COLORS.iconColor}
      inactiveColor="#AED6F1"
      barStyle={{backgroundColor: '#fff'}}>
      <MaterialTab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-home" size={normalization(22)} color={color} />
          ),
        }}
      />
      <MaterialTab.Screen
        name="Doctor Chat"
        component={Home}
        options={{
          tabBarLabel: 'Doctor Chat',
          tabBarIcon: ({color}) => (
            <Ionicons
              name="md-chatbox"
              size={normalization(22)}
              color={color}
            />
          ),
        }}
      />
      <MaterialTab.Screen
        name="Profile"
        component={PatientProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Ionicons name="person" size={normalization(22)} color={color} />
          ),
        }}
      />
    </MaterialTab.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Tabbar">
      <Stack.Screen name="TabBar" component={MaterialTabNavigator} />
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
      <Stack.Screen name="AskQuestion" component={AskQuestion} />
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="HealthCheckUp" component={HealthCheckUp} />
      <Stack.Screen
        name="HealthCheckUpDetails"
        component={HealthCheckUpDetails}
      />
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
      <Stack.Screen
        name="VideoCallingAppointment"
        component={VideoCallingAppointment}
      />
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
const BlogStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Blog" component={Blog} />
      <Stack.Screen name="BlogDetails" component={BlogDetails} />
    </Stack.Navigator>
  );
};

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={LogInStack} />
      <Drawer.Screen name="Blogs" component={BlogStack} />
      <Drawer.Screen name="Patient Profile" component={PatientProfile} />
      <Drawer.Screen name="Doctor Profile" component={DoctorProfile} />
    </Drawer.Navigator>
  );
};
export default function AppNavigation() {
  return <DrawerNav />;
}
