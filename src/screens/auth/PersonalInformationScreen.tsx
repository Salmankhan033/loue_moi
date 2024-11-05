import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ParentScreen from '../ParentScreen';
import { contents, useAppContext, useColor } from '../../context';
import AuthHeader from '../../componentes/AuthHeader';
import RadioButton from '../../componentes/RadioButton';
import { scaleHeight, scaleWidth } from '../../utils';
import PrimaryButton from '../../componentes/PrimaryButton';
import { Screen } from '../../navigation/appNavigation.type';

const PersonalInformationScreen: React.FC = () => {
  const { appTheme } = useColor();
  const [firstOption, setFirstOption] = useState<string>('');
  const [secondOption, setSecondOption] = useState<string>('');
  const { navigation } = useAppContext();
  const styles = createStyles(appTheme);

  const gotoNext = () => {
    navigation.navigate(Screen.Activities);
  };

  const gotoBack = () => {
    navigation.goBack();
  };

  const OptionsFirst = ['Un Homme', 'Une Femme'];
  const OptionsSecond = ['En couple', 'Célibataire', 'Non précisé'];

  return (
    <ParentScreen>
      <View style={styles.container}>
        <AuthHeader title={contents('QuiEtesVous')} onPress={gotoBack} />
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Je suis</Text>
          <FlatList
            data={OptionsFirst}
            renderItem={({ item }) => (
              <RadioButton
                option={item}
                selected={firstOption}
                setSelected={setFirstOption}
              />
            )}
          />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Je suis</Text>
          <FlatList
            data={OptionsSecond}
            renderItem={({ item }) => (
              <RadioButton
                option={item}
                selected={secondOption}
                setSelected={setSecondOption}
              />
            )}
          />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title={contents('Suivant')}
            withIcon={true}
            Icon={require('../../assets/icons/forwordArrowIcon.png')}
            onPress={gotoNext}
          />
        </View>
      </View>
    </ParentScreen>
  );
};

export default PersonalInformationScreen;

const createStyles = (appTheme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: appTheme.colors.background,
      paddingTop: scaleHeight(10),
    },
    sectionContainer: {
      marginTop: scaleHeight(30),
    },
    sectionTitle: {
      color: appTheme.colors.textColor,
      fontFamily: 'Nunito-SemiBold',
      fontSize: appTheme.dimen.textSize18,
      marginLeft: scaleWidth(30),
    },
    buttonContainer: {
      alignSelf: 'center',
      position: 'absolute',
      bottom: scaleHeight(16),
    },
  });
