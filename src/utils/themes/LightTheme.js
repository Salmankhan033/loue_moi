const LightTheme = language => {
  let isArabic = language == 'ar' ? true : false;
  return {
    colors: {
      background: '#0E0D09',
      textColor: '#FFFFFF',
      secondaryTextColor: '#555EDF',
      primary: '#1927F0',
      foundationBlue: '#151E3D',
      FoundationBlue1: '#C8DAFE',
      blueCheckbox: '#636E90',
      FoundationRed: '#FEBEBE',
      red10: '#D9449D33',
      red20: '#D9449D',
      blue10: '#33B1D9',
      gray1: '#EBEBF599',
      blue1: '#585979',

      //
      primaryRoyalBlue: '#070066',
      primary2: '#8600D6',
      grey800: '#181922',
      grey600: '#7676803D',
      grey100: '#636366',
      primaryLight: '#FCF0FF',
      pureWhite: '#FAFAFA',
      secondary: '#E8D37B',
      secondary2: '#877B48',
      black: '#000000',
      grey400: '#ACB6BF',
      grey200: '#DEE2E7',
      grey50: '#ACB6BF',
      inputText: '#4C5760',
      whiteText: '#fff',
      white: '#FFFFFF',
      highlight: '#E5F1FF',
      highlightSelected: '#0D6EFD',
      successLight: '#C3FFCB',
      success: '#00B517',
      warningLight: '#FFF3E1',
      warning: '#EE8000',
      errorLight: '#FFABAB',
      error: '#DA0B1B',
      tealComplimentary: '#55D6BE',
      yellowComplimentary: '#FFA630',
      orangeComplimentary: '#C84630',
      pinkComplimentary: '#F487B6',
      purpleComplimentary: '#560093',
      burgandyComplimentary: '#68014B',
      headerTitle: '#212121',
      DelText: '#8B96A5',
      lavenderPink: '#CD66CE',
      seafoamGreen: '#4BC0C0',
      mellowOrange: '#FF9F40',
      coralPink: '#FF6384',
      summerSky: '#36A2EB',
    },
    dimen: {
      btnHorizontal: 15,
      btnRadius: 6,
      btnVertical: 10,
      btnMdHorizontal: 15,
      btnMdVertical: 12,
      btnMdRadius: 6,
      btnLgHorizontal: 15,
      btnLgVertical: 15,
      btnLgRadius: 6,
      textSize: isArabic ? 14 : 12, // Adjusted for Arabic
      textSizeMd: isArabic ? 16 : 14, // Adjusted for Arabic
      textSizeLg: isArabic ? 18 : 16, // Adjusted for Arabic
      marginVertical: 8,
      marginHorizontal: 16,
      paddingVertical: 10,
      paddingHorizontal: 15,
      screenTitleTextSize: isArabic ? 26 : 24, // Adjusted for Arabic
      screenSubTitleTextSize: isArabic ? 15 : 13, // Adjusted for Arabic
      headerPX: 15,
      headerPY: 15,
      headerIconSize: 24,
      //todo
      textSize36: 36,
      textSize18: 18,
      textSize14: 14,
      textSize28: 28,
      textSize24: 24,
      textSize13: 13,
      textSize16: 16,
      textSize17: 17,
      textSize12: 12,
      textSize9: 9,
      textSize10: 10,
      textSize15: 15,
      textSize38: 38,
      textSize20: 20,
    },
    fonts: {
      regular: 'Nunito-Regular',
      black: 'Nunito-Black',
      bold: 'Nunito-Bold',
      extraBold: 'Nunito-ExtraBold',
      light: 'Nunito-Light',
      medium: 'Nunito-Medium',
      semiBold: 'Nunito-SemiBold',
      extraLight: 'Nunito-ExtraLight',

      // Remove italic styles since they don't exist
      // blackItalic: isArabic ? 'Cairo-Black' : 'Poppins-BlackItalic', // Fallback to Black
      // boldItalic: isArabic ? 'Cairo-Bold' : 'Poppins-BoldItalic', // Fallback to Bold
      // extraBoldItalic: isArabic ? 'Cairo-ExtraBold' : 'Poppins-ExtraBoldItalic', // Fallback to ExtraBold
      // extraLightItalic: isArabic
      //   ? 'Cairo-ExtraLight'
      //   : 'Poppins-ExtraLightItalic', // Fallback to ExtraLight
      // lightItalic: isArabic ? 'Cairo-Light' : 'Poppins-LightItalic', // Fallback to Light
      // mediumItalic: isArabic ? 'Cairo-Medium' : 'Poppins-MediumItalic', // Fallback to Medium
      // semiBoldItalic: isArabic ? 'Cairo-SemiBold' : 'Poppins-SemiBoldItalic', // Fallback to SemiBold
      // thin: isArabic ? 'Cairo-Light' : 'Poppins-Thin', // Use Light as fallback
      // thinItalic: isArabic ? 'Cairo-Light' : 'Poppins-ThinItalic', // Use Light as fallback
    },
  };
};

export default LightTheme;
