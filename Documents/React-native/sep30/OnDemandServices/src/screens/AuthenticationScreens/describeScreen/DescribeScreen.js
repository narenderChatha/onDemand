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
import { FontName, Colors, Strings } from '../../../constants';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { useIsFocused } from "@react-navigation/native";
import { Button } from '../../../common/widgets/Button';
import { fontScaleStandard } from '../../../constants/FontSize';

let backPressed = 0;
const DescribeScreen = (props) => {
    const isFocused = useIsFocused();

    const onGetStartedPress = () => {
        //props.navigation.navigate('login');
    };


    return (
        <>
            <ScrollView
                contentContainerStyle={styles.container}
                style={{ flex: 1, backgroundColor: Colors.WHITE }}>


                <Text style={styles.description_text}>{Strings.WHICH_DESCRIBES_YOU_BEST}</Text>

                <Button
                    text={Strings.I_NEED_A_PRO_BUTTON}
                    onButtonPress={() => onGetStartedPress()}
                    viewStyle={styles.loginView}
                />
                <Button
                    text={Strings.I_AM_A_PRO_BUTTON}
                    onButtonPress={() => onGetStartedPress()}
                    viewStyle={styles.loginView}
                />
                <TouchableOpacity
                    style={{ justifyContent: 'flex-end', flex:1, }}
                    onPress={() => props.navigation.navigate('agreements')}>
                    <Text style={styles.terms_text}>Terms, privacy & Disclaimer</Text>
                </TouchableOpacity>
            </ScrollView>
        </>
    );
};

export default DescribeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
    },
    loginView: {
        marginTop: 40,
        backgroundColor: Colors.BLUE,
        width: wp('80%')
    },
    signupView: {
        marginTop: 12,
        backgroundColor: Colors.GREEN,
        width: wp('80%'),
    },
    welcome_text: {
        color: Colors.BLACK,
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: FontName.RALEWAY_BOLD
    },
    description_text: {
        color: Colors.GRAY,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 16,
        marginHorizontal: 30,
        fontFamily: FontName.RAILWAY_FONT
    },
    or_text: {
        color: Colors.BLACK,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 12
    },
    terms_text: {
        color: Colors.BLACK,
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 64,
        marginBottom: 30,
    },
});
