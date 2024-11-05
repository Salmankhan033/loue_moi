import { Dimensions } from 'react-native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

// resolution changes as per design
export const designWidth = 393;
export const designHeight = 852;

const scaleWidth = (val: number) => {
  return (screenWidth * val) / designWidth;
};

const scaleHeight = (val: number) => {
  return (screenHeight * val) / designHeight;
};

const scale = Math.min(screenWidth / designWidth, screenHeight / designHeight);

const moderateScale = (size: number, factor = 1) =>
  size + (scaleWidth(size) - size) * factor;

const scaledSize = (size: number) => Math.ceil(size * scale);

export {
  moderateScale,
  scaledSize,
  scaleHeight,
  scaleWidth,
  screenHeight,
  screenWidth,
};
