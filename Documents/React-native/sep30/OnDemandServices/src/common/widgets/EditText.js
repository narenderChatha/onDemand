import React from 'react';
import { View, TextInput, Text, StyleSheet, Platform, Image, TouchableOpacity } from 'react-native';
import { Colors, Scaling, FontName } from '../../constants';
import Feather from 'react-native-vector-icons/Feather';
import Animatable from 'react-native-animatable';
import { fontScale, fontScaleStandard } from '../../constants/FontSize';

Feather.loadFont();
const EditText = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.textInputStyle}
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor={Colors.GRAY}
        value={props.value}
        onChangeText={props.onChangeText}
        {...props}
      />
    </View>
  );
};
const EditTextPasswordLogin = (props) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false
      });
    }
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }
  return (
    <View style={{
      marginLeft: Scaling.WIDTH_SCALE_20,
      marginRight: Scaling.WIDTH_SCALE_20,
      marginTop: Scaling.WIDTH_SCALE_5,
      marginBottom: Scaling.WIDTH_SCALE_10,
      borderWidth: 0.3,
      borderRadius: 35,
      borderColor:Colors.GRAY,
      backgroundColor: Colors.TRANSPARENT_WHITE
    }}>
      {/* <Text style={[styles.text_footer, {
                color: Colors.BLACK,
                marginTop: 35
            }]}>Password</Text> */}
      <View style={styles.action}>
        <Feather
          name="lock"
          color={Colors.BLUE}
          size={20}
          style={{ marginLeft: Scaling.WIDTH_SCALE_10, }}
        />
        <TextInput
          placeholder={props.placeHolder}
          placeholderTextColor="#666666"
          secureTextEntry={data.secureTextEntry ? true : false}
          style={[styles.textInput, {
            color: Colors.BLACK
          }]}
          autoCapitalize="none"
          onChangeText={props.onChangeText}

        // onChangeText={(val) => handlePasswordChange(val)}
        />
        <TouchableOpacity
          onPress={updateSecureTextEntry}
        >
          {data.secureTextEntry ?
            <Feather
              name="eye-off"
              color="grey"
              size={20}
              style={{ marginRight: Scaling.WIDTH_SCALE_10, }}
            />
            :
            <Feather
              name="eye"
              color="grey"
              size={20}
              style={{ marginRight: Scaling.WIDTH_SCALE_10, }}
            />
          }
        </TouchableOpacity>
      </View>
      {/* { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            } */}
    </View>
  );
};
const EditTextLogin = (props) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false
      });
    }
  }

  return (
    <View style={{
      marginRight: Scaling.WIDTH_SCALE_20,
      marginLeft: Scaling.WIDTH_SCALE_20,
      marginTop: Scaling.WIDTH_SCALE_10,
      marginBottom: Scaling.WIDTH_SCALE_20,
      borderColor:Colors.GRAY,
      borderWidth: 0.3,
      borderRadius: 35,
      backgroundColor: Colors.TRANSPARENT_WHITE
    }}>
      {/* <Text style={[styles.text_footer, {
                color: Colors.BLACK,
                marginTop: 35
            }]}>Password</Text> */}
      <View style={styles.action}>
        <Feather
          name="mail"
          color={Colors.BLUE}
          size={20}
          style={{ marginLeft: 10, }}
        />
        <TextInput
          placeholder={props.placeHolder}
          placeholderTextColor="#666666"
          style={[styles.textInput, {
            color: Colors.BLACK
          }]}
          autoCapitalize="none"
          //  onChangeText={(val) => handlePasswordChange(val)}
          onChangeText={props.onChangeText}

        />

      </View>
      {/* { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            } */}
    </View>
  );
};
export { EditText, EditTextLogin, EditTextPasswordLogin };

const styles = StyleSheet.create({
  container: {
   // flexDirection: 'row',
    marginVertical: Scaling.HEIGHT_SCALE_10,
    borderBottomColor: Colors.GRAY,
    borderBottomWidth: 0.6,
  },
  text: {
    fontSize: fontScale(12),
    color: 'gray',
  },
  textInputStyle: {
    fontSize: fontScale(12),
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    marginBottom: Platform.OS === 'ios' ? 10 : -5,
  },
  text_footer: {
    color: '#05375a',
    fontSize: fontScale(18)
  },
  action: {
    flexDirection: 'row',
    margin: Platform.OS === 'ios' ? 10 : 0,
    justifyContent: 'center',
    alignItems: 'center'
    //  borderBottomWidth: 1,
    // borderBottomColor: Colors.BLUE,
    //  paddingBottom: 5
  },
  actionError: {
    flexDirection: 'row',
    marginTop: Scaling.HEIGHT_SCALE_10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: Scaling.HEIGHT_SCALE_8
  },
  textInput: {
    flex: 1,
    // marginTop: Platform.OS === 'ios' ? 0 : -10,
    paddingLeft: Scaling.WIDTH_SCALE_8,
    color: '#05375a',
    fontSize: fontScale(16)
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: fontScale(14),
  },
});
