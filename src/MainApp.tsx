import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import SplashScreen from 'react-native-splash-screen';

import { LocalizationProvider, ThemeProvider } from './context';
import { AppNavigation, navigationRef } from './navigation/AppNavigation';
import store, { persistor } from './store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SignUpScreen from './screens/auth/SignUpScreen';
import PersonalInformationScreen from './screens/auth/PersonalInformationScreen';
import ActivitiesScreen from './screens/auth/ActivitiesScreen';
import InviteScreen from './screens/auth/InviteScreen';
import SchedulesScreen from './screens/auth/SchedulesScreen';
import AcceptInviteScreen from './screens/auth/AcceptInviteScreen';

export const MainApp = () => {
  useEffect(() => {
    // SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <LocalizationProvider>
          <ThemeProvider>
            <NavigationContainer ref={navigationRef}>
        
              <PersistGate loading={null} persistor={persistor}>
                <AppNavigation />
                {/* <SignUpScreen /> */}
                {/* <PersonalInformationScreen/> */}
                {/* <ActivitiesScreen/> */}
                {/* <InviteScreen /> */}
                {/* <SchedulesScreen/> */}
                {/* <AcceptInviteScreen /> */}
            
              </PersistGate>
            </NavigationContainer>
          </ThemeProvider>
        </LocalizationProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};
