import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import LinearGradient from 'react-native-linear-gradient';
import { ifIphoneX } from 'react-native-iphone-x-helper'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Image, StyleSheet, Text, Platform, TouchableOpacity, View } from 'react-native';
import { StatusBarHeight } from '../constants/StatusBarHeight'
//import Colors from '../constants/Colors';
import { RouteKeys, SCREEN_TITLE } from './RouteKeys';
import SplashScreen from '../screens/OnBoardingScreens/SplashScreen';
import AppIntroScreen from '../screens/OnBoardingScreens/AppIntroScreen';
import WelcomeScreen from '../screens/OnBoardingScreens/WelcomeScreen';
import DescribeScreen from '../screens/AuthenticationScreens/describeScreen/DescribeScreen';
import SignupScreen from '../screens/AuthenticationScreens/signupScreen/SignupScreen';
import LoginScreen from '../screens/AuthenticationScreens/loginScreen/LoginScreen';
import ChangePassword from '../screens/Settings/changePassword/ChangePassword';
import ProfileScreen from '../screens/Settings/profileScreen/ProfileScreen';
import OtherUserProfileScreen from '../screens/OfferAndTasks/otherUserProfileScreen/OtherUserProfileScreen';
import SearchScreen from '../screens/Search/searchScreen/SearchScreen';
import { Strings, Colors } from '../constants';
import Images from '../assets/AppImages';
import SettingScreen from '../screens/Settings/settingScreen/SettingScreen';
import NotificationsScreen from '../screens/Notifications/notificationScreen/NotificationsScreen';
import ChatScreen from '../screens/Chat/chatScreen/ChatScreen';
import { fontScale } from '../constants/FontSize';
import PortfolioGallery from '../screens/Settings/portfolioGallery/PortfolioGallery';
import PaymentMethod from '../screens/Settings/paymentMethod/PaymentMethod';
import PaymentHistory from '../screens/Settings/paymentHistory/PaymentHistory';
import AvailabilityScreen from '../screens/Settings/availabilityScreen/AvailabilityScreen';
import HelpAndSupport from '../screens/Settings/helpAndSupport/HelpAndSupport';
import TermsAndConditions from '../screens/Settings/termsAndConditions/TermsAndConditions';
import PrivacyPolicy from '../screens/Settings/privacyPolicy/PrivacyPolicy';
import OffersAndTasks from '../screens/OfferAndTasks/offersAndTasks/OffersAndTasks';
import SignUpDetails from '../screens/AuthenticationScreens/signUpDetails';
import RequestJobs from '../screens/MyJobsScreens/requestJobs/RequestJobs';
import JobOffers from '../screens/MyJobsScreens/jobOffers/JobOffers';
import OnGoingJob from '../screens/MyJobsScreens/onGoingJob/OnGoingJob';
import CompletedJobs from '../screens/MyJobsScreens/completedJobs/CompletedJobs';
import DisclaimerScreen from '../screens/Settings/disclaimerScreen/DisclaimerScreen';

const RootNavigator = createStackNavigator();

