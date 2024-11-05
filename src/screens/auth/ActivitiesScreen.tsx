import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ParentScreen from '../ParentScreen';
import {contents, useAppContext, useColor} from '../../context';
import AuthHeader from '../../componentes/AuthHeader';
import {scaleHeight, scaleWidth} from '../../utils';
import PrimaryButton from '../../componentes/PrimaryButton';
import {
  TabView,
  SceneMap,
  TabBar,
  NavigationState,
} from 'react-native-tab-view';
import SortiesActivity from '../../componentes/SortiesActivity';
import {Screen} from '../../navigation/appNavigation.type';

type Route = {
  key: string;
  title: string;
};

type ActivitiesScreenProps = NavigationState<Route>;

const renderScene = SceneMap({
  first: SortiesActivity,
  second: SortiesActivity,
  third: SortiesActivity,
});

const ActivitiesScreen: React.FC = () => {
  const {appTheme} = useColor();
  const [index, setIndex] = useState<number>(0);
  const {navigation} = useAppContext();
  const styles = createStyles(appTheme);

  const [routes] = useState<Route[]>([
    {key: 'first', title: 'Sorties'},
    {key: 'second', title: 'Sport'},
    {key: 'third', title: 'Détente'},
  ]);

  const gotoNext = () => {
    navigation.navigate(Screen.Invite);
  };

  const gotoBack = () => {
    if (navigation.canGoBack()) {
      navigation.navigate(Screen.PersonalInfo);
    }
  };

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      renderLabel={({route, focused, index}) => (
        <View>
          <View style={styles.tabContainer}>
            <Text style={styles.tabLabel}>{route.title}</Text>
          </View>
          <View>
            <View style={styles.separator} />
          </View>
        </View>
      )}
      tabStyle={styles.tabStyle}
    />
  );

  return (
    <ParentScreen>
      <View style={styles.container}>
        <AuthHeader title={contents('ActivitiesHeader')} onPress={gotoBack} />
        <Text style={styles.headerText}>
          Quelles sont vos activités favorites?
        </Text>

        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: scaleWidth(345)}}
          renderTabBar={renderTabBar}
        />

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title={contents('Suivant')}
            withIcon={true}
            Icon={require('../../assets/icons/forwordArrowIcon.png')}
            onPress={gotoNext}
          />
        </View>
      </View>
    </ParentScreen>
  );
};

export default ActivitiesScreen;

const createStyles = (appTheme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: appTheme.colors.background,
    },
    headerText: {
      color: appTheme.colors.textColor,
      fontFamily: 'Nunito-SemiBold',
      fontSize: appTheme.dimen.textSize18,
      marginLeft: scaleWidth(30),
      marginTop: scaleHeight(30),
    },
    tabBar: {
      backgroundColor: appTheme.colors.gray600,
      width: scaleWidth(345),
      alignSelf: 'center',
      borderRadius: scaleHeight(5),
      marginVertical: scaleHeight(10),
      justifyContent: 'center',
      shadowOpacity: 0,
      elevation: 0,
    },
    tabStyle: {
      width: scaleWidth(113),
    },
    tabContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    separator: {
      width: 1,
      height: scaleHeight(12),
      backgroundColor: appTheme.colors.grey100,
      marginLeft: scaleWidth(-36),
      marginTop: scaleWidth(-15),
    },
    indicator: {
      backgroundColor: appTheme.colors.grey100,
      width: scaleWidth(115),
      height: '90%',
      borderRadius: scaleHeight(10),
      alignSelf: 'center',
    },
    tabLabel: {
      color: appTheme.colors.white,
      fontFamily: 'Nunito-SemiBold',
      fontSize: appTheme.dimen.textSize16,
      alignSelf: 'center',
    },
    buttonContainer: {
      alignSelf: 'center',
      position: 'absolute',
      bottom: scaleHeight(16),
    },
  });
