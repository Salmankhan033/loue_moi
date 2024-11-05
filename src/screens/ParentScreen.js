import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { useColor } from '@src/context';

interface ScreensProps {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const ParentScreen: React.FC<ScreensProps> = ({ title, children, footer = null }) => {
  const { appTheme } = useColor();
  const colorScheme = useColorScheme();
  const styles = createStyles(appTheme);

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.containerbottom} />
      <StatusBar />
        {children}
    </SafeAreaView>
  );
};

const createStyles = (appTheme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#0E0D09'
    },
    containerbottom: {
      flex: 0,
    },
    content: {
      flexGrow: 1,
    },
    footer: {
      alignItems: 'center',
      backgroundColor: '#343a40',
      padding: 16,
    },
    header: {
      alignItems: 'center',
      backgroundColor: '#007bff',
      padding: 16,
    },
    title: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

export default ParentScreen;
