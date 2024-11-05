import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {Appearance, useColorScheme} from 'react-native';
import PropTypes from 'prop-types';
import {darkTheme} from '@src/utils/themes/DarkTheme';
import LightTheme from '../../src/utils/themes/LightTheme';
import {useLanguage} from './LocalizationContext';
export interface Theme {
  colors: {
    background: string;
    textColor: string;
    secondaryTextColor: string;
    primary: string;
    foundationBlue: string;
    FoundationRed: string;
    FoundationBlue1: string;
    red10: string;
    blue10: string;
    red20: string;
    gray1: string;
    blue1: string;
    blueCheckbox: string;
    primary2: string;
    primaryRoyalBlue: string;
    primaryLight: string;
    secondary: string;
    secondary2: string;
    black: string;
    grey800: string;
    grey600: string;
    grey400: string;
    grey200: string;
    grey100: string;
    grey50: string;
    white: string;
    highlight: string;
    highlightSelected: string;
    successLight: string;
    success: string;
    warning: string;
    errorLight: string;
    error: string;
    tealComplimentary: string;
    yellowComplimentary: string;
    orangeComplimentary: string;
    pinkComplimentary: string;
    purpleComplimentary: string;
    burgandyComplimentary: string;
    inputText: string;
    headerTitle: string;
    pureWhite: string;
    DelText: string;
    coralPink: string;
    seafoamGreen: string;
    mellowOrange: string;
    lavenderPink: string;
    summerSky: string;
  };
  dimen: {
    btnHorizontal: number;
    btnRadius: number;
    btnVertical: number;
    btnMdHorizontal: number;
    btnMdVertical: number;
    btnMdRadius: number;
    btnLgHorizontal: number;
    btnLgVertical: number;
    btnLgRadius: number;
    textSize: number;
    textSizeMd: number;
    textSizeLg: number;
    marginVertical: number;
    marginHorizontal: number;
    paddingVertical: number;
    paddingHorizontal: number;
    screenTitleTextSize: number;
    screenSubTitleTextSize: number;
    headerPX: number;
    headerPY: number;
    headerIconSize: number;
    textSize24: number;
    textSize13: number;
    textSize12: number;
    textSize16: number;
    textSize15: number;
    textSize17: number;
    textSize9: number;
    textSize10: number;
    textSize18: number;
    textSize28: number;
    textSize14: number;
    textSize38: number;
    textSize20: number;
  };
  fonts: {
    regular: string;
    black: string;
    blackItalic: string;
    bold: string;
    boldItalic: string;
    extraBold: string;
    extraBoldItalic: string;
    extraLight: string;
    extraLightItalic: string;
    italic: string;
    light: string;
    lightItalic: string;
    medium: string;
    mediumItalic: string;
    semiBold: string;
    semiBoldItalic: string;
    thin: string;
    thinItalic: string;
  };
}

interface AppThemeContextType {
  appTheme: Theme;
  setAppTheme: (theme: Theme) => void;
}

export const AppThemeContext = createContext<AppThemeContextType | undefined>(
  undefined,
);

export const useColor = () => {
  const context = useContext(AppThemeContext);
  if (!context) throw new Error('useColor must be used inside AppThemeContext');
  return context;
};

export const ThemeProvider = ({children}: React.PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const {language, isLanguageSelected} = useLanguage();
  // const [appTheme, setTheme] = useState<Theme>(
  //   isDarkTheme(colorScheme) ? darkTheme : LightTheme(language), //for changin theme
  // );
  const [appTheme, setTheme] = useState<Theme>(LightTheme(language));

  useEffect(() => {
    Appearance.setColorScheme('light');
  }, []);

  const setAppTheme = useCallback((theme: Theme) => {
    setTheme(theme);
  }, []);

  const value: AppThemeContextType = useMemo(() => {
    return {
      appTheme,
      setAppTheme,
    };
  }, [appTheme, setAppTheme]);

  // useEffect(() => { for dark theme
  //   setTheme(isDarkTheme(colorScheme) ? darkTheme : LightTheme(language));
  // }, [colorScheme, language]);

  return (
    <AppThemeContext.Provider value={value}>
      {children}
    </AppThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Helper function to determine dark theme
const isDarkTheme = (scheme: string) => scheme === 'dark';
