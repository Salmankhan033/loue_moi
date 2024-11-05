import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  PermissionsAndroid,
  Platform,
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
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
import Geolocation from 'react-native-geolocation-service';
const InviteScreen: React.FC = () => {
  const {appTheme} = useColor();
  const [isChecked, setIsChecked] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
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
  const [location, setLocation] = useState({
    latitude: 33.643915,
    longitude: 73.172782,
  });
  const mapRef = useRef(null);
  const {navigation} = useAppContext();
  const styles = createStyles(appTheme);
  useEffect(() => {
    requestLocationPermission();
    getCurrentLocation();
  }, []);
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
        // setLocationLoaded(true);
      },
      error => {
        console.error('ERROR///', error);
        // Alert.alert('Error getting location', error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  const centerMapOnUser = () => {
    if (location && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          ...location,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        1000,
      ); // 1000 ms animation duration
    }
  };

  async function requestLocationPermission() {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message:
              'This app needs access to your location to show nearby places.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  }
  const initialRegion = {
    latitude: location ? location.latitude : 37.78825,
    longitude: location ? location.longitude : -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const gotoNext = () => {
    navigation.navigate(Screen.Schedules);
  };

  return (
    <ParentScreen>
      <View style={styles.container}>
        <InviteHeader />
        <ScrollView
          scrollEnabled={true}
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
            <GooglePlacesAutocomplete
              placeholder="Rechercher"
              currentLocation={false}
              currentLocationLabel="Current location"
              onPress={(data, details = null) => {
                console.log('///////', data, '...///..//..', details);
              }}
              query={{
                key: 'AIzaSyD3UuU_wIovVFcy6aXfDf3vtYnJyJG7i-k',
                language: 'en',
              }}
              styles={{
                container: styles.searchContainer,
                textInput: styles.searchInput,
                listView: styles.listView,
              }}
              // Custom left button for search icon
              renderLeftButton={() => (
                <Image
                  style={styles.icon}
                  source={require('../../assets/icons/SearchIcon.png')}
                />
              )}
              textInputProps={{
                placeholderTextColor: '#fff',
                marginTop: scaleHeight(5),
              }}
            />

            <MapView
              style={styles.map}
              initialRegion={initialRegion}
              ref={mapRef}
              showsUserLocation={true}
              showsMyLocationButton={false} // Disable default location button
            >
              {location && (
                <Marker coordinate={location}>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      // marginTop: scaleHeight(-4),
                      // backgroundColor: 'red',
                    }}>
                    <Image
                      source={require('../../assets/icons/markpin.png')}
                      style={{
                        width: scaleWidth(20),
                        height: scaleWidth(20),
                        borderRadius: scaleWidth(10),
                        // marginTop: scaleHeight(-5),
                      }}
                    />
                    <Image
                      source={require('../../assets/icons/markpinttom.png')}
                      style={{
                        width: scaleWidth(8),
                        height: scaleWidth(8),
                        borderRadius: scaleWidth(4),
                        marginTop: scaleHeight(-5),
                      }}
                    />
                  </View>
                </Marker>
              )}
            </MapView>
            <TouchableOpacity
              onPress={centerMapOnUser}
              style={styles.geoLocateButton}>
              <Text style={styles.geoLocateText}>Me géolocaliser</Text>
              <Image source={require('../../assets/icons/marker-pin.png')} />
            </TouchableOpacity>
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
          <View style={styles.buttonContainer}>
            <PrimaryButton
              title={'Inviter '}
              withIcon={true}
              Icon={require('../../assets/icons/inviteButtonIcon.png')}
              onPress={gotoNext}
            />
          </View>
        </ScrollView>
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
      paddingBottom: scaleHeight(20),
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
      height: scaleWidth(80),
      resizeMode: 'cover',
      borderRadius: scaleWidth(40),
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
      marginRight: scaleWidth(5),
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
      backgroundColor: 'red',
    },
    searchContainer: {
      position: 'absolute',
      top: 20,
      left: 10,
      right: 10,
      zIndex: 1,
      // backgroundColor: '#0000004D',
      height: scaleHeight(40),
      borderRadius: scaleWidth(20),
      // paddingVertical: 15,
      overflow: 'hidden',
      backgroundColor: 'rgba(0,0,0,0.3)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput: {
      height: 40,
      backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background
      borderRadius: 20, // Rounded edges
      paddingLeft: 35, // Space for the icon
      fontSize: 16,
      color: 'blue', // White text color for the input
    },
    listView: {
      backgroundColor: '#fff',
      borderRadius: 15,
      marginHorizontal: 10,
    },
    icon: {
      position: 'absolute',
      top: 10,
      left: 10,
      zIndex: 1,
    },
    searchInput: {
      width: scaleWidth(250),
      paddingLeft: scaleWidth(40),
      height: scaleHeight(40),
      color: appTheme.colors.black,
      fontSize: appTheme.dimen.textSize17,
      fontFamily: 'Nunito-Regular',
      backgroundColor: '#0000004D',
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
      // position: 'absolute',
      // bottom: scaleHeight(16),
      marginTop: scaleHeight(50),
    },
    geoLocateButton: {
      position: 'absolute',
      bottom: 20,
      alignSelf: 'center',
      backgroundColor: appTheme.colors.secondaryTransparent,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    geoLocateText: {
      color: appTheme.colors.secondaryTextColor,
      fontSize: 16,
      paddingRight: scaleWidth(10),
    },
  });
