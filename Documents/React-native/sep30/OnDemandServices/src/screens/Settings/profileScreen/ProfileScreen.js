import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList, StyleSheet, Text,
    SafeAreaView,
    ScrollView, Image,
    ActivityIndicator,
    TouchableOpacity,
    Platform,
    PermissionsAndroid,
    Alert,
} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../../assets/AppImages';
import { fontScale } from '../../../constants/FontSize';
import { Colors, Screen, Strings } from '../../../constants';

//import { Rating, AirbnbRating } from 'react-native-ratings';

const ProfileScreen = props => {
    // const [name, updateName] = useState('');
    // const [email, updateEmail] = useState('');
    // const [phoneNumber, updatePhoneNumber] = useState('');
    // const [address, updateAddress] = useState('');
    // const [profile_image, updateprofile_image] = useState('');
    // const [No_imageSelected, updateNo_imageSelected] = useState(true);
    // const [editViews, setEditViews] = useState(false);
    // const [loading, setLoading] = useState(true);
    // const [recoveryEmail, setRecoveryEmail] = useState('');
    // const [recoveryPhone, setRecoveryPhone] = useState('');
    // const [recoveryCountryCode, setRecoveryCountryCode] = useState('');
    // const isFocused = useIsFocused();
    // const [deviceToken, setDeviceToken] = useState('');
    // const [netRating, setNetRating] = useState(0);

    

    return (
        <>
            <ScrollView keyboardShouldPersistTaps='always' style={styles.container}>
                <LinearGradient colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
                    style={{
                        height: heightPercentageToDP('25%'),
                        width: Screen.width,

                    }}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                >

                </LinearGradient>
                {/* <TouchableOpacity 
                onPress={()=>{console.log("touch")}}
                style={{ alignItems:'flex-end', marginTop:-40,
                marginRight:20}}>
                        <Image source={Images.ic_edit} 
                        style={{
                            height:30,
                             width:30,
                             
                             //  tintColor:'red'
                               }}/>
                    </TouchableOpacity> */}
                {/* <View>
                    <TouchableOpacity 
                onPress={()=>{console.log("touch")}}
                style={{ alignItems:'flex-end', marginTop:-40,
                marginRight:20}}>
                        <Image source={Images.ic_edit} 
                        style={{
                            height:30,
                             width:30,
                             
                             //  tintColor:'red'
                               }}/>
                    </TouchableOpacity>
               </View> */}
                <View style={{ alignItems: 'center', marginTop: -75 }}>
         
                            <TouchableOpacity
                             onPress={() => openGallery()}
                             >
                                <Image
                                    source={Images.dummyImage}
                                    style={{
                                        height: 150,
                                        width: 150,
                                        borderRadius: 75,
                                    }} />
                                <Image source={Images.ic_camera}
                                    style={{
                                        height: 40,
                                        width: 40,
                                        marginTop: -45,
                                        marginLeft: 100,
                                        marginBottom: 15
                                    }} />
                            </TouchableOpacity>
                       

                 
                </View>


    
                <View style={{ marginLeft: 15, marginRight: 15, }}  >
             
                            <View>
        <View>
                                        <Text style={styles.headingTextStyle}>Name</Text>
                                        <Text style={styles.textStyle}>name</Text>

                                        <Text style={styles.headingTextStyle}>Email</Text>
                                        <Text style={styles.textStyle}>email@gmail.com</Text>

                                        <Text style={styles.headingTextStyle}>Mobile</Text>
                                        <Text style={styles.textStyle}>9786875764</Text>

                                        <Text style={styles.headingTextStyle}>Address</Text>
                                        <Text style={styles.textStyle}>sec 556</Text>
                                    </View>
                            </View>

                    


                   </View>

            </ScrollView>
        </>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        height: heightPercentageToDP('100%'),

    },
    headingTextStyle: {
        fontSize: fontScale(14),
        marginTop: 15,
        color: Colors.GRAY
    },
    textStyle: {
        fontSize: fontScale(14),
        marginTop: 5,
        marginBottom: 10,
        marginRight: 10,
    },
    securityTextStyle: {
        fontSize: fontScale(16),
        color: Colors.BLACK,
        marginTop: 30,
        marginBottom: 10
    },
    btn_next: {
        marginTop: 40,
        backgroundColor: '#F37727'
    },

});
