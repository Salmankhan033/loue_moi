import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
// import SplashScreen from 'react-native-splash-screen';

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
