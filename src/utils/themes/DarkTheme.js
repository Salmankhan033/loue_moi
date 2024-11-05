import { lightTheme } from './LightTheme';

const darkThemeParams = {
  primary: '#bb86fc',
  background: '#121212',
  text: '#ffffff',
  card: '#1f1f1f',
  border: '#373737',
  notification: '#ff80ab',
  error: '#0f80ab',
  black: '#000',
};
export const darkTheme = true ? darkThemeParams : lightTheme;
