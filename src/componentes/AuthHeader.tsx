import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAppContext, useColor } from '../context';
import { scaleHeight, scaleWidth } from '../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface AuthHeaderProps {
  title: string;
  onPress: () => void;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ title, onPress }) => {
  const { appTheme } = useColor();
  const styles = createStyles(appTheme);

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.backButton} onPress={onPress}>
        <AntDesign name="left" color={appTheme.colors.textColor} size={scaleWidth(18)} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default AuthHeader;

const createStyles = (appTheme: any) =>
  StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      width: scaleWidth(345),
      alignSelf: 'center',
    },
    backButton: {
      paddingTop: scaleHeight(10),
    },
    headerTitle: {
      color: appTheme.colors.textColor,
      fontSize: appTheme.dimen.textSize28,
      fontFamily: 'Nunito-Bold',
      marginLeft: scaleWidth(10),
      marginRight: scaleWidth(30),
    },
  });
