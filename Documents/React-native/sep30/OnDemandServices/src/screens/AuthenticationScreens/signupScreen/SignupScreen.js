import React, { useState, useEffect } from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ScrollView,
  BackHandler,
  ToastAndroid,
  SafeAreaView,
  StatusBar
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//import {Button} from '../../common/widgets';
import { FontName, Colors, Strings, Scaling } from '../../../constants';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { useIsFocused } from "@react-navigation/native";
import { Button, SignUpFacebookButton, SignUpAppleButton, SignUpGmailButton } from '../../../common/widgets/Button';
import { RouteKeys } from '../../../routes/RouteKeys';
import Images from '../../../assets/AppImages';
import { fontScale } from '../../../constants/FontSize';

let backPressed = 0;
const SignupScreen = (props) => {
  const isFocused = useIsFocused();
  const [checked, setChecked] = useState(false)
  //const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setChecked(previousState => !previousState);

  const onSignUpPress = () => {
    props.navigation.navigate(RouteKeys.SIGNUP_DETAILS);
  };


  return (
    <>
      {/* <SafeAreaView style={{flex:1}}>
        <StatusBar setBackgroundColor={Colors.WHITE}/> */}
      <ScrollView
        contentContainerStyle={styles.container}
        style={{ flex: 1, backgroundColor: Colors.WHITE }}
      >
        <View style={{ flex: 0.9, justifyContent: 'center' }}>
          {/* <Text style={styles.welcome_text}>{Strings.WELCOME_TO_HYNGE}</Text> */}
          <Image source={Images.ic_logo} style={{
          height: Scaling.WIDTH_SCALE_100,
          width: Scaling.WIDTH_SCALE_100,
          borderRadius:Scaling.HEIGHT_SCALE_210,
          alignSelf: 'center',
          marginBottom: Scaling.HEIGHT_SCALE_10,
          marginTop: 20,
          resizeMode: 'contain'
              }}/>
          {/* <Text style={styles.description_text}>{Strings.WELCOME_TO_HYNGE_DESCRIPTION}</Text> */}

          <Button
            text={Strings.SIGNUP_BUTTON}
            onButtonPress={() => onSignUpPress()}
            viewStyle={styles.loginView}
          />
          <SignUpGmailButton
            text={Strings.SIGNUP_GMAIL_BUTTON}
          //  onButtonPress={() => onSignUpPress()}
            viewStyle={styles.loginView}
          />
          <SignUpFacebookButton
            text={Strings.SIGNU_FACEBOOK_BUTTON}
           // onButtonPress={() => onSignUpPress()}
            viewStyle={styles.loginView}
          />
          <SignUpAppleButton
            text={Strings.SIGNUP_APPLE}
          //  onButtonPress={() => onSignUpPress()}
            viewStyle={styles.loginView}
          />
          <View>
            <View>
            <TouchableOpacity style={styles.checkboxView} onPress={toggleSwitch}>
              <Image source={checked ? Images.ic_checked_checkbox : Images.ic_unchecked_checkbox}
                style={styles.checkboxStyle} />
              <Text style={styles.signUpPoliciesText}>{Strings.SIGNING_POLICIES}</Text>
            </TouchableOpacity>
          
            </View>
           <TouchableOpacity onPress={()=>{}}>
           <Text style={{alignSelf:'center', marginTop:10, 
           fontFamily:FontName.SF_PRO_DISPLAY_MEDIUM,
          fontSize:fontScale(16), color:Colors.BLUE
          }}>{Strings.SEE_PRIVACY_POLICY_TEXT}</Text>
           </TouchableOpacity>
            <View>
           
            </View>
            
          </View>
          {/* <Text >{Strings.SIGNING_POLICIES}</Text> */}
        </View>
       
        <View >
          <TouchableOpacity
            style={styles.signInStyle}
            onPress={() => props.navigation.navigate(RouteKeys.LOGIN)}>
            <Text style={styles.terms_text}>{Strings.ALREADY_HAVE_ACCOUNT}
              <Text style={styles.signInTextStyle}>Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* </SafeAreaView> */}
    </>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    justifyContent: 'center'
  },
  loginView: {
    marginTop: Scaling.HEIGHT_SCALE_10,
    // backgroundColor: Colors.BLUE,
    width: wp('80%'),
    //maxWidth:400,
  },
  signupView: {
    marginTop: Scaling.HEIGHT_SCALE_10,
    backgroundColor: Colors.GREEN,
    width: wp('80%'),
  },
  welcome_text: {
    color: Colors.BLACK,
    fontSize: fontScale(28),
    fontWeight: 'bold',
    marginBottom: Scaling.HEIGHT_SCALE_10,
    alignSelf: 'center',
    fontFamily: FontName.RALEWAY_BOLD
  },
  description_text: {
    color: Colors.GRAY,
    fontSize: fontScale(16),
    fontWeight: 'bold',
    marginTop: 16,
    marginHorizontal: Scaling.HEIGHT_SCALE_20,
    fontFamily: FontName.RAILWAY_FONT
  },
  or_text: {
    color: Colors.BLACK,
    fontSize: fontScale(16),
    fontWeight: 'bold',
    marginTop: Scaling.HEIGHT_SCALE_10
  },
  terms_text: {
    color: Colors.BLACK,
    fontSize: fontScale(16),
    fontWeight: 'bold',
    marginTop: Scaling.HEIGHT_SCALE_65,
    marginBottom: Scaling.HEIGHT_SCALE_20,
    fontFamily:FontName.SF_PRO_DISPLAY_REGULAR
  },
  signInStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  signInTextStyle: {
    color: Colors.BLUE
  },
  signUpPoliciesText: {
    flex: 1,
    marginLeft: Scaling.WIDTH_SCALE_10,
    fontSize: fontScale(14),
    fontFamily:FontName.SF_PRO_DISPLAY_MEDIUM
  },
  checkboxStyle: {
    height: Scaling.HEIGHT_SCALE_30,
    width: Scaling.WIDTH_SCALE_30,
    tintColor:Colors.BLUE
  },
  checkboxView: {
    flexDirection: 'row',
    marginTop:  Scaling.HEIGHT_SCALE_30,
    marginLeft: Scaling.WIDTH_SCALE_8
  }
});
