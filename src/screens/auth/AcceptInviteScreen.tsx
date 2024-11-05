import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ParentScreen from '../ParentScreen';
import { useColor } from '../../context';
import InviteHeader from '../../componentes/InviteHeader';
import {scaleHeight, scaleWidth} from '../../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';

const AcceptInviteScreen: React.FC = () => {
  const { appTheme } = useColor();
  const styles = createStyles(appTheme);

  return (
    <ParentScreen>
      <View style={styles.container}>
        <InviteHeader />
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQ-4Iue5GllXgqoVIbuStLOJ49ot8DFslQQ&s',
            }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Eglantine - 12 km</Text>
            <Text style={styles.profileAge}>84 ans</Text>
            <View style={styles.statusContainer}>
              <View style={styles.singleStatus}>
                <Text style={styles.statusText}>Célibataire</Text>
              </View>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>4.8</Text>
                <AntDesign name={'star'} size={scaleHeight(17)} color={appTheme.colors.FoundationRed} />
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.invitationText}>
          Il vous propose de boire un verre mardi 23 au Brothers à 14h
        </Text>

        <View style={styles.statusListContainer}>
          <View style={styles.statusRow}>
            <Octicons name="verified" size={scaleHeight(20)} color={appTheme.colors.secondaryTextColor} />
            <Text style={styles.statusRowText}>Invitation reçue</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statusRow}>
            <Octicons name="verified" size={scaleHeight(20)} color={appTheme.colors.secondaryTextColor} />
            <Text style={styles.statusRowText}>Vous avez accepté</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statusRow}>
            <Octicons name="verified" size={scaleHeight(20)} color={appTheme.colors.secondaryTextColor} />
            <Text style={styles.statusRowText}>John n'a pas validé</Text>
          </View>
        </View>

        <View style={styles.alertContainer}>
          <Foundation name={'alert'} size={scaleHeight(20)} color={appTheme.colors.yellowComplimentary} />
          <Text style={styles.alertText}>
            Présentez votre QR code à John pour que votre cadeau soit pris en
            compte.
          </Text>
        </View>

        <Text style={styles.footerText}>
          Vous pourrez rentrer en contact avec John 15 minutes avant le rendez
          vous. Pour un rendez vous serein, pensez a être ponctuel.e et agréable
          😀
        </Text>
      </View>
    </ParentScreen>
  );
};

export default AcceptInviteScreen;

const createStyles = (appTheme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: appTheme.colors.background,
      paddingHorizontal: scaleWidth(24),
    },
    profileContainer: {
      backgroundColor: appTheme.colors.grey800,
      flexDirection: 'row',
      padding: scaleWidth(16),
      borderRadius: 16,
      marginTop: scaleHeight(30),
    },
    profileImage: {
      width: scaleWidth(80),
      height: scaleHeight(80),
      resizeMode: 'cover',
      borderRadius: scaleHeight(100),
    },
    profileInfo: {
      marginLeft: scaleWidth(20),
    },
    profileName: {
      color: appTheme.colors.textColor,
      fontSize: appTheme.dimen.textSize18,
      fontFamily: 'Nunito-Bold',
    },
    profileAge: {
      color: appTheme.colors.FoundationBlue1,
      fontSize: appTheme.dimen.textSize16,
      fontFamily: 'Nunito-Regular',
    },
    statusContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: scaleHeight(15),
    },
    singleStatus: {
      width: scaleWidth(84),
      height: scaleHeight(23),
      borderWidth: scaleWidth(1),
      borderColor: appTheme.colors.FoundationBlue1,
      borderRadius: scaleWidth(36),
      alignItems: 'center',
      justifyContent: 'center',
    },
    statusText: {
      color: appTheme.colors.FoundationBlue1,
      fontSize: appTheme.dimen.textSize14,
      fontFamily: 'Nunito-Regular',
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ratingText: {
      color: appTheme.colors.textColor,
      fontSize: appTheme.dimen.textSize14,
      fontFamily: 'Nunito-Regular',
      marginRight: scaleWidth(10),
    },
    invitationText: {
      color: appTheme.colors.textColor,
      fontSize: appTheme.dimen.textSize24,
      fontFamily: 'Nunito-Bold',
      textAlign: 'center',
      marginTop: scaleHeight(20),
    },
    statusListContainer: {
      backgroundColor: appTheme.colors.grey800,
      padding: scaleWidth(16),
      borderRadius: 16,
      marginTop: scaleHeight(30),
    },
    statusRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statusRowText: {
      color: appTheme.colors.textColor,
      fontSize: appTheme.dimen.textSize16,
      fontFamily: 'Nunito-Regular',
      marginLeft: scaleWidth(16),
    },
    divider: {
      height: scaleWidth(0.3),
      backgroundColor: appTheme.colors.blue1,
      marginVertical: scaleHeight(15),
    },
    alertContainer: {
      backgroundColor: appTheme.colors.grey800,
      flexDirection: 'row',
      padding: scaleWidth(16),
      borderRadius: 16,
      marginTop: scaleHeight(30),
      borderWidth: scaleWidth(1),
      borderStyle: 'dashed',
      borderColor: appTheme.colors.blueCheckbox,
    },
    alertText: {
      color: appTheme.colors.textColor,
      fontSize: appTheme.dimen.textSize16,
      fontFamily: 'Nunito-Regular',
      textAlign: 'left',
      marginLeft: scaleWidth(10),
    },
    footerText: {
      color: appTheme.colors.textColor,
      fontSize: appTheme.dimen.textSize18,
      fontFamily: 'Nunito-Regular',
      textAlign: 'center',
      marginTop: scaleHeight(20),
    },
  });
