import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ParentScreen from '../ParentScreen';
import {useAppContext, useColor} from '../../context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {scaleHeight, scaleWidth} from '../../utils';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Screen} from '../../navigation/appNavigation.type';

const FirstRoute: React.FC = () => {
  const {appTheme} = useColor();
  const {navigation} = useAppContext();
  const styles = createStyles(appTheme);

  const gotoNext = () => {
    navigation.navigate(Screen.AcceptInvite);
  };

  return (
    <View style={styles.routeContainer}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={() => (
          <TouchableOpacity onPress={gotoNext} style={styles.inviteCard}>
            <View style={styles.inviteDetails}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQ-4Iue5GllXgqoVIbuStLOJ49ot8DFslQQ&s',
                }}
                style={styles.profileImage}
              />
              <View style={styles.inviteInfo}>
                <Text style={styles.inviteName}>Eglantine - 12 km</Text>
                <Text style={styles.inviteAge}>84 ans</Text>
                <View style={styles.statusContainer}>
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
            <View style={styles.appointmentContainer}>
              <Text style={styles.appointmentLabel}>Mon RDV:</Text>
              <View style={styles.appointmentBox}>
                <Text style={styles.appointmentText}>12/ 10/ 2024 à 12h30</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: FirstRoute,
});

const SchedulesScreen: React.FC = () => {
  const {appTheme} = useColor();
  const {navigation} = useAppContext();
  const styles = createStyles(appTheme);

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Invitations envoyées'},
    {key: 'second', title: 'Invitations reçues'},
  ]);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={styles.tabIndicator}
      style={styles.tabBar}
      renderLabel={({route, focused}) => (
        <Text
          style={[
            styles.tabLabel,
            focused && {color: appTheme.colors.primary},
          ]}>
          {route.title}
        </Text>
      )}
    />
  );

  const gotoBack = () => {
    navigation.goBack();
  };

  return (
    <ParentScreen>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={gotoBack}>
            <AntDesign
              name="left"
              color={appTheme.colors.textColor}
              size={scaleWidth(18)}
            />
          </TouchableOpacity>

          <View style={styles.iconContainer}>
            <AntDesign
              name="calendar"
              color={appTheme.colors.textColor}
              size={scaleWidth(20)}
            />
          </View>
          <Text style={styles.headerTitle}>Mes propositions de RDV</Text>
        </View>

        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          initialLayout={{width: scaleWidth(393)}}
        />
      </View>
    </ParentScreen>
  );
};

export default SchedulesScreen;

const createStyles = (appTheme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: appTheme.colors.background,
    },
    routeContainer: {
      flex: 1,
      backgroundColor: appTheme.colors.background,
      paddingHorizontal: scaleWidth(24),
    },
    inviteCard: {
      backgroundColor: appTheme.colors.grey800,
      padding: scaleWidth(16),
      borderRadius: 16,
      marginTop: scaleHeight(10),
    },
    inviteDetails: {
      flexDirection: 'row',
    },
    profileImage: {
      width: scaleWidth(80),
      height: scaleWidth(80),
      resizeMode: 'cover',
      borderRadius: scaleHeight(100),
    },
    inviteInfo: {
      marginLeft: scaleWidth(20),
    },
    inviteName: {
      color: appTheme.colors.textColor,
      fontSize: appTheme.dimen.textSize18,
      fontFamily: 'Nunito-Bold',
    },
    inviteAge: {
      color: appTheme.colors.FoundationBlue1,
      fontSize: appTheme.dimen.textSize16,
      fontFamily: 'Nunito-Regular',
    },
    statusContainer: {
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
    appointmentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: scaleHeight(25),
    },
    appointmentLabel: {
      color: appTheme.colors.FoundationBlue1,
      fontSize: appTheme.dimen.textSize14,
      fontFamily: 'Nunito-SemiBold',
    },
    appointmentBox: {
      width: scaleWidth(171),
      height: scaleHeight(31),
      backgroundColor: appTheme.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: scaleWidth(40),
    },
    appointmentText: {
      color: appTheme.colors.textColor,
      fontSize: appTheme.dimen.textSize14,
      fontFamily: 'Nunito-SemiBold',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      width: scaleWidth(345),
      alignSelf: 'center',
      paddingTop: scaleHeight(10),
    },
    iconContainer: {
      width: scaleWidth(42),
      height: scaleHeight(42),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: appTheme.colors.grey800,
      borderRadius: scaleWidth(40),
      marginHorizontal: scaleWidth(10),
    },
    headerTitle: {
      color: appTheme.colors.textColor,
      fontSize: appTheme.dimen.textSize18,
      fontFamily: 'Nunito-SemiBold',
      textAlign: 'center',
    },
    tabBar: {
      backgroundColor: appTheme.colors.background,
      elevation: 0,
    },
    tabIndicator: {
      backgroundColor: appTheme.colors.primary,
      height: scaleHeight(2),
    },
    tabLabel: {
      color: appTheme.colors.textColor,
      fontFamily: 'Nunito-SemiBold',
      fontSize: scaleWidth(16),
      textTransform: 'capitalize',
    },
  });
