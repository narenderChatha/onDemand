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
import FAB from 'react-native-fab'



const OnGoingJob = props => {


 
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
         <Text>Hello Request Jobs Screen </Text>
        </ScrollView>
     </>
    )

}
export default OnGoingJob;