const AppIntroNavigator = createStackNavigator();
function AppIntroScreenNaviagtor() {
  return (
    <AppIntroNavigator.Navigator>
      <AppIntroNavigator.Screen name={RouteKeys.APP_INTRO}
        component={AppIntroScreen} options={{ headerShown: false }} />


    </AppIntroNavigator.Navigator>
  )
}
const SignUpNavigator = createStackNavigator();
function SignUpScreenNaviagtor() {
  return (
    <SignUpNavigator.Navigator>
      <SignUpNavigator.Screen name={RouteKeys.SIGNUP}
        component={SignupScreen}
        options={{
          headerShown: false,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
        }} />
      <SignUpNavigator.Screen name={RouteKeys.LOGIN}
        component={LoginScreen}
        options={{
          // headerShown: false,
          headerBackTitleVisible: false,
          headerTitle: '',
          headerTintColor: 'black',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,

          },
        }} />
      <SignUpNavigator.Screen name={RouteKeys.SIGNUP_DETAILS}
        component={SignUpDetails}
        options={{
          // headerShown: false,
          headerBackTitleVisible: false,
          headerTitle: SCREEN_TITLE.SIGNUP_DETAILS,
          headerTintColor: Colors.WHITE,
          headerTitleAlign: 'center',
          // headerLeft: null,

          headerBackground: () => (
            <LinearGradient
              colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={[StyleSheet.absoluteFill, styles.container]}
            />
          )
          // headerStyle: {
          //   elevation: 0,
          //   shadowOpacity: 0,            
          // },
        }} />
    </SignUpNavigator.Navigator>
  )
}
const GradientHeader = props => (
  <View style={{ backgroundColor: '#eee' }}>
    <LinearGradient
      colors={['#00a8c3', '#00373f']}
      style={[StyleSheet.absoluteFill, styles.linearGradient]}
    />
    <Header {...props} style={{ backgroundColor: 'transparent' }} />
  </View>
);
const SettingNavigator = createStackNavigator();
function SettingScreenNaviagtor() {
  return (
    <SettingNavigator.Navigator>
      <SettingNavigator.Screen name={RouteKeys.SETTINGS}
        component={SettingScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: SCREEN_TITLE.SETTINGS,
          headerLeft: null,
          headerTintColor: Colors.WHITE,
          headerTitleAlign: 'center',
          headerBackground: () => (
            <LinearGradient
              colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={[StyleSheet.absoluteFill, styles.container]}
            />
          )
        }} />
      <SettingNavigator.Screen name={RouteKeys.CHANGE_PASSWORD}
        component={ChangePassword}
        options={{
          headerBackTitleVisible: false,
          headerTitle: SCREEN_TITLE.CHANGE_PASSWORD,
          headerTintColor: Colors.WHITE,
          headerTitleAlign: 'center',
          headerBackground: () => (
            <LinearGradient
              colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={[StyleSheet.absoluteFill, styles.container]}
            />
          )

        }} />
      <SettingNavigator.Screen name={RouteKeys.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          //  headerShown: false,
          headerBackTitleVisible: false,
          headerTitle: SCREEN_TITLE.PROFILE_SCREEN,
          headerTintColor: Colors.WHITE,
          headerTitleAlign: 'center',
          headerBackground: () => (
            <LinearGradient
              colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={[StyleSheet.absoluteFill, styles.container]}
            />
          )
        }} />
      <SettingNavigator.Screen name={RouteKeys.PORTFOLIO_GALLERY}
        component={PortfolioGallery}
        options={{
          //  headerShown: false,
          headerBackTitleVisible: false,
          headerTitle: SCREEN_TITLE.PORTFOLIO_GALLERY,
          headerTintColor: Colors.WHITE,
          headerTitleAlign: 'center',
          headerBackground: () => (
            <LinearGradient
              colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={[StyleSheet.absoluteFill, styles.container]}
            />
          )
        }} />
      <SettingNavigator.Screen name={RouteKeys.PAYMENT_METHOD}
        component={PaymentMethod}
        options={{
          headerBackTitleVisible: false,
          headerTitle: SCREEN_TITLE.PAYMENT_METHOD,
          headerTintColor: Colors.WHITE,
          headerTitleAlign: 'center',
          headerBackground: () => (
            <LinearGradient
              colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={[StyleSheet.absoluteFill, styles.container]}
            />
          )
        }} />
      <SettingNavigator.Screen name={RouteKeys.PAYMENT_HISTORY}
        component={PaymentHistory}
        options={{
          //  headerShown: false,
          headerBackTitleVisible: false,
          headerTitle: SCREEN_TITLE.PAYMENT_HISTORY,
          headerTintColor: Colors.WHITE,
          headerTitleAlign: 'center',
          headerBackground: () => (
            <LinearGradient
              colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={[StyleSheet.absoluteFill, styles.container]}
            />
          )
        }} />
      <SettingNavigator.Screen name={RouteKeys.AVAILABILITY_SCREEN}
        component={AvailabilityScreen}
        options={{
          //  headerShown: false,
          headerBackTitleVisible: false,
          headerTitle: SCREEN_TITLE.AVAILABILITY_SCREEN,
          headerTintColor: Colors.WHITE,
          headerTitleAlign: 'center',
          headerBackground: () => (
            <LinearGradient
              colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={[StyleSheet.absoluteFill, styles.container]}
            />
          )
        }} />
      <SettingNavigator.Screen name={RouteKeys.HELP_AND_SUPPORT}
        component={HelpAndSupport}
        options={{
          //  headerShown: false,
          headerBackTitleVisible: false,
          headerTitle: SCREEN_TITLE.HELP_AND_SUPPORT,
          headerTintColor: 'black',
          headerTitleAlign: 'center',
          headerBackground: () => (
            <LinearGradient
              colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={[StyleSheet.absoluteFill, styles.container]}
            />
          )



        }} />
      <SettingNavigator.Screen name={RouteKeys.TERMS_AND_CONDITIONS}
        component={TermsAndConditions}
        options={{
          //  headerShown: false,
          headerBackTitleVisible: false,
          headerTitle: SCREEN_TITLE.TERMS_AND_CONDITIONS,
          headerTintColor: Colors.WHITE,
          headerTitleAlign: 'center',
          headerBackground: () => (
            <LinearGradient
              colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={[StyleSheet.absoluteFill, styles.container]}
            />
          ),
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
        }} />
      <SettingNavigator.Screen name={RouteKeys.PRIVACY_POLICY}
        component={PrivacyPolicy}
        options={{
          //  headerShown: false,
          headerBackTitleVisible: false,
          headerTitle: SCREEN_TITLE.PRIVACY_POLICY,
          headerTintColor: Colors.WHITE,
          headerTitleAlign: 'center',
          headerBackground: () => (
            <LinearGradient
              colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={[StyleSheet.absoluteFill, styles.container]}
            />
          )
        }} />
      <SettingNavigator.Screen name={RouteKeys.DISCLAIMER}
        component={DisclaimerScreen}
        options={{
          //  headerShown: false,
          headerBackTitleVisible: false,
          headerTitle: SCREEN_TITLE.DISCLAIMER,
          headerTintColor: Colors.WHITE,
          headerTitleAlign: 'center',
          headerBackground: () => (
            <LinearGradient
              colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={[StyleSheet.absoluteFill, styles.container]}
            />
          )
        }} />
    </SettingNavigator.Navigator>
  )
}

