

import { useLanguage } from './LocalizationContext';
import { storage } from './storage';

import { AppNavigationProp } from '../navigation/appNavigation.type';
import {
  useWithNavigation,
  WithNavigation,
} from '../navigation/withNavigation';
import { appServices } from '../services/appServices';
import { useColor } from './ThemeContext';

export const useAppContextOnly = () => {
  const { appTheme } = useColor();
  const { ...language } = useLanguage();

  return {
    services: appServices,
    storage,
    ...appTheme.colors,
    ...language,
  };
};

export type AppContextType = ReturnType<typeof useAppContextOnly>;

export const useAppContext = (): WithNavigation<
  AppNavigationProp,
  AppContextType
> => {
  return useWithNavigation<AppNavigationProp, AppContextType>(
    useAppContextOnly(),
  );
};
