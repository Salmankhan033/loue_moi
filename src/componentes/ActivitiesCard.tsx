import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {useColor} from '../context';
import {scaleHeight, scaleWidth} from '../utils';

interface ActivitiesCardProps {
  selected: boolean;
  item: {
    activity: string;
    source: any;
  };
  onSelect: () => void;
}

const ActivitiesCard: React.FC<ActivitiesCardProps> = ({
  selected,
  item,
  onSelect,
}) => {
  const {appTheme} = useColor();
  const styles = createStyles(appTheme, selected);

  return (
    <TouchableOpacity onPress={onSelect} style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Image source={item.source} style={styles.icon} />
        <Text style={styles.activityText}>{item.activity}</Text>
      </View>
      {selected ? (
        <Feather
          name="check-circle"
          color={appTheme.colors.FoundationRed}
          size={scaleWidth(14)}
        />
      ) : (
        <Entypo
          name="circle"
          color={appTheme.colors.blueCheckbox}
          size={scaleWidth(14)}
        />
      )}
    </TouchableOpacity>
  );
};

export default ActivitiesCard;

const createStyles = (appTheme: any, selected: boolean) =>
  StyleSheet.create({
    cardContainer: {
      width: scaleWidth(166),
      height: scaleHeight(50),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: selected
        ? appTheme.colors.primary
        : appTheme.colors.grey600,
      borderRadius: 76,
      paddingHorizontal: scaleWidth(15),
    },
    textContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      height: scaleHeight(20),
      width: scaleWidth(20),
      resizeMode: 'cover',
    },
    activityText: {
      color: appTheme.colors.textColor,
      fontFamily: 'Nunito-Regular',
      fontSize: appTheme.dimen.textSize12,
      marginLeft: scaleWidth(10),
      width: scaleWidth(80),
    },
  });
