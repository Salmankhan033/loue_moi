import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { useColor } from '../context';
import { scaleHeight, scaleWidth } from '../utils';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

interface RadioButtonProps {
  option: string;
  selected: string;
  setSelected: (option: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ option, selected, setSelected }) => {
  const { appTheme } = useColor();
  const styles = createStyles(appTheme, selected === option);

  return (
    <TouchableOpacity onPress={() => setSelected(option)} style={styles.button}>
      <Text style={styles.optionText}>{option}</Text>
      {selected === option ? (
        <Feather name="check-circle" color={appTheme.colors.FoundationRed} size={scaleWidth(14)} />
      ) : (
        <Entypo name="circle" color={appTheme.colors.blueCheckbox} size={scaleWidth(14)} />
      )}
    </TouchableOpacity>
  );
};

export default RadioButton;

const createStyles = (appTheme: any, isSelected: boolean) =>
  StyleSheet.create({
    button: {
      backgroundColor: isSelected ? appTheme.colors.primary : appTheme.colors.foundationBlue,
      width: scaleWidth(345),
      height: scaleHeight(42),
      borderRadius: 26,
      justifyContent: 'space-between',
      paddingHorizontal: scaleWidth(15),
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: scaleHeight(20),
      alignSelf: 'center',
    },
    optionText: {
      color: appTheme.colors.textColor,
      fontFamily: 'Nunito-Regular',
      fontSize: appTheme.dimen.textSize16,
    },
  });
