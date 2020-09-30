import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
  AsyncStorage,
  StatusBar,
  Text,
  PermissionsAndroid,
  Platform,
  ScrollView,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors } from '../../../constants';



const PaymentMethod = props => {


 
    return (
        <>
        <ScrollView
          style={{
            // width: '100%',
            // height: '100%',
            flex: 1,
            backgroundColor: Colors.WHITE,
           // justifyContent:'center',
           // alignItems:'center'
          }}>
         <Text>Hello Search Screen details</Text>
        </ScrollView>
     </>
    )

}
export default PaymentMethod;

// import React, { useState, useEffect, useRef } from 'react';
// import {
//     View,
//     Text,
//     StyleSheet,
//     TouchableOpacity,
//     SafeAreaView,
//     ScrollView,
//     FlatList,
//     Alert,
//     Image,
//     ActivityIndicator,
//     SnapshotViewIOS,
// } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { fontScale } from '../../../utils/Helper';
// import { EditText, Button } from '../../../common/widgets';
// import Carousel from 'react-native-snap-carousel';
// import Images from '../../../assets/icons/AppImages'
// import { Screen, ShowSnack } from '../../../constants';
// import stripe, { PaymentCardTextField } from 'tipsi-stripe'
// import AsyncStorage from '@react-native-community/async-storage';
// import { StorageKey } from '../../../constants/AsyncStorageService';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import Colors from '../../../constants/Colors';
// import { StackActions } from '@react-navigation/native';
// import { useNetInfo } from '../../../utils/Helper'

// const SLIDER_WIDTH = Screen.width;
// const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.69);
// const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

// stripe.setOptions({
//     publishableKey: 'pk_test_7rnKkWzfRUKVb0EXBf382L7K00Lx8SdpO5',
//     androidPayMode: 'test',
// });

// const PaymentScreen = props => {
//     let _carousel = useRef(null);
//     // const cardNoInput = useRef(null);
//     // const cardExpiryYear = useRef(null);
//     // const cardExpiryMonth = useRef(null);
//     // const cardCvv = useRef(null);
//     // const cardHolder = useRef(null);

//     const [loading, setLoading] = useState(false);
//     const [loadingCrousal, setLoadingCrousal] = useState(true);
//     const [count, setCount] = useState(0);
//     //const [bankName, setBankName] = useState('');
//     const [cardNumber, setCardNumber] = useState('');
//     // const [ifscCode, setIfscCode] = useState('');

//     const [expiryYear, setExpiryYear] = useState('');
//     const [expiryMonth, setExpiryMonth] = useState('');
//     const [cvvNumber, setCvvNumber] = useState('');
//     const [cardHolderName, setCardHolderName] = useState('');
//     const [showCardList, setShowCardList] = useState([]);

//     const [activeSlide, setActiveSlide] = useState(0);
//     const [makeDefault, updateMakeDefult] = useState('');
//     const [loadingMakeDefault, setLoadingMakeDefault] = useState(false)
//     useEffect(() => {
//         getCardListData();

//     }, []);

//     const getCardListData = async () => {
//         const accessToken = await AsyncStorage.getItem(StorageKey.access_token);
//         //const phone_no = await AsyncStorage.getItem(StorageKey.phone_no);
//         if (accessToken !== null) {

//             const connectedState = await useNetInfo()
//             if (connectedState) {
//                 props.getCardListAction(accessToken);
//                 setLoadingCrousal(true)
//             }
//             else {
//                 setLoadingCrousal(false);
//                 //setConnectivity(true);
//                 // Toast.show('Check internet connectivity', Toast.LONG);
//                 ShowSnack('Check internet connectivity')
//             }
//         }
//     };

//     const onDeleteCard = async (cardId) => {
//         const accessToken = await AsyncStorage.getItem(StorageKey.access_token);
//         //const phone_no = await AsyncStorage.getItem(StorageKey.phone_no);
//         if (accessToken !== null) {

