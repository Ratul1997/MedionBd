import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
// import Header from '../Components/HomepageCompt1';
// import SliderComponent from '../Components/HomepageCompt2';
// import CallingOption from '../Components/HomepageCompt3';
// import Topics from '../Components/HomepageCompt4';
// import DoctorList from './DoctorList';
// import HealthCheckUp from './HealthCheckUp';
// import Blog from './Blog';
import COLORS from '../../../constants/COLORS';
import normalization from '../../../constants/normalization';
import Header from '../../../common/Header';
import ImageSlider from './ImageSlider';
import CallingOptions from './CallingOptions';
import ServicesHealthQuestion from './ServicesHealthQuestion';
import VirtualizedView from '../../../common/VirtualizedView';
import ServiceList from '../../../helpers/ServicesList';
import HealthQuestions from '../../../helpers/HealthQuestions';

const HEIGHT = Dimensions.get('window').height;
export default function HomePage(props) {
  const {navigation} = props;
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{flex: 0.1}}>
        <Header />
      </View>

      <VirtualizedView style={{flex: 0.9}}>
        <View style={{height: HEIGHT * 0.3}}>
          {/* <SliderComponent/> */}
          <ImageSlider />
        </View>

        {/* <CallingOption /> */}
        <CallingOptions />

        {/* Services */}
        <ServicesHealthQuestion
          data={ServiceList}
          title="Services"
          navigation={navigation}
        />
        <ServicesHealthQuestion
          data={HealthQuestions}
          title="Health Questions"
          navigation = {navigation}
        />

        {/* <Topics navigation={navigation} DoctorList={DoctorList} HealthCheckUp={HealthCheckUp}/> */}

        {/* <View
            style={{
              height: Dimensions.get('window').height * 0.5,
              marginTop: normalization(20),
            }}>
            <TouchableOpacity style={styles.ViewBlogs}>
              <Text style={{color: 'blue', marginEnd: normalization(65)}}>
                View All Blog
              </Text>
              <View
                style={{
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#547896',
                  width: 35,
                  height: '100%',
                }}>
                <Entypo
                  name="chevron-small-right"
                  size={30}
                  color={COLORS.white}
                />
              </View>
            </TouchableOpacity>
          </View> */}
      </VirtualizedView>
    </View>
  );
}

const styles = StyleSheet.create({
  ViewBlogs: {
    height: '10%',
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: normalization(5),
    elevation: 8,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
