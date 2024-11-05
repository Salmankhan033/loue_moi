import React from 'react';
import {Image, StyleSheet, View, ViewStyle} from 'react-native';
import {scaleHeight, scaleWidth} from '../utils';

interface SigUpOnboardingImageProps {
  style?: ViewStyle;
  image?: any;
}

const SigUpOnboardingImage: React.FC<SigUpOnboardingImageProps> = ({
  style,
  image,
}) => {
  const styles = createStyles();

  return (
    <View style={style}>
      <Image source={image} style={styles.image} />
    </View>
  );
};

export default SigUpOnboardingImage;

const createStyles = () =>
  StyleSheet.create({
    image: {
      height: scaleHeight(160),
      width: scaleWidth(101),
      borderRadius: scaleHeight(76),
      resizeMode: 'cover',
    },
  });