//             const connectedState = await useNetInfo()
//             if (connectedState) {
//                 props.deleteCardAction(accessToken, cardId);
//                 setLoadingCrousal(true)
//             }
//             else {
//                 setLoadingCrousal(false);
//                 //setConnectivity(true);
//                 // Toast.show('Check internet connectivity', Toast.LONG);
//                 ShowSnack('Check internet connectivity')
//             }
//         }
//     }
//     useEffect(() => {
//         // document.title = `You clicked ${count} times`;
//         let responseData = deleteCardResponse();
//         if (responseData != null) {
//             setTimeout(() => {
//                 // alert("");
//             }, 500);
//         }
//     }, [props.dataDeleteCardReducer.response]);

//     const deleteCardResponse = () => {
//         try {
//             if (props.dataDeleteCardReducer.loading == false) {
//                 if (props.dataDeleteCardReducer.response != null) {
//                     if (props.dataDeleteCardReducer.response.data.status === true) {
//                         //alert(JSON.stringify(props.dataGetCardListReducer.response.json()));
//                         let response = props.dataDeleteCardReducer.response;

//                         // setData(response.data)
//                         //setLoading(false)
//                         getCardListData();
//                         // alert(JSON.stringify(response.data.message))
//                         ShowSnack(response.data.message)
//                         // setVehicleList(response.data.data)
//                         console.log("=======get card list response====" + JSON.stringify(response))
//                         //alert(JSON.stringify(response.data.message))
//                         return null;
//                     } else {
//                         if (props.dataGetCardListReducer.response.data.code === 203) {
//                             Alert.alert(
//                                 "Session expired !",
//                                 "Please login again",
//                                 [

//                                     {
//                                         text: "OK", onPress: () => {
//                                             removeItemValue();
//                                             props.navigation.dispatch(StackActions.replace('welcome'), { screen: 'login' });
//                                         }
//                                     }
//                                 ],
//                                 { cancelable: false }
//                             );
//                         }
//                         else {
//                             setLoadingCrousal(false)
//                             ShowSnack(props.dataGetCardListReducer.response.data.message)
//                             console.log("card list error=========>  " + JSON.stringify(props.dataDeleteCardReducer.response))

//                         }
//                         //alert("Schedule List=========>  " + JSON.stringify(props.dataGetCardListReducer.response.data.message))
//                         return (props.dataDeleteCardReducer.response.data);
//                     }
//                 } else if (props.dataDeleteCardReducer.error != null) {
//                     return "error message";
//                 } else {
//                     return null;
//                 }
//             }
//         } catch (error) {
//             setLoading(false)
//             ShowSnack("Poor network");
//             console.log("delete card Response error" + JSON.stringify(error))
//         }

//         return null;
//     };



//     useEffect(() => {
//         // document.title = `You clicked ${count} times`;
//         let responseData = getCardListResponse();
//         if (responseData != null) {
//             setTimeout(() => {
//                 // alert("");
//             }, 500);
//         }
//     }, [props.dataGetCardListReducer.response]);

//     const getCardListResponse = () => {
//         try {
//             if (props.dataGetCardListReducer.loading == false) {
//                 if (props.dataGetCardListReducer.response != null) {
//                     if (props.dataGetCardListReducer.response.data.status === true) {
//                         //alert(JSON.stringify(props.dataGetCardListReducer.response.json()));
//                         let response = props.dataGetCardListReducer.response;
//                         setShowCardList(response.data.data)
//                         // setData(response.data)
//                         setLoadingCrousal(false)
//                         // setVehicleList(response.data.data)
//                         console.log("=======get card list response====" + JSON.stringify(response))
//                         //alert(JSON.stringify(response.data.message))
//                         return null;
//                     } else {

//                         if (props.dataGetCardListReducer.response.data.code === 203) {

//                             Alert.alert(
//                                 "Session expired !",
//                                 "Please login again",
//                                 [

