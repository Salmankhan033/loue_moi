import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ParentScreen from '../ParentScreen';
import {contents, useAppContext, useColor} from '../../context';
import InviteHeader from '../../componentes/InviteHeader';
import {scaleHeight, scaleWidth} from '../../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import PrimaryButton from '../../componentes/PrimaryButton';
import MapView, {Marker} from 'react-native-maps';
import {Screen} from '../../navigation/appNavigation.type';

const Activities = [
  {
    id: 5,
    activity: 'Golf',
    source: require('../../assets/icons/golfIcon.png'),
    commun: false,
    favorites: false,
  },
  {
    id: 4,
    activity: 'Promener animaux',
    source: require('../../assets/icons/promenerIcon.png'),
    commun: false,
    favorites: false,
  },
  {
    id: 6,
    activity: 'Vélo',
    source: require('../../assets/icons/veloIcon.png'),
    commun: false,
    favorites: false,
  },

  {
    id: 2,
    activity: 'Le basketball',
    source: require('../../assets/icons/basketballIcon.png'),
    commun: true,
    favorites: false,
  },
  {
    id: 3,
    activity: 'Course',
    source: require('../../assets/icons/courseIcon.png'),
    commun: false,
    favorites: true,
  },
  {
    id: 14,
    activity: 'Nage',
    source: require('../../assets/icons/nageIcon.png'),
    commun: false,
    favorites: false,
  },

  {
    id: 8,
    activity: 'Peinture',
    source: require('../../assets/icons/peintureIcon.png'),
    commun: false,
    favorites: false,
  },
  {
    id: 9,
    activity: 'Gourmet',
    source: require('../../assets/icons/gourmetIcon.png'),
    commun: false,
    favorites: false,
  },
  {
    id: 10,
    activity: 'Équitation',
    source: require('../../assets/icons/equitationIcon.png'),
    commun: false,
    favorites: false,
  },

  {
    id: 12,
    activity: 'Cardio Fitness',
    source: require('../../assets/icons/cardioIcon.png'),
    commun: false,
    favorites: false,
  },

  {
    id: 1,
    activity: 'Badminton',
    source: require('../../assets/icons/badmintonIcon.png'),
    commun: false,
    favorites: false,
  },

  {
    id: 14,
    activity: 'Nage',
    source: require('../../assets/icons/nageIcon.png'),
    commun: false,
    favorites: false,
  },
];

const InviteScreen: React.FC = () => {
  const {appTheme} = useColor();
  const [isChecked, setIsChecked] = useState(false);
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const {navigation} = useAppContext();
  const styles = createStyles(appTheme);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };
  const initialRegion = {
    latitude: 30.2564,
    longitude: -97.7635,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const gotoNext = () => {
    navigation.navigate(Screen.Schedules);
  };

  return (
    <ParentScreen>
      <View style={styles.container}>
        <InviteHeader />
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.profileContainer}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQ-4Iue5GllXgqoVIbuStLOJ49ot8DFslQQ&s',
              }}
              style={styles.profileImage}
            />
            <View style={styles.profileDetails}>
              <Text style={styles.profileName}>Eglantine - 12 km</Text>
              <Text style={styles.profileAge}>84 ans</Text>
              <View style={styles.profileStatusContainer}>
                <View style={styles.singleStatus}>
                  <Text style={styles.statusText}>Célibataire</Text>
                </View>
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>4.8</Text>
                  <AntDesign
                    name={'star'}
                    size={scaleHeight(17)}
                    color={appTheme.colors.FoundationRed}
                  />
                </View>
              </View>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Choisir une activité :</Text>

          <FlatList
            data={Activities}
            numColumns={3}
            columnWrapperStyle={styles.activityColumn}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => setSelectedActivity(item)}>
                <View
                  style={[
                    styles.activityItem,
                    item.id === selectedActivity?.id && {
                      borderColor: appTheme.colors.red20,
                      backgroundColor: appTheme.colors.red10,
                      borderWidth: 1,
                    },
                  ]}>
                  <Image source={item.source} style={styles.activityIcon} />
                  <Text style={styles.activityText}>{item.activity}</Text>
                </View>
              </TouchableOpacity>
            )}
          />

          <View style={styles.legendContainer}>
            <View style={styles.legendItem}>
              <View
                style={[
                  styles.legendMarker,
                  {borderColor: appTheme.colors.red20},
                ]}
              />
              <Text style={styles.legendText}>Activites en commun</Text>
            </View>
            <View style={styles.legendItem}>
              <View
                style={[
                  styles.legendMarker,
                  {borderColor: appTheme.colors.blue10},
                ]}
              />
              <Text style={styles.legendText}>
                Activites favorites de Eglantine
              </Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Choisir un lieu :</Text>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={initialRegion}
              showsUserLocation={true}>
              <Marker coordinate={{latitude: 30.2564, longitude: -97.7635}}>
                <View style={styles.markerContainer}>
                  <Image
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLBQAGacs4fThc3xP4vGWwGTnbOdO9l-4tCg&s',
                    }}
                    style={styles.markerImage}
                  />
                </View>
              </Marker>
            </MapView>
            <View style={styles.searchContainer}>
              <Feather
                name={'search'}
                size={scaleHeight(20)}
                color={appTheme.colors.textColor}
              />
              <TextInput
                placeholder="Rechercher"
                placeholderTextColor={appTheme.colors.textColor}
                value={searchLocation}
                onChangeText={text => setSearchLocation(text)}
                style={styles.searchInput}
              />
            </View>
          </View>

          <Text style={styles.sectionTitle}>Choisir une date :</Text>
          <View style={styles.dateContainer}>
            {/* Date Picker */}
            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={styles.dateBox}>
              <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onChangeDate}
              />
            )}

            <TouchableOpacity
              onPress={() => setShowTimePicker(true)}
              style={styles.dateBox2}>
              <Text style={styles.dateText}>
                {time.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
                })}
              </Text>
            </TouchableOpacity>
            {showTimePicker && (
              <DateTimePicker
                value={time}
                mode="time"
                display="default"
                onChange={onChangeTime}
              />
            )}
          </View>

          <View style={styles.agreementContainer}>
            <TouchableOpacity
              onPress={() => setIsChecked(!isChecked)}
              style={styles.checkbox}>
              {isChecked && (
                <AntDesign
                  name={'check'}
                  size={scaleHeight(20)}
                  color={appTheme.colors.primary}
                />
              )}
            </TouchableOpacity>
            <Text style={styles.agreementText}>
              En invitant Eglantine, vous vous engagez a payer 12,50 euros (10
              euros + 2,50 euros de frais) pour participer à ses frais de
              déplacement.
            </Text>
          </View>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title={'Inviter '}
            withIcon={true}
            Icon={require('../../assets/icons/inviteButtonIcon.png')}
            onPress={gotoNext}
          />
        </View>
      </View>
    </ParentScreen>
  );
};

