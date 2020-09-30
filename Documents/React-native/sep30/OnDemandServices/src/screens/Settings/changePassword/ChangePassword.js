
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
import Colors from '../../../constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { EditTextLogin, EditTextPasswordLogin } from '../../../common/widgets/EditText';
import { fontScale } from '../../../constants/FontSize';
import Images from '../../../assets/AppImages';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view'
import LinearGradient from 'react-native-linear-gradient';
import { RouteKeys, SCREEN_TITLE } from '../../../routes/RouteKeys';
import { SignUpAppleButton, Button } from '../../../common/widgets/Button';
import CustomeHeaderComponent from '../../../common/components/CustomeHeaderComponent';

const ChangePassword = props => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('')




  //  

  //const countryData = data;
  return (
    <>
      <SafeAreaView style={styles.container}>
  
        <View style={{ justifyContent: 'center', flex: 1, }}>
          <Text style={{ alignSelf: 'center' }}>{Strings.NEW_PASSWORD_MUST_CONTAIN_8_LETTERS}</Text>
          <EditTextPasswordLogin
            placeHolder={Strings.OLD_PASSWORD_PLACE_HOLDER}
          />
          <EditTextPasswordLogin
            placeHolder={Strings.NEW_PASSWORD_PLACE_HOLDER}
          />
          <EditTextPasswordLogin
            placeHolder={Strings.RE_ENTER_PASSWORD_PLACE_HOLDER}
          />
          <Button
            text={Strings.CHANGE_PASSWORD_BUTTON}

            onButtonPress={() => { props.navigation.navigate(RouteKeys.PROFILE_SCREEN) }}
            viewStyle={styles.loginView}
          //
          />
        </View>



      </SafeAreaView>
    </>
  );
};

export default ChangePassword;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  loginView: {
    marginTop: Scaling.HEIGHT_SCALE_10,
    // backgroundColor: Colors.BLUE,
    width: wp('80%'),
    alignSelf: 'center'
    //maxWidth:400,
  },
});