//                                     {
//                                         text: "OK", onPress: () => {
//                                             removeItemValue();
//                                             props.navigation.dispatch(StackActions.replace('welcome'), { screen: 'login' });
//                                         }
//                                     }
//                                 ],
//                                 { cancelable: false }
//                             );
//                         }
//                         else {
//                             setLoadingCrousal(false)
//                             console.log("card list error=========>  " + JSON.stringify(props.dataGetCardListReducer.response))
//                             //alert("Schedule List=========>  " + JSON.stringify(props.dataGetCardListReducer.response.data.message))
//                             ShowSnack(props.dataGetCardListReducer.response.data.message)
//                         }
//                         return (props.dataGetCardListReducer.response.data);
//                     }
//                 } else if (props.dataGetCardListReducer.error != null) {
//                     return "error message";
//                 } else {
//                     return null;
//                 }
//             }
//         } catch (error) {
//             setLoading(false)
//             ShowSnack("Poor network");
//             console.log("get card list Response error" + JSON.stringify(error))
//         }

//         return null;
//     };

//     const makePaymentDefault = async () => {
//         //  console.log("===000====" + count);
//         const accessToken = await AsyncStorage.getItem(StorageKey.access_token);
//         if (accessToken !== null) {

//             const connectedState = await useNetInfo()
//             if (connectedState) {
//                 props.addDefaultCardAction(accessToken, makeDefault);
//                 setLoadingMakeDefault(true)
//             }
//             else {
//                 setLoadingMakeDefault(false);
//                 //setConnectivity(true);
//                 // Toast.show('Check internet connectivity', Toast.LONG);
//                 ShowSnack('Check internet connectivity')
//             }
//         }
//     }

//     const addNewCard = async () => {
//         const accessToken = await AsyncStorage.getItem(StorageKey.access_token);
//         //const phone_no = await AsyncStorage.getItem(StorageKey.phone_no);


//         if (cardNumber.length <= 0) {
//             ShowSnack("Please enter card number")
//             // alert('Store name can not be empty');
//         }
//         else if (cardNumber.length < 9) {
//             ShowSnack("Please enter valid card number")
//         }
//         else if (cardNumber.length > 16) {
//             ShowSnack("Please enter valid card number")
//         }
  
//         else if (expiryMonth.length===0) {
//             ShowSnack("Please enter expiry month")
//         }
//         else if(expiryMonth.length != 2)
//         {
//             ShowSnack("Expiry month must be 2 digit")   
//         }

//         else if (expiryYear.length ===0 ) {
//             ShowSnack("Please enter expiry year")
//         }
//         else if(expiryYear.length !=2)
//         {
//             ShowSnack("Expiry year must be 2 digit")
            
//         }
//         else if (cvvNumber.length ===0) {
//             ShowSnack("Please enter cvv number")
//         }
//         else if(cvvNumber.length !=3)
//         {
//             ShowSnack("Cvv must be 3 digit")
//         }
//         else if (cardHolderName.length === 0) {
//             ShowSnack("Please enter card holder name")
//         }
//         else {
//             if (accessToken !== null) {
//                 const params = {
//                     number: cardNumber,
//                     expMonth: JSON.parse(expiryMonth),
//                     expYear: JSON.parse(expiryYear),
//                     cvc: cvvNumber,
//                     name: cardHolderName,
//                     // currency: 'usd',
//                     // addressLine1: '123 Test Street',
//                     // addressLine2: 'Apt. 5',
//                     // addressCity: 'Test City',
//                     // addressState: 'Test State',
//                     // addressCountry: 'Test Country',
//                     // addressZip: '55555',
//                 };

//                 stripe.createTokenWithCard(params).then(async (token) => {
//                     console.log('strip token =====-------------' + JSON.stringify(token));
//                     const connectedState = await useNetInfo()
//                     if (accessToken !== null) {
//                         if (connectedState) {
//                             props.addCardAction(accessToken, token.tokenId, token.card);
//                             setLoading(true)
//                         }
//                         else {
//                             setLoading(false);
//                             //setConnectivity(true);
//                             // Toast.show('Check internet connectivity', Toast.LONG);
//                             ShowSnack('Check internet connectivity')
//                         }
//                     }
//                     //  addPaymentMethod(token.tokenId);
//                     // this.setState({
//                     //   params: [],
//                     // });
//                 }).catch(e=>{
//                     ShowSnack(e.message)
//                     console.log("error  ====> "+JSON.stringify(e))
//                 });
//             }
//         }
//     }


