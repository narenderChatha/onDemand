
import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
  Platform,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import { FontName, Scaling, Strings, } from '../../../constants';
import Colors from '../../../constants/Colors'

import { EditTextLogin, EditTextPasswordLogin } from '../../../common/widgets/EditText';
import { fontScale } from '../../../constants/FontSize';
import Images from '../../../assets/AppImages';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view'
import LinearGradient from 'react-native-linear-gradient';
import { RouteKeys } from '../../../routes/RouteKeys';

const LoginScreen = props => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  //  

  //const countryData = data;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps='handled'>
          <View >
            <Image source={Images.ic_logo} style={styles.logoStyle} />
            <EditTextLogin
              onChangeText={e => setEmail(e)}
              placeHolder={Strings.EMAIL_PLACE_HOLDER}
            />
            <EditTextPasswordLogin
              onChangeText={e => setPassword(e)}

              placeHolder={Strings.PASSWORD_PLACE_HOLDER}
            />
            <View style={styles.forgotView}>
              <TouchableOpacity style={{ justifyContent: 'center' }}
                onPress={() => { }}
              >
                <Text style={styles.forgotPassordText}>{Strings.FORGOT_PASSWORD}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{props.navigation.navigate(RouteKeys.SEARCH)}} >
                <LinearGradient colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
                  style={styles.signInView}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 0 }}
                >

                  <Text style={styles.signInText}>{Strings.SIGN_IN}</Text>

                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.signInWithText}>{Strings.SIGN_IN_WITH}</Text>
              <View style={styles.socialAuthView}>
                <TouchableOpacity style={styles.fbIconView}>
                  <Image source={Images.ic_fb} style={styles.fbIconStyle} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.appleIconView}>
                  <Image source={Images.ic_apple} style={styles.appleIconStyle} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.gmailIconView}>
                  <Image source={Images.ic_gmail_logo} style={styles.gmailIconStyle} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.termTextView}>
            <TouchableOpacity
              style={styles.signInStyle}
              onPress={() => props.navigation.navigate(RouteKeys.SIGNUP)}>
              <Text style={styles.termsText}>{Strings.ALREADY_HAVE_ACCOUNT}
                <Text style={styles.signInTextStyle}>{Strings.SIGN_UP}</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>


      </SafeAreaView>
    </>
  );
};

export default LoginScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  sub_container: {
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: Scaling.HEIGHT_SCALE_12,
    paddingHorizontal: Scaling.WIDTH_SCALE_20,
    marginHorizontal:  Scaling.WIDTH_SCALE_5
  },
  termsText: {
    color: Colors.BLACK,
    fontSize: fontScale(16),
    fontWeight: 'bold',
    marginTop: Scaling.HEIGHT_SCALE_65,
    marginBottom: Scaling.HEIGHT_SCALE_20,
    fontFamily: FontName.SF_PRO_DISPLAY_REGULAR
  },
  forgotView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: Scaling.WIDTH_SCALE_20,
    marginRight: Scaling.WIDTH_SCALE_20
  },
  forgotPassordText:{ fontSize: fontScale(16) },
  signInView: {
    padding: Scaling.HEIGHT_SCALE_10,
    paddingRight: Scaling.HEIGHT_SCALE_20,
    paddingLeft: Scaling.HEIGHT_SCALE_20,
    borderRadius: 30,
    backgroundColor: Colors.BLUE
  },
  itemSeprator: {
    backgroundColor: Colors.GRAY,
    height: 0.5,
    width: '100%',
    marginVertical: Scaling.HEIGHT_SCALE_10,
  },
  signInStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  signInText: {
    fontSize: fontScale(16),
    color: Colors.WHITE,
  },
  signInTextStyle: {
    color: Colors.BLUE
  },
  signInWithText: {
    fontSize: fontScale(18),
    fontWeight: 'bold',
    marginTop: Scaling.HEIGHT_SCALE_10
  },
  socialAuthView: {
    flexDirection: 'row',
    marginTop: Scaling.HEIGHT_SCALE_20
  },
  fbIconView: {
    height: Scaling.HEIGHT_SCALE_50,
    borderRadius: Scaling.HEIGHT_SCALE_30,
    justifyContent: 'center',
    alignItems: 'center',
    width: Scaling.HEIGHT_SCALE_50,
    backgroundColor: Colors.FACEBOOK_BLUE
  },
  logoStyle: {
    height: Scaling.WIDTH_SCALE_100,
    width: Scaling.WIDTH_SCALE_100,
    borderRadius:Scaling.HEIGHT_SCALE_210,
    alignSelf: 'center',
    marginBottom: Scaling.HEIGHT_SCALE_10,
    marginTop: Scaling.HEIGHT_SCALE_20,
    resizeMode: 'contain'
  },
  fbIconStyle: {
    marginLeft: -4,
    height: Scaling.HEIGHT_SCALE_30,
    width: Scaling.WIDTH_SCALE_30
  },
  appleIconView: {
    height: Scaling.HEIGHT_SCALE_50,
    borderRadius:Scaling.HEIGHT_SCALE_30,
    justifyContent: 'center',
    alignItems: 'center',
    width: Scaling.HEIGHT_SCALE_50,
    backgroundColor: Colors.BLACK,
    marginLeft: Scaling.WIDTH_SCALE_20,
  },
  appleIconStyle: {
    height: Scaling.HEIGHT_SCALE_30,
    width: Scaling.HEIGHT_SCALE_30,
    tintColor: Colors.WHITE
  },
  gmailIconView: {
    height: Scaling.HEIGHT_SCALE_50,
    borderRadius: Scaling.HEIGHT_SCALE_30,
    justifyContent: 'center',
    alignItems: 'center',
    width: Scaling.HEIGHT_SCALE_50,
    backgroundColor: Colors.GREEN,
    marginLeft: Scaling.WIDTH_SCALE_20,
  },
  gmailIconStyle: {
    height:  Scaling.HEIGHT_SCALE_30,
    width:  Scaling.HEIGHT_SCALE_30,
  },
  termTextView: {
    alignItems: 'center',
    marginBottom: Scaling.HEIGHT_SCALE_20
  },
});