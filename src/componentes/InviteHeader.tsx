import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAppContext, useColor} from '../context';
import {scaleHeight, scaleWidth} from '../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';

const InviteHeader: React.FC = () => {
  const {appTheme} = useColor();
  const {navigation} = useAppContext();
  const styles = createStyles(appTheme);

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          name="left"
          color={appTheme.colors.textColor}
          size={scaleWidth(18)}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>Votre rendez vous avec</Text>
    </View>
  );
};

export default InviteHeader;

const createStyles = (appTheme: any) =>
  StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: scaleWidth(345),
      alignSelf: 'center',
      paddingTop: scaleHeight(10),
    },
    headerText: {
      color: appTheme.colors.textColor,
      fontSize: appTheme.dimen.textSize18,
      fontFamily: 'Nunito-SemiBold',
      marginLeft: scaleWidth(10),
      marginRight: scaleWidth(30),
    },
  });