//     useEffect(() => {
//         // document.title = `You clicked ${count} times`;
//         let responseData = addCardResponse();
//         if (responseData != null) {
//             setTimeout(() => {
//                 // alert("");
//             }, 500);
//         }
//     }, [props.dataAddPaymentCard.response]);

//     const addCardResponse = () => {
//         try {
//             if (props.dataAddPaymentCard.loading == false) {
//                 if (props.dataAddPaymentCard.response != null) {
//                     if (props.dataAddPaymentCard.response.data.status === true) {

//                         let response = props.dataAddPaymentCard.response;

//                         console.log("=======add card response====" + JSON.stringify(response))
//                         getCardListData();

//                         setLoading(false);
//                         setCardNumber('');
//                         setExpiryMonth('');
//                         setExpiryYear('');
//                         setCvvNumber('');
//                         setCardHolderName('');
//                         ShowSnack(response.data.message)
//                         // alert(JSON.stringify(response.data.message))
//                         return null;
//                     } else {
//                         if (props.dataAddPaymentCard.response.data.code === 203) {

//                             Alert.alert(
//                                 "Session expired !",
//                                 "Please login again",
//                                 [

//                                     {
//                                         text: "OK", onPress: () => {
//                                             removeItemValue();
//                                             props.navigation.dispatch(StackActions.replace('welcome'), { screen: 'login' });
//                                         }
//                                     }
//                                 ],
//                                 { cancelable: false }
//                             );
//                         }
//                         else {

//                             setLoading(false)
//                             ShowSnack(props.dataAddPaymentCard.response.data.message)
//                             console.log("add card error=========>  " + JSON.stringify(props.dataAddPaymentCard.response))

//                         }
//                         //   alert("Schedule List=========>  " + JSON.stringify(props.dataAddPaymentCard.response.data.message))
//                         return (props.dataAddPaymentCard.response.data);
//                     }
//                 } else if (props.dataAddPaymentCard.error != null) {
//                     return "error message";
//                 } else {
//                     return null;
//                 }
//             }
//         } catch (error) {
//             setLoading(false)
//             ShowSnack("Poor network");
//             console.log("add card  Response error" + JSON.stringify(error))
//         }

//         return null;
//     };

//     const removeItemValue = async () => {
//         try {
//             await AsyncStorage.removeItem(StorageKey.access_token);
//             return true;
//         }
//         catch (exception) {
//             return false;
//         }
//     }

//     useEffect(() => {
//         // document.title = `You clicked ${count} times`;
//         let responseData = addDefaultCardResponse();
//         if (responseData != null) {
//             setTimeout(() => {
//                 // alert("");
//             }, 500);
//         }
//     }, [props.dataAddDefaultPaymentCard.response]);

//     const addDefaultCardResponse = () => {
//         try {
//             if (props.dataAddDefaultPaymentCard.loading == false) {
//                 if (props.dataAddDefaultPaymentCard.response != null) {
//                     if (props.dataAddDefaultPaymentCard.response.data.status === true) {
//                         //alert(JSON.stringify(props.dataAddPaymentCard.response.json()));
//                         let response = props.dataAddDefaultPaymentCard.response;
//                         // setData(response.data)
//                         setLoadingMakeDefault(false)
//                         props.createPaymentResetState();
//                         // setVehicleList(response.data.data)
//                         console.log("=======add default card response====" + JSON.stringify(response))
//                         alert(JSON.stringify(response.data.message))
//                         return null;
//                     } else {

//                         if (props.dataAddDefaultPaymentCard.response.data.code === 203) {

//                             Alert.alert(
//                                 "Session expired !",
//                                 "Please login again",
//                                 [

//                                     {
//                                         text: "OK", onPress: () => {
//                                             removeItemValue();
//                                             props.navigation.dispatch(StackActions.replace('welcome'), { screen: 'login' });
//                                         }
//                                     }
//                                 ],
//                                 { cancelable: false }
//                             );
//                         }
//                         else {
//                             setLoadingMakeDefault(false)
//                             console.log("add default card=========>  " + JSON.stringify(props.dataAddDefaultPaymentCard.response))

