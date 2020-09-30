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



const AvailabilityScreen = props => {


 
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
export default AvailabilityScreen;