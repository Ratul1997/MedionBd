/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useReducer} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import {MenuProvider} from 'react-native-popup-menu';
import AppNavigation from './src/AppNavigation';
import SplashScreen from './src/SplashScreen';

import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistStore, persistReducer} from 'redux-persist';

import {Provider} from 'react-redux';
import {store, pReducer} from './src/reducers';

const App = () => {
  const [isLoad, setIsload] = useState(false);
  return (
    <MenuProvider>
      <Provider store={store}>
        <PersistGate persistor={persistStore(store)}>
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </MenuProvider>
  );
};

export default App;