//                             ShowSnack(props.dataAddDefaultPaymentCard.response.data.message)
//                             //  console.log("add card error=========>  " + JSON.stringify(props.dataAddPaymentCard.response))

//                         }
//                         //  alert("Schedule List=========>  " + JSON.stringify(props.dataAddDefaultPaymentCard.response.data.message))
//                         return (props.dataAddDefaultPaymentCard.response.data);
//                     }
//                 } else if (props.dataAddDefaultPaymentCard.error != null) {
//                     return "error message";
//                 } else {
//                     return null;
//                 }
//             }
//         } catch (error) {
//             setLoading(false)
//             ShowSnack("Poor network");
//             console.log("add default card  Response error" + JSON.stringify(error))
//         }
//         // console.log("====getUserProfileResponse=====>"+JSON.stringify(props.dataAddPaymentCard.response));

//         return null;
//     };



//     const renderCardView = ({ item, index, currentIndex }) => {
//         //console.log("===---===---=="+index)
//         if (activeSlide === index) {
//             //  console.log("===========>", JSON.stringify(item))
//             updateMakeDefult(item.card_id);
//         }
//         return (
//             <>
//                 <View
//                     style={{
//                         flex: 1,
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         margin: 10,
//                     }}>

//                     <View style={{
//                         backgroundColor: Colors.JAFFA,
//                         padding: 15,
//                         borderRadius: 8,
//                         width: Screen.width / 1.5,
//                     }}>
//                         <View style={{
//                             flexDirection: 'row',
//                             justifyContent: 'space-between',
//                         }}>
//                             <View style={{
//                                 flexDirection: 'row',
//                                 justifyContent: 'center',
//                                 alignItems: 'center'
//                             }}>
//                                 <Image source={Images.ic_chip}
//                                     style={{
//                                         height: 40, width: 40,
//                                         resizeMode: 'contain',
//                                         marginRight: 10
//                                     }} />
//                                 <Text style={{
//                                     fontSize: fontScale(14),
//                                     color: Colors.WHITE,
//                                     fontWeight: '700',
//                                     textAlign: 'center',

//                                 }}>{item.brand}</Text>

//                             </View>
//                             <TouchableOpacity onPress={() => { onDeleteCard(item.card_id) }}>
//                                 <Image source={Images.ic_delete_icon}
//                                     style={{
//                                         height: 40,
//                                         width: 40,
//                                         resizeMode: 'contain'
//                                     }} />
//                             </TouchableOpacity>
//                         </View>
//                         <View>
//                             <Text style={{
//                                 fontSize: fontScale(12),
//                                 color: Colors.WHITE,
//                                 fontWeight: '700',
//                                 marginTop: 30
//                             }}>**** **** **** {item.last4}</Text>
//                         </View>
//                         <View>
//                             <Text style={{
//                                 fontSize: fontScale(12),
//                                 color: Colors.WHITE,
//                                 fontWeight: '700',
//                                 marginTop: 10,
//                                 marginBottom: 10,
//                             }}>Expiry Date {item.exp_month}/{item.exp_year}</Text>
//                         </View>
//                         <View>
//                             <Text style={{
//                                 fontSize: fontScale(12),
//                                 color: Colors.WHITE,
//                                 fontWeight: '700',
//                                 marginTop: 10,
//                                 marginBottom: 10,
//                             }}>{item.cardHolderName}</Text>
//                         </View>
//                     </View>
//                 </View>
//             </>
//         )
//     }

//     return (
//         <>
//             <SafeAreaView style={{ flex: 1, backgroundColor: Colors.WHITE }}>