const SearchNavigator = createStackNavigator();
function SearchScreenNaviagtor() {
  return (
    <SearchNavigator.Navigator>
      <SearchNavigator.Screen name={RouteKeys.SEARCH_SCREEN}
        component={SearchScreen} options={{
          headerBackTitleVisible: false,
          headerTitle: SCREEN_TITLE.SEARCH_SCREEN,
          headerLeft: null,
          headerTintColor: Colors.WHITE,
          headerTitleAlign: 'center',
          headerBackground: () => (
            <LinearGradient
              colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={[StyleSheet.absoluteFill, styles.container]}
            />
          )
        }} />


    </SearchNavigator.Navigator>
  )
}

//Chat Screens
const ChatNavigator = createStackNavigator();
function ChatScreenNaviagtor() {
  return (
    <ChatNavigator.Navigator>
      <ChatNavigator.Screen name={RouteKeys.CHAT_SCREEN}
        component={ChatScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: SCREEN_TITLE.CHAT_SCREEN,
          headerLeft: null,
          headerTintColor: Colors.WHITE,
          headerTitleAlign: 'center',
          headerBackground: () => (
            <LinearGradient
              colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={[StyleSheet.absoluteFill, styles.container]}
            />
          )
        }}
      />


    </ChatNavigator.Navigator>
  )
}


//Notifications Screens
const NotificationNavigator = createStackNavigator();
function NotificationScreenNaviagtor() {
  return (
    <NotificationNavigator.Navigator>
      <NotificationNavigator.Screen name={RouteKeys.NOTIFICATION_SCREEN}
        component={NotificationsScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: SCREEN_TITLE.NOTIFICATION_SCREEN,
          headerLeft: null,
          headerTintColor: Colors.WHITE,
          headerTitleAlign: 'center',
          headerBackground: () => (
            <LinearGradient
              colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={[StyleSheet.absoluteFill, styles.container]}
            />
          )
        }}
      />


    </NotificationNavigator.Navigator>
  )
}
//Setting Screens
const OfferAndTaskNavigator = createStackNavigator();
function OfferAndTaskScreenNaviagtor() {
  return (
    <OfferAndTaskNavigator.Navigator>
      <OfferAndTaskNavigator.Screen name={RouteKeys.OFFERS_AND_TASKS}
        component={OffersAndTasks}
        options={{
          headerBackTitleVisible: false,
          headerTitle: SCREEN_TITLE.OFFERS_AND_TASKS,
          headerLeft: null,
          headerTitleAlign: 'center',
          headerTintColor: Colors.WHITE,
          headerBackground: () => (
            <LinearGradient
              colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={[StyleSheet.absoluteFill, styles.container]}
            />
          )
        }} />

      <OfferAndTaskNavigator.Screen name={RouteKeys.OTHER_USER_PROFILE}
        component={OtherUserProfileScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: SCREEN_TITLE.OTHER_USER_PROFILE,
          headerLeft: null,
          headerTintColor: Colors.WHITE,
          headerTitleAlign: 'center',
          headerBackground: () => (
            <LinearGradient
              colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={[StyleSheet.absoluteFill, styles.container]}
            />
          )
        }} />


    </OfferAndTaskNavigator.Navigator>
  )
}

