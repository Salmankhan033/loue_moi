import React, {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StatusBar,
  Linking,
} from 'react-native';
import ParentScreen from '../ParentScreen';
import {contents, useAppContext, useColor} from '../../context';
import {scaleHeight, scaleWidth} from '../../utils';
import SigUpOnboardingImage from '../../componentes/SigUpOnboardingImage';
import PrimaryButton from '../../componentes/PrimaryButton';
import {Screen} from '../../navigation/appNavigation.type';

const SplashScreen: React.FC = () => {
  const {appTheme} = useColor();
  const {navigation} = useAppContext();
  const styles = createStyles(appTheme);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(Screen.SignUp);
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ParentScreen>
        <View style={styles.innerContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.logo}
            />
            <Text style={styles.logoText}>{contents('loue_moi')} </Text>
          </View>
          <Text style={styles.mainTitle}>{contents('AmitiésOuAmour')}</Text>
          <Text style={styles.subTitle}>
            {contents('RencontresPhysiqUesuniquement')}
          </Text>
          <View style={styles.imageContainer}>
            <SigUpOnboardingImage
              style={styles.onboardingImageLeft}
              image={require('../../assets/images/left.png')}
            />
            <SigUpOnboardingImage
              style={styles.onboardingImageTopCenter}
              image={require('../../assets/images/top.png')}
            />
            <SigUpOnboardingImage
              style={styles.onboardingImageRight}
              image={require('../../assets/images/right.png')}
            />
            <SigUpOnboardingImage
              style={styles.onboardingImageBottomCenter}
              image={require('../../assets/images/bottom.png')}
            />
          </View>
        </View>
      </ParentScreen>
    </SafeAreaView>
  );
};

export default SplashScreen;

const createStyles = (appTheme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: appTheme.colors.background,
    },
    innerContainer: {
      flex: 1,
      alignItems: 'center',
    },
    logoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: scaleHeight(20),
    },
    logo: {
      width: scaleWidth(23.65),
      height: scaleHeight(25),
      resizeMode: 'cover',
      marginRight: scaleWidth(8),
    },
    logoText: {
      color: appTheme.colors.textColor,
      fontSize: appTheme.dimen.textSize18,
      fontFamily: 'Nunito-SemiBold',
    },
    mainTitle: {
      color: appTheme.colors.textColor,
      fontSize: appTheme.dimen.textSize28,
      fontFamily: 'Nunito-Bold',
      marginTop: scaleHeight(40),
    },
    subTitle: {
      color: appTheme.colors.textColor,
      fontSize: appTheme.dimen.textSize16,
      fontFamily: 'Nunito-Regular',
      marginTop: scaleHeight(10),
      width: scaleWidth(170),
      textAlign: 'center',
    },
    imageContainer: {
      width: scaleWidth(345),
      height: scaleHeight(340),
      justifyContent: 'center',
      marginVertical: scaleHeight(40),
    },
    onboardingImageLeft: {
      height: scaleHeight(160),
      width: scaleWidth(101),
      borderRadius: scaleWidth(76),
      position: 'absolute',
      left: 0,
    },
    onboardingImageTopCenter: {
      height: scaleHeight(160),
      width: scaleWidth(101),
      borderRadius: scaleWidth(76),
      position: 'absolute',
      left: scaleWidth(120),
      top: 0,
    },
    onboardingImageRight: {
      height: scaleHeight(160),
      width: scaleWidth(101),
      borderRadius: scaleWidth(76),
      position: 'absolute',
      right: 0,
    },
    onboardingImageBottomCenter: {
      height: scaleHeight(160),
      width: scaleWidth(101),
      borderRadius: scaleWidth(76),
      position: 'absolute',
      left: scaleWidth(120),
      bottom: 0,
    },
    loginContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: scaleHeight(20),
    },
    loginText: {
      color: appTheme.colors.textColor,
      fontSize: appTheme.dimen.textSize14,
      fontFamily: 'Nunito-Regular',
    },
    loginLink: {
      color: appTheme.colors.secondaryTextColor,
      fontSize: appTheme.dimen.textSize14,
      fontFamily: 'Nunito-SemiBold',
      marginLeft: scaleWidth(5),
    },
    disclaimerText: {
      marginTop: scaleHeight(40),
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    textDisclaimer: {
      color: appTheme.colors.textColor,
      fontSize: appTheme.dimen.textSize12,
      fontFamily: 'Nunito-Regular',
    },
    conditionsContainer: {
      flexDirection: 'row',
    },
  });
