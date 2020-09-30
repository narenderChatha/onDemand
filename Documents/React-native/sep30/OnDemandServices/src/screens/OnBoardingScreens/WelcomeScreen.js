// import React, { useState, useEffect } from 'react';
// import {
//     Image,
//     TouchableOpacity,
//     StyleSheet,
//     View,
//     Text,
//     ScrollView,
//     BackHandler,
//     ToastAndroid,
//     SafeAreaView,
//     StatusBar
// } from 'react-native';
// import {
//     widthPercentageToDP as wp,
//     heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// //import {Button} from '../../common/widgets';
// import { FontName, Colors, Strings } from '../../constants';
// import { NavigationContainer, StackActions } from '@react-navigation/native';
// import { useIsFocused } from "@react-navigation/native";
// import { Button } from '../../common/widgets/Button';
// import { RouteKeys } from '../../routes/RouteKeys';

// let backPressed = 0;
// const WelcomeScreen = (props) => {
//     const isFocused = useIsFocused();

//     const onSignUpPress = () => {
//         props.navigation.navigate(RouteKeys.DESCRIBE);
//     };


//     return (
//         <>
//         {/* <SafeAreaView style={{flex:1}}>
//         <StatusBar setBackgroundColor={Colors.WHITE}/> */}
//             <ScrollView
//                 contentContainerStyle={styles.container}
//                 style={{ flex: 1, backgroundColor: Colors.WHITE }}>
// <View style={{flex:1}}/>
//     <Text style={styles.welcome_text}>{Strings.WELCOME_TO_HYNGE}</Text>

//     <Text style={styles.description_text}>{Strings.WELCOME_TO_HYNGE_DESCRIPTION}</Text>

//                 <Button
//                     text={Strings.SIGNIN_BUTTON}
//                     onButtonPress={() => onGetStartedPress()}
//                     viewStyle={styles.loginView}
//                 />
//  <Button
//                     text={Strings.SIGNUP_BUTTON}
//                     onButtonPress={() => onSignUpPress()}
//                     viewStyle={styles.loginView}
//                 />

                

//                 <TouchableOpacity
//                     onPress={() => props.navigation.navigate('agreements')}>
//                     <Text style={styles.terms_text}>Terms, privacy & Disclaimer</Text>
//                 </TouchableOpacity>
//             </ScrollView>
//             {/* </SafeAreaView> */}
//         </>
//     );
// };

// export default WelcomeScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: Colors.WHITE,
//     },
//     loginView: {
//         marginTop: 40,
//         backgroundColor: Colors.BLUE,
//         width: wp('80%')
//     },
//     signupView: {
//         marginTop: 12,
//         backgroundColor: Colors.GREEN,
//         width: wp('80%'),
//     },
//     welcome_text: {
//         color: Colors.BLACK,
//         fontSize: 28,
//         fontWeight: 'bold',
//         fontFamily:FontName.RALEWAY_BOLD
//     },
//     description_text: {
//         color: Colors.GRAY,
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginTop: 16,
//         marginHorizontal:30,
//         fontFamily:FontName.RAILWAY_FONT
//     },
//     or_text: {
//         color: Colors.BLACK,
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginTop: 12
//     },
//     terms_text: {
//         color: Colors.BLACK,
//         fontSize: 14,
//         fontWeight: 'bold',
//         marginTop: 64,
//         marginBottom: 30,
//     },
// });