// const MyJobNavigator = createStackNavigator();
// function MyJobScreenNaviagtor() {
//   return (
//     <MyJobNavigator.Navigator>
//       <MyJobNavigator.Screen name={RouteKeys.REQUEST_JOBS}
//         component={SearchScreen} options={{
//           headerBackTitleVisible: false,
//           headerTitle: SCREEN_TITLE.REQUEST_JOBS,
//           headerLeft: null,
//           headerTintColor: Colors.WHITE,
//           headerTitleAlign: 'center',
//           headerBackground: () => (
//             <LinearGradient
//               colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
//               start={{ x: 0, y: 1 }}
//               end={{ x: 1, y: 0 }}
//               style={[StyleSheet.absoluteFill, styles.container]}
//             />
//           )
//         }} />


//     </MyJobNavigator.Navigator>
//   )
// }


const MyJobRequestNavigator = createStackNavigator();
function MyJobRequestScreenNavigator() {
  return (
    <MyJobRequestNavigator.Navigator>
      <MyJobRequestNavigator.Screen
        name={SCREEN_TITLE.REQUEST_JOBS}
        component={RequestJobs}
        options={{
          headerShown: false,
        }}
      />
    </MyJobRequestNavigator.Navigator>
  )
}
const OfferJobNavigator = createStackNavigator();
function OfferJobScreenNavigator() {
  return (
    <OfferJobNavigator.Navigator>
      <OfferJobNavigator.Screen
        name={SCREEN_TITLE.JOB_OFFERS}
        component={JobOffers}
        options={{
          headerShown: false,
        }}
      />
    </OfferJobNavigator.Navigator>
  )
}
const OngoingJobNavigator = createStackNavigator();
function OngoingJobsScreenNavigator() {
  return (
    <OngoingJobNavigator.Navigator>
      <OngoingJobNavigator.Screen
        name={SCREEN_TITLE.ONGOING_JOBS}
        component={OnGoingJob}
        options={{
          headerShown: false,
        }}
      />
    </OngoingJobNavigator.Navigator>
  )
}
const CompletedJobNavigator = createStackNavigator();
function CompletedRequestScreenNavigator() {
  return (
    <CompletedJobNavigator.Navigator>
      <CompletedJobNavigator.Screen
        name={SCREEN_TITLE.COMPLETED_JOBS}
        component={CompletedJobs}
        options={{
          headerShown: false,
        }}
      />
    </CompletedJobNavigator.Navigator>
  )
}

const MyJobsNavigator = createStackNavigator();
function MyJobsScreenNavigator() {
  return (
    <MyJobsNavigator.Navigator>
      <MyJobsNavigator.Screen name={RouteKeys.MY_JOBS}
        component={TopTabNeedAPro}
        options={{
          title: SCREEN_TITLE.MY_JOBS,
          headerLeft: null,
          headerTintColor: Colors.WHITE,
          headerTitleAlign: 'center',
          headerBackground: () => (
            <LinearGradient
              colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={[StyleSheet.absoluteFill, {
                height: Platform.OS === 'ios' ? StatusBarHeight + 60 : 60,
                width: wp('100%'),
                //  flexDirection:'row',
                justifyContent: 'flex-end',
                //zIndex:-1
                // alignItems: 'center',
              }]}
            >
              {/* <View style={{flexDirection:'row', justifyContent:'space-evenly', marginBottom:10,
}}>

  <Text style={{color:Colors.WHITE, textAlign:'center', fontSize:fontScale(12)}}>
 {SCREEN_TITLE.REQUEST_JOBS}
</Text>

<Text style={{color:Colors.WHITE, textAlign:'center', fontSize:fontScale(12)}}>
  {SCREEN_TITLE.JOB_OFFERS}
    </Text>

<Text style={{color:Colors.WHITE, textAlign:'center', fontSize:fontScale(12)}}>
  {SCREEN_TITLE.ONGOING_JOBS}
</Text>
<Text style={{color:Colors.WHITE, textAlign:'center', fontSize:fontScale(12)}}>
{SCREEN_TITLE.COMPLETED_JOBS}
</Text>
</View> */}
            </LinearGradient>
          ),
          headerTitleStyle: {
            // fontWeight: 'bold',
            fontSize: fontScale(16)
          },
          headerBackTitleVisible: false,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: Colors.LIGHT_CERISE
          },
        }} />


    </MyJobsNavigator.Navigator>
  )
}




