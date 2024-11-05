import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ImageSourcePropType } from 'react-native';
import { useColor } from '../context';
import { scaleHeight, scaleWidth } from '../utils';

interface PrimaryButtonProps {
  title: string;
  withIcon: boolean;
  Icon?: ImageSourcePropType;
  onPress: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, withIcon, Icon, onPress }) => {
  const { appTheme } = useColor();
  const styles = createStyles(appTheme);

  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
        {withIcon && Icon && (
          <Image source={Icon} style={styles.icon} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;

const createStyles = (appTheme: any) =>
  StyleSheet.create({
    button: {
      backgroundColor: appTheme.colors.primary,
      width: scaleWidth(345),
      height: scaleHeight(50),
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonText: {
      color: appTheme.colors.textColor,
      fontSize: appTheme.dimen.textSize17,
      fontFamily: 'Nunito-SemiBold',
      marginRight: scaleWidth(10),
    },
    icon: {
      height: scaleHeight(24),
      width: scaleWidth(24),
      resizeMode: 'contain',
    },
  });
