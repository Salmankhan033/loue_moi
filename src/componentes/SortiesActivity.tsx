import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ActivitiesCard from './ActivitiesCard';
import { scaleHeight, scaleWidth } from '../utils';

interface Activity {
  activity: string;
  source: any;
}

const Activities: Activity[] = [
  { activity: 'Badminton', source: require('../assets/icons/badmintonIcon.png') },
  { activity: 'Le basketball', source: require('../assets/icons/basketballIcon.png') },
  { activity: 'Course', source: require('../assets/icons/courseIcon.png') },
  { activity: 'Promener animaux', source: require('../assets/icons/promenerIcon.png') },
  { activity: 'Golf', source: require('../assets/icons/golfIcon.png') },
  { activity: 'Vélo', source: require('../assets/icons/veloIcon.png') },
  { activity: 'Planche a voile', source: require('../assets/icons/plancheIcon.png') },
  { activity: 'Peinture', source: require('../assets/icons/peintureIcon.png') },
  { activity: 'Gourmet', source: require('../assets/icons/gourmetIcon.png') },
  { activity: 'Équitation', source: require('../assets/icons/equitationIcon.png') },
  { activity: 'Musculation', source: require('../assets/icons/musculationIcon.png') },
  { activity: 'Cardio Fitness', source: require('../assets/icons/cardioIcon.png') },
  { activity: 'Squash', source: require('../assets/icons/squashIcon.png') },
  { activity: 'Nage', source: require('../assets/icons/nageIcon.png') },
];

const SortiesActivity: React.FC = () => {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const styles = createStyles();

  const handleSelectActivity = (activity: string) => {
    setSelectedActivities((prevSelectedActivities) => {
      if (prevSelectedActivities.includes(activity)) {
        return prevSelectedActivities.filter((item) => item !== activity);
      } else {
        return [...prevSelectedActivities, activity];
      }
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.listContentContainer}
        columnWrapperStyle={styles.columnWrapper}
        data={Activities}
        renderItem={({ item }) => (
          <ActivitiesCard
            item={item}
            selected={selectedActivities.includes(item.activity)}
            onSelect={() => handleSelectActivity(item.activity)}
          />
        )}
      />
    </View>
  );
};

export default SortiesActivity;

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    listContentContainer: {
      paddingBottom: scaleHeight(100),
    },
    columnWrapper: {
      justifyContent: 'space-between',
      marginTop: scaleHeight(20),
      width: scaleWidth(345),
      alignSelf: 'center',
    },
  });