const TopTabNeedAProNavigator = createMaterialTopTabNavigator();
function TopTabNeedAPro() {
  return (
    <TopTabNeedAProNavigator.Navigator

      tabBarOptions={{
        // activeTintColor:{backgroundColor:'green'},
        // tabStyle: () => (
        //             <LinearGradient
        //   colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
        //   start={{ x: 0, y: 1 }}
        //   end={{ x: 1, y: 0 }}
        //   style={[StyleSheet.absoluteFill, styles.container]}
        // />
        // ),
        // tabStyle: () => {
        //           <LinearGradient
        //   colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
        //   start={{ x: 0, y: 1 }}
        //   end={{ x: 1, y: 0 }}
        //   style={[StyleSheet.absoluteFill, styles.container]}
        // />
        // },
        labelStyle: { fontSize: fontScale(9), color: Colors.WHITE, fontWeight: 'bold' },
        // tabStyle: { width: 100 },
        style: { backgroundColor: Colors.GREEN },
        //style:{backgroundColor:'transparent', zIndex:1000, },
        // contentContainerStyle: () => (
        //   <LinearGradient
        //   colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
        //   start={{ x: 0, y: 1 }}
        //   end={{ x: 1, y: 0 }}
        //   style={[StyleSheet.absoluteFill, styles.container]}
        // />
        // )   ,     
        //activeTintColor: Colors.WHITE,
        // inactiveTintColor: Colors.YELLOW,
       // labelStyle: { fontSize: 8, color: Colors.WHITE },
        // style: { backgroundColor: 'powderblue' },
      }}
    >
      <TopTabNeedAProNavigator.Screen name={SCREEN_TITLE.REQUEST_JOBS}
        options={{ tabBarLabel: SCREEN_TITLE.REQUEST_JOBS, activeTintColor: 'red' }}

        component={MyJobRequestScreenNavigator} />
      <TopTabNeedAProNavigator.Screen name={SCREEN_TITLE.JOB_OFFERS}
        component={OfferJobScreenNavigator} />
      <TopTabNeedAProNavigator.Screen name={SCREEN_TITLE.ONGOING_JOBS}
        component={OngoingJobsScreenNavigator} />
      <TopTabNeedAProNavigator.Screen name={SCREEN_TITLE.COMPLETED_JOBS}
        component={CompletedRequestScreenNavigator} />
    </TopTabNeedAProNavigator.Navigator>
  )
}


//TAB NAVIGATOR BOTTOM TAB NEED A PRO
const Tab = createBottomTabNavigator();
function TabScreenNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.BLUE,
        inactiveTintColor: Colors.GRAY,
      }}
    >
      <Tab.Screen name={SCREEN_TITLE.SEARCH_SCREEN}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={Images.ic_search_icon_2} style={{ height: 20, width: 20, tintColor: color }} />
          )

        }}
        component={SearchScreenNaviagtor} />

      <Tab.Screen name={Strings.MY_JOBS}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={Images.ic_my_jobs} style={{ height: 20, width: 20, tintColor: color }} />
          )
        }}
        component={MyJobsScreenNavigator} />

      <Tab.Screen name={Strings.CHAT}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={Images.ic_chat}
              style={{
                height: 20,
                width: 20,
                tintColor: color,
                resizeMode: 'contain'
              }} />
          )

        }}
        component={ChatScreenNaviagtor} />

      <Tab.Screen name={Strings.NOTIFICATIONS}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={Images.ic_notification_bell}
              style={{
                height: 20,
                width: 20,
                tintColor: color
              }} />
          )

        }}
        component={NotificationScreenNaviagtor} />

      <Tab.Screen name={Strings.SETTINGS}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={Images.ic_settings} style={{ height: 20, width: 20, tintColor: color }} />
          )

        }}
        component={SettingScreenNaviagtor} />
    </Tab.Navigator>
  )
}





