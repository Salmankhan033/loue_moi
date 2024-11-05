import React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { NavStackParams, Screen } from './appNavigation.type';
import Test from '../screens/Test';
import SignUpScreen from '../screens/auth/SignUpScreen';
import PersonalInformationScreen from '../screens/auth/PersonalInformationScreen';
import ActivitiesScreen from '../screens/auth/ActivitiesScreen';
import InviteScreen from '../screens/auth/InviteScreen';
import SchedulesScreen from '../screens/auth/SchedulesScreen';
import AcceptInviteScreen from '../screens/auth/AcceptInviteScreen';

export const navigationRef =
  React.createRef<NavigationContainerRef<NavStackParams>>();

const Stack = createNativeStackNavigator<NavStackParams>();

const screenOptions: NativeStackNavigationOptions = {
  animation: 'slide_from_right',
  headerShown: false,
};

export const AppNavigation: React.FC = () => {


  return (
    <>

        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name={Screen.SignUp} component={SignUpScreen} />
          <Stack.Screen name={Screen.PersonalInfo} component={PersonalInformationScreen} />
          <Stack.Screen name={Screen.Activities} component={ActivitiesScreen} />
          <Stack.Screen name={Screen.Invite} component={InviteScreen} />
          <Stack.Screen name={Screen.Schedules} component={SchedulesScreen} />
          <Stack.Screen name={Screen.AcceptInvite} component={AcceptInviteScreen} />
        </Stack.Navigator>
 
    </>
  );
};
