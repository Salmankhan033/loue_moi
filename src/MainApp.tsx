import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {LocalizationProvider, ThemeProvider} from './context';
import {AppNavigation, navigationRef} from './navigation/AppNavigation';
import store, {persistor} from './store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export const MainApp = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <LocalizationProvider>
          <ThemeProvider>
            <NavigationContainer ref={navigationRef}>
              <PersistGate loading={null} persistor={persistor}>
                <AppNavigation />
              </PersistGate>
            </NavigationContainer>
          </ThemeProvider>
        </LocalizationProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
  },
  splashText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});