//TAB NAVIGATOR Bottom tabs for a Pro
const PRO_Tab = createBottomTabNavigator();
function ProTabScreenNavigator() {
  return (
    <PRO_Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.BLUE,
        inactiveTintColor: Colors.GRAY,
      }}
    >
      <PRO_Tab.Screen name={SCREEN_TITLE.SEARCH_SCREEN}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={Images.ic_search_icon_2} style={{ height: 20, width: 20, tintColor: color }} />
          )

        }}
        component={SearchScreenNaviagtor} />

      <PRO_Tab.Screen name={Strings.OFFERS_AND_TASKS}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={Images.ic_search_icon_2} style={{ height: 20, width: 20, tintColor: color }} />
          )
        }}
        component={OfferAndTaskScreenNaviagtor} />

      <PRO_Tab.Screen name={Strings.CHAT}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={Images.ic_chat}
              style={{
                height: 20,
                width: 20,
                tintColor: color,
                resizeMode: 'contain'
              }} />
          )

        }}
        component={ChatScreenNaviagtor} />

      <PRO_Tab.Screen name={Strings.NOTIFICATIONS}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={Images.ic_notification_bell}
              style={{
                height: 20,
                width: 20,
                tintColor: color
              }} />
          )

        }}
        component={NotificationScreenNaviagtor} />

      <PRO_Tab.Screen name={Strings.SETTINGS}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={Images.ic_settings} style={{ height: 20, width: 20, tintColor: color }} />
          )

        }}
        component={SettingScreenNaviagtor} />
    </PRO_Tab.Navigator>
  )
}


export const Router = () => {
  return (
    <NavigationContainer>
      <RootNavigator.Navigator >
        <RootNavigator.Screen name={RouteKeys.SPLASH}
          component={SplashScreen}
          options={{ headerShown: false }} />
        <RootNavigator.Screen name={RouteKeys.APP_INTRO}
          component={AppIntroScreenNaviagtor}
          options={{ headerShown: false }}
        // options={{
        //   headerBackTitleVisible: false,
        //   headerTintColor: '#fff',
        //   headerTitleAlign: 'center'
        // }}
        />
        <RootNavigator.Screen name={RouteKeys.WELCOME}
          component={SignUpScreenNaviagtor}
          options={{ headerShown: false }} />

        {/* Tab Navigator */}
        <RootNavigator.Screen name={RouteKeys.SEARCH}
          component={TabScreenNavigator}
          options={{ headerShown: false }} />

        {/* <RootNavigator.Screen name={RouteKeys.CHANGE_PASSWORD}
          component={SettingScreenNaviagtor}
          options={{ headerShown: false }} /> */}


      </RootNavigator.Navigator>

    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    // height: StatusBarHeight+30,
    //   ...ifIphoneX({
    //     height:80,
    //     paddingTop: 30
    // }, {
    //   height: 50,
    //   paddingTop: 0
    // }),
    height: Platform.OS === 'ios' ? StatusBarHeight + 60 : 60,
    
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',

    //paddingTop:StatusBarHeight
    //backgroundColor: Colors.WHITE
  },
  headerText: {
    fontSize: fontScale(16),
    color: Colors.WHITE,
    marginTop: Platform.OS === 'ios' ? StatusBarHeight : 0,
  }
})


{/* <LinearGradient
colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
start={{ x: 0, y: 1 }}
end={{ x: 1, y: 0 }}
style={[StyleSheet.absoluteFill, {  height: Platform.OS === 'ios' ? StatusBarHeight + 100 : 90,
  width: wp('100%'),
//  flexDirection:'row',
  justifyContent: 'flex-end',

 // alignItems: 'center',
}]}
>
<View style={{flexDirection:'row', justifyContent:'space-evenly', marginBottom:10,
}}>
    <TouchableOpacity
onPress={() => {
 navigation.navigate(RouteKeys.REQUEST_JOBS)
}}>
  <Text style={{color:Colors.WHITE, textAlign:'center', fontSize:fontScale(12)}}>
 {SCREEN_TITLE.REQUEST_JOBS}
</Text>
  </TouchableOpacity>
  <TouchableOpacity
onPress={() => {
 navigation.navigate(RouteKeys.JOB_OFFERS)
}}>
<Text style={{color:Colors.WHITE, textAlign:'center', fontSize:fontScale(12)}}>
  {SCREEN_TITLE.JOB_OFFERS}
    </Text>
    </TouchableOpacity>
<Text style={{color:Colors.WHITE, textAlign:'center', fontSize:fontScale(12)}}>
  {SCREEN_TITLE.ONGOING_JOBS}
</Text>
<Text style={{color:Colors.WHITE, textAlign:'center', fontSize:fontScale(12)}}>
{SCREEN_TITLE.COMPLETED_JOBS}
</Text>
</View>
</LinearGradient> */}