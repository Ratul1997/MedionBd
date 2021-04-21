/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';

import AppNavigation from './src/AppNavigation';
import SplashScreen from './src/SplashScreen';

const App = () => {
  const [isLoad, setIsload] = useState(false);


  return (
    <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
  );
};

export default App;
