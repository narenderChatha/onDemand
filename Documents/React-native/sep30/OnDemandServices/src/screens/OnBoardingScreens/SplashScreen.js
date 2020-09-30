import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  LogBox,
} from 'react-native';
import LottieView from 'lottie-react-native';
import Images from '../../assets/AppImages';
import FontName from '../../constants/FontName';
import { StackActions } from '@react-navigation/native';
import { Strings, Scaling } from '../../constants';
import { RouteKeys } from '../../routes/RouteKeys';

LogBox.ignoreAllLogs(true)

const SplashScreen = (props) => {
 
  useEffect(() => {
   // getData();
  setTimeout(function () { 
    props.navigation.dispatch(StackActions.replace(RouteKeys.APP_INTRO));
   // props.navigation.navigate('app_intro')
   }, 2000);
  });
  return (
    <>
          <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.body}>
          {/* <Text style={{  fontSize: 22,
              fontFamily: FontName.SF_PRO_DISPLAY_MEDIUM, marginBottom:40}}>{Strings.PROJECT_NAME}</Text> */}
         <Image source={Images.ic_splash_logo} style={{width:Scaling.WIDTH_SCALE_210,
           height:Scaling.HEIGHT_SCALE_200, resizeMode:'contain'}}/>
        </View>
       </SafeAreaView>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
    },
    
  });
  