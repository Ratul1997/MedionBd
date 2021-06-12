import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

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
import VideoCall from './component/VideoCall';
import OperateButton from './component/VideoCall/OperateButton';
import AppointMents from './component/DoctorProfile/AppointMents';
import DoctorHistory from './component/DoctorProfile/DoctorHistory';
import Revenue from './component/DoctorProfile/Revenue';
import CustomDrawerContent from './CustomDrawerContent';
import Profiles from './common/Profiles';
import DoctorSignUp from './component/Auth/DoctorSignUp';
import Login from './component/Auth/Login';
import LoginDoc from './component/Doctor/Auth/LoginDoc';
import HomePageDoc from './component/Doctor/HomePageDoc';
import DocHistory from './component/Doctor/DocHistory';
import Prescription from './component/Doctor/Prescription';
import RXComponent from './component/Doctor/Prescription/RX/RXComponent';
import Advices from './component/Doctor/Prescription/Advice/Advices';
import AdviceComponent from './component/Doctor/Prescription/Advice/AdviceComponent';
import FollowUpComponent from './component/Doctor/Prescription/FollowUp/FollowUpComponent';
import CheifComplaint from './component/Doctor/Prescription/CheifComplaint';
import CheifComplaintComponent from './component/Doctor/Prescription/CheifComplaint/CheifComplaintComponent';
import HistoryComponent from './component/Doctor/Prescription/History/HistoryComponent';
import DiagnosisComponent from './component/Doctor/Prescription/Diagnosis/DiagnosisComponent';
import OnExaminationComponent from './component/Doctor/Prescription/OnExamination/OnExaminationComponent';
import InvestigationComponent from './component/Doctor/Prescription/Investigation/InvestigationComponent';
import AllPurposeHeader from './common/AllPurposeHeader';
import OnlineApointMents from './component/PatientProfile/History/OnlineApointMents';
import OfflineAppointMents from './component/PatientProfile/History/OfflineAppointMents';
import Answered from './component/HealthQuestions/Feed/Answered';
import Approved from './component/HealthQuestions/Feed/Approved';
import GoogleMap from './component/GoogleMap';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MaterialTab = createMaterialBottomTabNavigator();

const Tab = createMaterialTopTabNavigator();
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
        component={PatientStack}
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
function PatientHistory(props) {
  const {navigation} = props;
  const onBackNavigate = () => {
    navigation.goBack();
  };
  return (
    <>
      <AllPurposeHeader title="History" onBackNavigate={onBackNavigate} />
      <Tab.Navigator>
        <Tab.Screen
          name="Offline AppointMents"
          component={OfflineAppointMents}
        />
        <Tab.Screen name="Online AppointMents" component={OnlineApointMents} />
      </Tab.Navigator>
    </>
  );
}
const AnswerTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="NewsFeed" component={Answered} />

      <Tab.Screen name="My Questions" component={Approved} />
    </Tab.Navigator>
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
      <Stack.Screen name="Feed" component={AnswerTab} />
      <Stack.Screen name="Video Call" component={VideoCall} />
      <Stack.Screen name="HealthCheckUp" component={HealthCheckUp} />
      <Stack.Screen
        name="HealthCheckUpDetails"
        component={HealthCheckUpDetails}
      />

      <Stack.Screen name="DoctorProf" component={DoctorProfile} />
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
      <Stack.Screen name="PatientProfile" component={Profiles} />
      <Stack.Screen name="MedicineReminder" component={MedicineReminder} />
      <Stack.Screen name="PatientReports" component={Reports} />
      <Stack.Screen name="History" component={PatientHistory} />
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
      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen name="BlogDetails" component={BlogDetails} />
    </Stack.Navigator>
  );
};

const PrescriptionStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Prescription"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Prescription" component={Prescription} />
      <Stack.Screen name="Medicines" component={RXComponent} />
      <Stack.Screen name="Advices" component={AdviceComponent} />
      <Stack.Screen name="Follow" component={FollowUpComponent} />
      <Stack.Screen name="Complaints" component={CheifComplaintComponent} />
      <Stack.Screen name="History" component={HistoryComponent} />
      <Stack.Screen name="Diagnosis" component={DiagnosisComponent} />
      <Stack.Screen name="OnExamination" component={OnExaminationComponent} />
      <Stack.Screen name="Inv" component={InvestigationComponent} />
    </Stack.Navigator>
  );
};

const DoctorLoginStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginDoc} />
      <Stack.Screen name="DoctorRevenue" component={Revenue} />
      <Stack.Screen name="AppointMents" component={AppointMents} />
      <Stack.Screen name="SignUp" component={DoctorSignUp} />
      <Stack.Screen name="DocHome" component={HomePageDoc} />
      <Stack.Screen name="DocHistory" component={DocHistory} />
      <Stack.Screen name="PresCriptionStack" component={PrescriptionStack} />
    </Stack.Navigator>
  );
};
const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Prescription"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Blogs" component={BlogStack} />
      <Drawer.Screen name="Google Map" component={GoogleMap} />
    </Drawer.Navigator>
  );
};
export default function AppNavigation() {
  return <DrawerNav />;
}