export default InviteScreen;

const createStyles = (appTheme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: appTheme.colors.background,
      paddingHorizontal: scaleWidth(24),
    },
    scrollContainer: {
      paddingBottom: scaleHeight(100),
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
    profileDetails: {
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
    profileStatusContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: scaleHeight(15),
    },
    singleStatus: {
      width: scaleWidth(84),
      height: scaleHeight(25),
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
    sectionTitle: {
      color: appTheme.colors.textColor,
      fontSize: appTheme.dimen.textSize18,
      fontFamily: 'Nunito-Regular',
      marginTop: scaleHeight(20),
      marginBottom: scaleHeight(10),
    },
    activityColumn: {
      justifyContent: 'space-between',
      marginTop: scaleHeight(5),
      alignItems: 'flex-start',
    },
    activityItem: {
      flexDirection: 'row',
      padding: scaleWidth(6),
      borderRadius: scaleWidth(76),
      backgroundColor: appTheme.colors.grey100,
      alignContent: 'center',
      justifyContent: 'center',
      paddingHorizontal: scaleWidth(10),
      marginTop: scaleHeight(5),
    },
    activityIcon: {
      height: scaleHeight(20),
      width: scaleWidth(20),
      resizeMode: 'cover',
    },
    activityText: {
      color: appTheme.colors.textColor,
      fontFamily: 'Nunito-Regular',
      fontSize: appTheme.dimen.textSize12,
      marginLeft: scaleWidth(7),
    },
    legendContainer: {
      flexDirection: 'row',
      marginTop: scaleHeight(20),
    },
    legendItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: scaleWidth(20),
    },
    legendMarker: {
      width: scaleWidth(14),
      height: scaleHeight(6),
      borderWidth: scaleWidth(1),
      borderRadius: 72,
    },
    legendText: {
      color: appTheme.colors.textColor,
      fontFamily: 'Nunito-Regular',
      fontSize: appTheme.dimen.textSize10,
      marginLeft: scaleWidth(10),
      width: scaleWidth(90),
    },
    mapContainer: {
      height: scaleHeight(287),
      width: scaleWidth(345),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: scaleWidth(16),
      overflow: 'hidden',
      marginTop: scaleHeight(10),
    },
    map: {
      height: scaleHeight(287),
      width: scaleWidth(345),
      borderRadius: 16,
    },
    markerContainer: {
      borderWidth: 3,
      borderColor: '#fff',
      borderRadius: 25,
      overflow: 'hidden',
    },
    markerImage: {
      width: scaleWidth(40),
      height: scaleHeight(40),
    },
    searchContainer: {
      width: scaleWidth(325),
      height: scaleHeight(40),
      backgroundColor: appTheme.colors.grey600,
      position: 'absolute',
      borderRadius: 25,
      top: scaleHeight(30),
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: scaleWidth(20),
    },
    searchInput: {
      width: scaleWidth(250),
      marginLeft: scaleWidth(10),
      height: scaleHeight(40),
      color: appTheme.colors.black,
      fontSize: appTheme.dimen.textSize17,
      fontFamily: 'Nunito-Regular',
    },
    dateContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: scaleHeight(20),
    },
    dateBox: {
      backgroundColor: appTheme.colors.grey800,
      width: scaleWidth(228),
      height: scaleHeight(39),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
    },
    dateBox2: {
      backgroundColor: appTheme.colors.grey800,
      width: scaleWidth(101),
      height: scaleHeight(39),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
    },
    dateText: {
      color: appTheme.colors.gray1,
      fontSize: appTheme.dimen.textSize20,
      fontFamily: 'Nunito-Regular',
    },
    agreementContainer: {
      flexDirection: 'row',
      marginTop: scaleHeight(30),
    },
    checkbox: {
      width: scaleWidth(24),
      height: scaleWidth(24),
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: appTheme.colors.primary,
      borderRadius: 4,
    },
    agreementText: {
      color: appTheme.colors.textColor,
      fontFamily: 'Nunito-Regular',
      fontSize: appTheme.dimen.textSize14,
      marginLeft: scaleWidth(10),
    },
    buttonContainer: {
      alignSelf: 'center',
      position: 'absolute',
      bottom: scaleHeight(16),
    },
  });
