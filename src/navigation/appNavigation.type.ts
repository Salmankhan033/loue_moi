import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { NewsResult } from '@src/services';

export enum Screen {
  Test = 'Test',
  SignUp='SignUp',
  PersonalInfo = 'PersonalInformation',
  Activities = 'Activities',
  Invite='Invite',
  Schedules='Schedules',
  AcceptInvite = 'Accept-Invite',
  SplashScreen = 'SplashScreen',
}

export type NavStackParams = {
  [Screen.Test]: undefined;
  [Screen.SignUp] : undefined;
  [Screen.PersonalInfo]:undefined;
  [Screen.Activities]:undefined;
  [Screen.Schedules]:undefined;
  [Screen.AcceptInvite]:undefined;
  [Screen.Invite] : undefined
  [Screen.SplashScreen] : undefined

};

export type NewsDetailParams = {
  item: NewsResult;
};

export type AppNavigationProp = NativeStackNavigationProp<NavStackParams>;