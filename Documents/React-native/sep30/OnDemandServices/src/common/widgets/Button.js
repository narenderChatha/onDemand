import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Screen, Colors, Scaling } from '../../constants';
import Images from '../../assets/AppImages';
import { fontScale } from '../../constants/FontSize';

const Button = ({ onButtonPress, text, viewStyle, textStyle }) => {
    return (
        <TouchableOpacity onPress={onButtonPress}>
            <LinearGradient colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
             style={[styles.subContainer, viewStyle]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
               
                    <Text style={[styles.signUpbuttonText, textStyle]}>
                        {text}
                    </Text>
               
            </LinearGradient>

        </TouchableOpacity>
    );
};
const SignUpEmailButton = ({ onButtonPress, text, viewStyle, textStyle }) => {
    return (
        <TouchableOpacity onPress={onButtonPress}>
            <LinearGradient colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
             style={[styles.subEmailContainer, viewStyle]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
               
                    <Text style={[styles.buttonText, textStyle]}>
                        {text}
                    </Text>
               
            </LinearGradient>

        </TouchableOpacity>
    );
};

const SignUpFacebookButton = ({ onButtonPress, text, viewStyle, textStyle }) => {
    return (
        <TouchableOpacity style={[styles.facebookButton, viewStyle]} onPress={onButtonPress}>
           <Image source={Images.ic_fb} style={styles.fbIconStyle}/>
               
                    <Text style={[styles.buttonFbText, textStyle]}>
                        {text}
                    </Text>
               
           

        </TouchableOpacity>
    );
};
const SignUpAppleButton = ({ onButtonPress, text, viewStyle, textStyle }) => {
    return (
        <TouchableOpacity
        style={[styles.appleButton, viewStyle]}
        onPress={onButtonPress}>
     
     <Image source={Images.ic_apple} style={styles.appleIconStyle}/>
                    <Text style={[styles.appleSignUpText, textStyle]}>
                        {text}
                    </Text>
               
          

        </TouchableOpacity>
    );
};
const SignUpGmailButton = ({ onButtonPress, text, viewStyle, textStyle }) => {
    return (
        <TouchableOpacity
        style={[styles.gmailButton, viewStyle]}
        onPress={onButtonPress}>
     
     {/* <Image source={Images.ic_gmail_logo} style={styles.gmailIconStyle}  resizeMode={'contain'}/> */}
     <Image source={Images.ic_gmail_logo} style={styles.gmailIcon}/>
                    <Text style={[styles.gmailSignUpText, textStyle]}>
                        {text}
                    </Text>
               
          

        </TouchableOpacity>
    );
};
export { Button, SignUpEmailButton, SignUpFacebookButton, SignUpAppleButton, SignUpGmailButton };

const styles = StyleSheet.create({
    subContainer: {
        borderRadius: 8,
        alignItems: 'center',
        paddingVertical: Platform.OS==='android'?Scaling.HEIGHT_SCALE_5:Scaling.HEIGHT_SCALE_5,
        paddingHorizontal: Scaling.WIDTH_SCALE_24,
        marginHorizontal: Scaling.WIDTH_SCALE_8
    },
    subEmailContainer: {
        borderRadius: 8,
        alignItems: 'center',
       // paddingVertical: Platform.OS==='android'?Scaling.HEIGHT_SCALE_6:Scaling.HEIGHT_SCALE_6,
        paddingHorizontal: Scaling.WIDTH_SCALE_20,
        marginHorizontal: Scaling.WIDTH_SCALE_8
    },
    buttonText: {
        color: Colors.WHITE,
        fontSize: fontScale(14),
        fontWeight: 'bold',
        marginLeft:Scaling.WIDTH_SCALE_10,
    },
    buttonFbText: {
        color: Colors.WHITE,
        fontSize: fontScale(14),
        fontWeight: 'bold',
        marginLeft:Scaling.WIDTH_SCALE_10,
    },
    signUpbuttonText: {
        color: Colors.WHITE,
        fontSize: fontScale(14),
        fontWeight: 'bold',
        marginLeft:Scaling.WIDTH_SCALE_10,
        padding:Scaling.PADDING_SCALE_6
    },
    facebookButton:{
        flexDirection:'row',
       // justifyContent:'space-around',
        // alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.FACEBOOK_BLUE,
        borderRadius: 8,
        alignItems: 'center',
        paddingVertical: Platform.OS==='android'?Scaling.HEIGHT_SCALE_6:Scaling.HEIGHT_SCALE_4,
        paddingHorizontal: Scaling.WIDTH_SCALE_24,
        marginHorizontal: Scaling.WIDTH_SCALE_8

    },
    gmailButton:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:Colors.BLUE,
        borderRadius: 8,
        alignItems: 'center',
        paddingVertical:  Platform.OS==='android'?Scaling.HEIGHT_SCALE_8:Scaling.HEIGHT_SCALE_5,
        paddingHorizontal:Scaling.WIDTH_SCALE_24,
        marginHorizontal: Scaling.WIDTH_SCALE_8

    },
    appleButton:{
        flexDirection:'row',
        justifyContent:'center',

        backgroundColor:Colors.BLACK,
        borderRadius: 8,
        alignItems: 'center',
        paddingVertical:  Platform.OS==='android'?Scaling.HEIGHT_SCALE_8:Scaling.HEIGHT_SCALE_6,
        paddingHorizontal: Scaling.WIDTH_SCALE_24,
        marginHorizontal: Scaling.WIDTH_SCALE_8

    },
    fbIconStyle:{
        height:Scaling.HEIGHT_SCALE_28,
        width:Scaling.WIDTH_SCALE_28,
    },
    gmailIconStyle:{
        height:Scaling.HEIGHT_SCALE_28,
        width:Scaling.WIDTH_SCALE_28,
       // tintColor:'red'
      //  resizeMode:'contain'
     
    },
    appleIconStyle:{
        height:Scaling.HEIGHT_SCALE_25,
        resizeMode:'contain',
        width:Scaling.WIDTH_SCALE_25,
        tintColor:Colors.WHITE
    },
    appleSignUpText:{
        color: Colors.WHITE,
        fontSize: fontScale(14),
        marginLeft:Scaling.WIDTH_SCALE_10,
        fontWeight: 'bold',
    },
    gmailSignUpText:{
        color: Colors.WHITE,
        fontSize: fontScale(14),
        marginLeft:Scaling.WIDTH_SCALE_10,
        fontWeight: 'bold',
    },
    gmailIcon: {
        height: Scaling.HEIGHT_SCALE_25,
        width: Scaling.WIDTH_SCALE_25
    }
    
});