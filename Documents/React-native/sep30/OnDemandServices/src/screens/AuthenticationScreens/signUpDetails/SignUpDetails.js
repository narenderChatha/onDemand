import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Keyboard,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
    FlatList,
    BackHandler,
    TouchableWithoutFeedback,
    TextInput,
    ActivityIndicator,
    PermissionsAndroid,
    Alert,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
import { Button } from '../../../common/widgets/Button';
import { EditText } from '../../../common/widgets/EditText';
import { Strings, Scaling, Colors, FontName } from '../../../constants';
import { fontScale, useNetInfo } from '../../../constants/FontSize';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Images from '../../../assets/AppImages';
import data from '../../../constants/countryCode';
import { SCREEN_TITLE } from '../../../routes/RouteKeys';
import ShowSnack from '../../../constants/SimpleSnackbar';


const dropLabel = "Select";
const SignUpDetails = props => {
    const [firstName, updateFirstName] = useState('');
    const [lastName, updateLastName] = useState('');
    const [phoneNumber, updatePhoneNumber] = useState('');
    const [description, setDescription] = useState('');
    const [zipCode, updateZipCode] = useState('');
    const [needAPro, setNeedAPro] = useState(0)
    const [email, updateEmail] = useState('');
    const [password, updatePassword] = useState('');
    const [countryCode, updateCountryCode] = useState('+91');
    const [modalVisible, updateModalVisible] = useState(false);
    const [countryData, setCountryData] = useState(data);
    const [searchData, setSearchData] = useState(data);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [latitude, setLatitude] = useState(30.711235);
    const [longitude, setLongitude] = useState(76.690130);
    const [permissions, setPermissions] = useState(false);
    const [address, setAddress] = useState('Address');
    const [serachModalVisible, setSearchModalVisible] = useState(false);
    const [houseAddressLat, updateHouseAddressLat] = useState('');
    const [houseAddressLong, updateHouseAddressLong] = useState('');
    const [houseAddress, updateHouseAddress] = useState('');


    const selectCountry = async country => {

        try {
            const countryCode = await countryData.filter(
                obj => obj.name === country,
            )[0].dial_code;
            updateCountryCode(countryCode);
            updateModalVisible(false);
        } catch (err) {
            console.log(err);
        }
    };
    const onSearch = (value) => {
        setCountryData(
            searchData.filter(i =>
                i.name.toLowerCase().includes(value.toLowerCase())
            )
        )
    }



    const onSubmitDetails = async () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/;
        var regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        if (firstName.length <= 0) {
            ShowSnack(Strings.FIRST_NAME_SNACK)
        }
        else if (lastName.length <= 0) {
            ShowSnack(Strings.LAST_NAME_SNACK)
        }
        else if (!email) {
            ShowSnack(Strings.EMAIL_SNACK)

        }
        else if (!reg.test(email)) {
            ShowSnack(Strings.VALID_EMAIL_SNACK)

        }
        else if (password.length === 0) {
            ShowSnack(Strings.PASSWORD_SNACK)

        }
        else if (password.length < 6) {
            console.log("phone number length=======>" + password.length)
            ShowSnack(Strings.VALID_PASSWORD_SNACK);
        }
        else if (zipCode.length === 0) {
            ShowSnack(Strings.ZIP_CODE_SNACK)

        }
        else if (zipCode.length < 5) {
            console.log("phone number length=======>" + password.length)
            ShowSnack(Strings.VALID_ZIP_CODE_SNACK);
        }
        else if (!address) {
            ShowSnack(Strings.ADDRESS_SNACKBAR)
        }
        else if (!(needAPro === 0 || needAPro === 1)) {
            ShowSnack(Strings.ACCOUNT_TYPE_SNACK)
        }
        else if (phoneNumber.length ===0) {
            ShowSnack("Please enter phone number")
      
          }
          else if (phoneNumber.length<8 ) { 
              console.log("phone number length=======>"+phoneNumber.length)
              ShowSnack("Please enter valid phone number");         
          }
          else if (phoneNumber.length>=14 ) { 
            console.log("phone number length=======>"+phoneNumber.length)
            ShowSnack("Please enter valid phone number");  
          }
        else {
            const connectedState = await useNetInfo()
            if (connectedState) {
                // setLoading(true);
                props.signUpDetailsAction(needAPro, firstName, lastName, email,
                    password, phoneNumber, address,
                    zipCode,
                    description,
                    countryCode,
                    latitude,
                    longitude,
                )
            }
            else {
                // setLoading(false);
                //setConnectivity(true);
                // Toast.show('Check internet connectivity', Toast.LONG);
                ShowSnack('Check internet connectivity')
            }
        }

    }
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.WHITE }}>

                <KeyboardAwareScrollView keyboardShouldPersistTaps='handled'>

                    <View style={styles.container}>
                        <DropDownPicker
                            items={[
                                { label: Strings.I_AM_A_PRO_BUTTON, value: 0, },
                                { label: Strings.I_NEED_A_PRO_BUTTON, value: 1, },
                            ]}
                            // defaultValue={'I Am Pro'}
                            placeholder={Strings.SELECT_ACCOUNT_TYPE}
                            containerStyle={{ height: Scaling.HEIGHT_SCALE_40, marginBottom: Scaling.HEIGHT_SCALE_14 }}
                            style={{ backgroundColor: Colors.WHITE }}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{ backgroundColor: Colors.WHITE }}
                            onChangeItem={item => setNeedAPro(item.value)}
                        />

                        <EditText
                            text={Strings.FIRST_NAME}
                            placeholder={Strings.FIRST_NAME_PLACE_HOLDER}
                            onChangeText={e => updateFirstName(e)}
                        // value={firstName}
                        />

                        <EditText
                            text={Strings.LAST_NAME}
                            placeholder={Strings.LAST_NAME_PLACE_HOLDER}
                            onChangeText={e => updateLastName(e)}
                        //value={lastName}
                        />
                        <EditText
                            text={Strings.EMAIL}
                            placeholder={Strings.EMAIL_PLACE_HOLDER}
                            onChangeText={e => updateEmail(e)}
                            autoCapitalize="none"
                            keyboardType="email-address"
                        //value={lastName}
                        />
                        <EditText
                            text={Strings.PASSWORD}
                            placeholder={Strings.PASSWORD_PLACE_HOLDER}
                            onChangeText={e => updatePassword(e)}
                            autoCapitalize="none"
                            secureTextEntry={true}
                        //value={lastName}
                        />
                        <View
                            style={[
                                {
                                    backgroundColor: Colors.WHITE,
                                    paddingTop: Scaling.PADDING_SCALE_5,
                                    
                                    // height: props.multiline ? null : 50,
                                    justifyContent: props.multiline ? 'flex-start' : 'center',
                                },
                            ]}>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => updateModalVisible(false)}>
                                <View style={styles.modalContainer}>
                                    <View style={styles.modalContent}>
                                        {/* Render the list of countries */}
                                        <TextInput
                                            placeholder={Strings.SEARCH_COUNTRY_CODE}
                                            onChangeText={onSearch}
                                            style={{
                                                padding: Scaling.PADDING_SCALE_10,
                                                marginBottom: Scaling.HEIGHT_SCALE_10,
                                                borderWidth: 0.6,
                                                borderColor: Colors.GRAY,
                                                borderRadius: 30,
                                                // backgroundColor:Colors.SMOKY
                                            }}
                                        // underlineColorAndroid={'gray'}
                                        />
                                        <FlatList
                                            style={{ marginBottom: Scaling.HEIGHT_SCALE_10 }}
                                            data={countryData}
                                            keyExtractor={(item, index) => index.toString()}
                                            renderItem={({ item }) => (
                                                <TouchableWithoutFeedback
                                                    onPress={() => selectCountry(item.name)}>
                                                    <View>
                                                        <Text>
                                                            {item.flag} {item.name} ({item.dial_code})
                            </Text>
                                                    </View>
                                                </TouchableWithoutFeedback>
                                            )}
                                            ItemSeparatorComponent={() => (
                                                <View style={styles.itemSeprator} />
                                            )}
                                        />

                                        <Button
                                            onButtonPress={() => updateModalVisible(false)}
                                            text={Strings.CANCEL_BUTTON}
                                            textStyle={{ color: Colors.RED }}
                                        />
                                    </View>
                                </View>
                            </Modal>
                        </View>
                        <Text
                            style={{
                                fontSize:fontScale(12),
                                color: Colors.GRAY,
                                fontFamily: FontName.SF_PRO_DISPLAY_REGULAR,
                            
                                marginBottom:-Scaling.HEIGHT_SCALE_10,
                            }}>
                            {Strings.PHONE_NUMBER}
            </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderBottomColor: Colors.GRAY,
                                borderBottomWidth: 0.7,
                                flex: 1,
                            }}>
                            <TouchableOpacity
                                style={{
                                    // width: '30%',
                                    paddingTop: Scaling.HEIGHT_SCALE_10,
                                    alignItems: 'center',
                                    flex: 1.4,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginRight: Scaling.WIDTH_SCALE_15,
                                }}
                                onPress={() => updateModalVisible(true)}>
                                <Text
                                    style={{
                                        color: Colors.GRAY,
                                        fontSize: fontScale(12),
                                    }}>
                                    {countryCode}
                                </Text>
                                <Image
                                    source={Images.ic_drop}
                                    style={{
                                        width: Scaling.WIDTH_SCALE_12,
                                        height: Scaling.HEIGHT_SCALE_8,
                                        marginLeft: Scaling.WIDTH_SCALE_15
                                    }}
                                />
                            </TouchableOpacity>
                            <View
                                style={{
                                    backgroundColor: Colors.GRAY,
                                    height: Scaling.HEIGHT_SCALE_30,
                                    justifyContent: 'center',
                                    flex: 0.04,
                                    marginLeft: Scaling.WIDTH_SCALE_15,
                                    marginTop: Scaling.HEIGHT_SCALE_20
                                }}
                            />
                            <EditText
                                style={{ flex: 7, borderBottomWidth: 0, marginLeft: Scaling.WIDTH_SCALE_10 }}
                                placeholder={Strings.PHONE_NUMBER_PLACEHOLDER}
                                keyboardType="phone-pad"
                                returnKeyType='done'
                                onChangeText={text => updatePhoneNumber(text)}
                                value={phoneNumber}

                            />
                        </View>







                        {/* <EditText
                            text={Strings.CONFIRM_PASSWORD}
                            placeholder={Strings.CONFIRM_PASSWORD_PLACEHOLDER}
                            onChangeText={e => setConfirmPassword(e)}
                            autoCapitalize="none"
                            secureTextEntry={true}
                        //   keyboardType="email-address"
                        //value={lastName}
                        /> */}

                        {/* <EditText
                            textStyle={{ marginTop: 5 }}
                            text={Strings.ADDRESS}
                            placeholder={Strings.ADDRESS_PLACE_HOLDER}
                            // value={address}
                            onChangeText={e => updateAddress(e)}
                        /> */}
                        <Text style={{
                            fontSize: fontScale(12), color: Colors.GRAY,
                            // fontWeight: 'bold',
                            marginVertical: Scaling.HEIGHT_SCALE_14
                        }}>
                           {Strings.ADDRESS}
                        </Text>
                        <TouchableOpacity
                            onPress={() => setSearchModalVisible(true)}
                            style={{
                                // marginVertical: 6,
                                borderBottomColor: Colors.GRAY,
                                borderBottomWidth: 0.4
                            }}>
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-between',
                                // borderBottomWidth:0.4,
                                // borderBottomColor: Colors.GRAY,
                            }}>
                                <Text style={{
                                    fontSize: 12,
                                    color: Colors.GRAY,
                                    marginBottom: Scaling.HEIGHT_SCALE_4
                                }}>{address}</Text>
                                <Image source={Images.ic_search_icon}
                                    style={{
                                        height: Scaling.HEIGHT_SCALE_20, width: Scaling.HEIGHT_SCALE_20,
                                        marginBottom: Scaling.HEIGHT_SCALE_8
                                    }} />
                            </View>

                            {/* <Text style={{ marginBottom: 10, marginTop: 20, color: address ? Colors.BLACK : Colors.GRAY }}>
                                        {address ? address : "Search or Locate your address in map"}
                                    </Text> */}
                        </TouchableOpacity>
                        <EditText
                            text={Strings.ZIP_CODE}
                            placeholder={Strings.ZIP_CODE_PLACE_HOLDER}
                            returnKeyType='done'
                            onChangeText={e => updateZipCode(e)}
                        />
                       <Text style={{ color: Colors.GRAY, marginVertical:Scaling.HEIGHT_SCALE_10 }}>{Strings.DESCRIPTION_TITLE}</Text>
                               <TextInput
                           // text={Strings.DESCRIPTION}
                           // placeholder={Strings.ZIP_CODE_PLACE_HOLDER}
                            returnKeyType='done'
                            onChangeText={e => setDescription(e)}
                            multiline={true}
                            numberOfLines={4}
                            style={{
                               
                              // alignItems:'flex-start',
                                borderRadius: 4, borderWidth: 0.4,
                                borderWidthColor: Colors.GRAY,
                                height: Scaling.HEIGHT_SCALE_100,
                                textAlignVertical: "top" 
                            }}
                        />
                        
       
                        <Button
                            text="Done"
                            onButtonPress={() => {
                                onSubmitDetails()
                            }}
                            viewStyle={styles.btn_next}
                        />
                        <TouchableOpacity>
                            <Text style={styles.terms_text}>
                                By Clicking, you agree to our
                             <Text style={{ color: Colors.BLUE }}> Terms and conditions.</Text>
                            </Text>
                        </TouchableOpacity>


                    </View>

                </KeyboardAwareScrollView>
                <View
                    style={[
                        {
                            // backgroundColor: '#F8F8F8',
                            flex: 1,
                            padding: Platform.OS === 'ios' ? 5 : 0,
                            // height: props.multiline ? null : 50,
                            // justifyContent: props.multiline ? 'flex-start' : 'center',
                        },
                    ]}>
                    <Modal
                        animationType="slide"
                        //transparent={true}
                        visible={serachModalVisible}
                        onRequestClose={() => setSearchModalVisible(false)}>
                        <View style={styles.mapModalContainer}>
                            <View style={styles.modalContentStyle}>

                                <GooglePlacesAutocomplete
                                    placeholder='Search'
                                    minLength={3}
                                    autoFocus={true}
                                    returnKeyType={'search'}
                                    listViewDisplayed={true}
                                    onPress={(data, details = null) => {
                                        console.log("========data ====>" + JSON.stringify(data))
                                        console.log("======== deatils====>" + JSON.stringify(details))
                                        //   this.searchLocationName(data.structured_formatting.main_text)
                                        //   this.props.navigation.state.params.locationDetails(details)
                                        // setServiceLocationLat(details.geometry.location.lat)
                                        // setServiceLocationLong(details.geometry.location.lng)
                                        // setServiceLocation(details.name)
                                        setLatitude(details.geometry.location.lat);
                                        setLongitude(details.geometry.location.lng);
                                        setAddress(details.name);
                                        updateHouseAddressLat(details.geometry.location.lat);
                                        updateHouseAddressLong(details.geometry.location.lng);
                                        updateHouseAddress(details.name)
                                        setSearchModalVisible(false);
                                        //  setBackbutton(true)
                                        // this.setState({
                                        //     showView: false
                                        //   }, () => { this.props.navigation.goBack(null) }
                                        //   )
                                    }}
                                    query={{
                                        // key: 'AIzaSyASnffvngAfbD_fX9IfpjUlact-o9nNrNo',
                                        key: 'AIzaSyBq16ekrXE3LHeDIwu3KDk0O9s-rMjZpqc',
                                        language: 'en',
                                    }}
                                    fetchDetails={true}
                                    nearbyPlacesAPI='GooglePlacesSearch'
                                    debounce={200}
                                    styles={{
                                        textInputContainer: {
                                            width: '100%',
                                            backgroundColor: Colors.WHITE,
                                            //  borderTopWidth: 1,
                                            // borderBottomWidth: 1,
                                            borderColor: Colors.LIGHT_BLACK,
                                        },
                                        textInput: {
                                            marginLeft: 0,
                                            marginRight: 0,
                                            height: Scaling.HEIGHT_SCALE_30,
                                            color: Colors.DARK_GRAY,
                                            fontSize: fontScale(16),
                                        },
                                        predefinedPlacesDescription: {
                                            color: Colors.SKY_BLUE,
                                            overflow: 'hidden'
                                        },
                                        listView: {
                                            backgroundColor: Colors.WHITE
                                        }
                                    }}
                                />

                                <Button
                                    onButtonPress={() => setSearchModalVisible(false)}
                                    text={Strings.CANCEL_BUTTON}
                                    textStyle={{ color: Colors.RED }}
                                />
                            </View>
                        </View>
                    </Modal>
                </View>

            </SafeAreaView>

        </>
    );
};
export default SignUpDetails;
const styles = StyleSheet.create({
    container: {
        padding: Scaling.PADDING_SCALE_20,
        backgroundColor: Colors.WHITE,
        flex: 1,
    },
    sub_container: {
        borderRadius: 8,
        alignItems: 'center',
        paddingVertical: Scaling.HEIGHT_SCALE_12,
        paddingHorizontal: Scaling.WIDTH_SCALE_24,
        marginHorizontal: Scaling.HEIGHT_SCALE_8,
    },
    location_text: {
        color: Colors.WHITE,
        fontSize: fontScale(20),
        fontWeight: 'bold'
    },
    sub_container1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Scaling.HEIGHT_SCALE_10
    },
    text1: {
        fontSize: fontScale(18),
        fontWeight: 'bold',
        color: Colors.BLACK
    },
    text2: {
        fontSize: fontScale(14),
        color: Colors.GRAY,
        marginTop: Scaling.HEIGHT_SCALE_10
    },
    btn_next: {
        marginTop: Scaling.HEIGHT_SCALE_20,
        // backgroundColor: '#F37727'
    },
    or_text: {
        color: Colors.GRAY,
        fontSize: fontScale(16),
        textAlign: 'center',
        marginVertical: Scaling.HEIGHT_SCALE_8,
    },
    terms_text: {
        color: Colors.GRAY,
        fontSize: fontScale(16),
        textAlign: 'center',
        marginTop: Scaling.HEIGHT_SCALE_24
    },
    copyright_text: {
        color: Colors.GRAY,
        fontSize: fontScale(16),
        textAlign: 'center'
    },
    modalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: hp('100%'),
        width: wp('100%'),
        backgroundColor: Colors.WHITE,
        paddingTop: Platform.OS === 'ios' ? 30 : 0,
        paddingBottom: Platform.OS === 'ios' ? 30 : 30,
    },
    mapModalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: hp('100%'),
        width: wp('100%'),
        backgroundColor: Colors.WHITE,
        paddingTop: Platform.OS === 'ios' ? 30 : 30,
        paddingBottom: Platform.OS === 'ios' ? 30 : 30,
    },
    modalContent: {
        // height: hp('100%'),
        // width: wp('100%'),
        // backgroundColor: '#F8F8F8',
        padding: Scaling.PADDING_SCALE_10,
        borderRadius: 5,
    },
    itemSeprator: {
        backgroundColor: Colors.placeholderText,
        height: 0.5,
        width: wp('100%'),
        marginVertical: Scaling.HEIGHT_SCALE_10,
    },
    // modalContainer: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     height: hp('100%'),
    //     width: wp('100%'),
    // },
    modalContentStyle: {
        height: hp('100%'),
        width: wp('100%'),
        backgroundColor: Colors.WHITE,
        paddingBottom: 30,
        borderRadius: 5,
        paddingTop: Platform.OS === 'ios' ? 30 : 0,
    },
    itemSeprator: {
        backgroundColor: Colors.GRAY,
        height: 0.5,
        width: wp('100%'),
        marginVertical: 10,
    },
});