//                 <KeyboardAwareScrollView style={{ flex: 1 }}>
//                     <View style={{ marginTop: 10 }}
//                     >
//                         {loadingCrousal ? (
//                             <ActivityIndicator size="large" style={{ marginTop: 45, }} color={Colors.YELLOW} />
//                         ) : (
//                                 <Carousel
//                                     layout={'default'}
//                                     ref={(c) => {
//                                         _carousel = c
//                                         // console.log("=======>check"+JSON.stringify(c))
//                                     }}
//                                     data={showCardList}
//                                     renderItem={renderCardView}
//                                     sliderWidth={SLIDER_WIDTH}
//                                     itemWidth={ITEM_WIDTH}
//                                     //hasParallaxImages={true}
//                                     inactiveSlideScale={0.94}
//                                     inactiveSlideOpacity={0.7}
//                                     onSnapToItem={(index) => setActiveSlide(index)}
//                                 //hasParallaxImages={true}
//                                 />
//                             )}
//                     </View>
//                     {loadingMakeDefault ? (
//                         <ActivityIndicator size="large" style={{ marginTop: 45, }} color={Colors.YELLOW} />
//                     ) : (
//                             <View style={{ alignItems: 'center', marginTop: 20 }}>
//                                 <Button
//                                     onButtonPress={makePaymentDefault}
//                                     viewStyle={{
//                                         backgroundColor: Colors.YELLOW,
//                                         height: 40,
//                                         width: ITEM_WIDTH - 30,
//                                         paddingHorizontal: 0,
//                                         // paddingVertical: 0,                    
//                                     }}
//                                     textStyle={{
//                                         fontSize: fontScale(12),
//                                         fontWeight: '500',
//                                         color: Colors.WHITE,
//                                     }}
//                                     text="Make This Card As Default" />
//                             </View>
//                         )}
//                     <View style={{ marginTop: 70, marginBottom: 20 }}>
//                         <Text style={{
//                             marginLeft: 15,
//                             marginBottom: -10,
//                         }}>Add New Payment Method</Text>

//                         <View style={{ margin: 20 }}>

//                             <EditText
//                                 value={cardNumber}
//                                 //   ref={cardNoInput}
//                                 returnKeyType='done'

//                                 keyboardType="number-pad"
//                                 onChangeText={text => setCardNumber(text)}
//                                 placeholder='Card Number' />
//                             <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
//                                 <EditText
//                                     value={expiryMonth}
//                                     keyboardType="number-pad"
//                                    returnKeyType='done'

//                                     //  ref={cardExpiryMonth}
//                                     onChangeText={text => setExpiryMonth(text)}
//                                     textStyle={{ marginBottom: 20 }}
//                                     style={{ flex: 1, marginRight: 20, marginBottom: 10 }}
//                                     placeholder='Expiration Month (MM)' />
//                                 <EditText
//                                     value={expiryYear}
//                                     keyboardType="number-pad"
//                                     returnKeyType='done'
 
//                                     // ref={cardExpiryYear}
//                                     onChangeText={text => setExpiryYear(text)}
//                                     textStyle={{ marginBottom: 20 }}
//                                     style={{ flex: 1, marginBottom: 10 }}
//                                     placeholder='Expiration Year (YY)' />
//                             </View>
//                             <EditText
//                                 returnKeyType='done'

//                                 keyboardType="number-pad"
//                                 //ref={cardCvv}
//                                 value={cvvNumber}
//                                 onChangeText={text => setCvvNumber(text)}
//                                 placeholder='Cvv'

//                             />

//                             <EditText
//                                 value={cardHolderName}
//                                 //ref={cardHolder}
//                                 onChangeText={text => setCardHolderName(text)}
//                                 //style={{marginBottom:60}}
//                                 placeholder='Cardholder Name' />
//                         </View>

//                     </View>
//                 </KeyboardAwareScrollView>
//                 {loading ? (
//                     <ActivityIndicator size="large" style={{ marginTop: 45, }} color={Colors.YELLOW} />
//                 ) : (
//                         <TouchableOpacity
//                             onPress={() => addNewCard()}
//                             style={{
//                                 height: 60,
//                                 backgroundColor: Colors.JAFFA,
//                                 justifyContent: 'center',
//                                 alignItems: 'center',
//                                 width: Screen.width,
//                                 // position: 'absolute',
//                                 // bottom: 0,
//                             }}>
//                             <Text style={{
//                                 color: Colors.WHITE,
//                                 fontSize: fontScale(16), fontWeight: '700'
//                             }}>Add New</Text>
//                         </TouchableOpacity>
//                     )}
//             </SafeAreaView>
//         </>
//     )
// }
// export default PaymentScreen;