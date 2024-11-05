import Config from 'react-native-config';

export type ConfigTypes = {
  ENV: string;
  API_URL: string;
  APP_STORE_URL: string;
  PLAY_STORE_URL: string;
};

export const AppConfig = Config as ConfigTypes;

export const APIEndPoints = {
  BaseUrl: 'https://api-testapp.cobone.net/v1',
  Login: 'auth/login',
  MyOffer: 'account/merchant',
  DashBoardSummary: 'account/merchant/summary',
  redeem: 'account/redeem?',
};
