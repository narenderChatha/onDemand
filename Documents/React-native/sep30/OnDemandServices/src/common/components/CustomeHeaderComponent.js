import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

//import { ifIphoneX } from 'react-native-iphone-x-helper'

import { Colors, Scaling, Screen } from '../../constants'
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';
import Images from '../../assets/AppImages';
import { fontScale } from '../../constants/FontSize';

import LinearGradient from 'react-native-linear-gradient';

const CustomeHeaderComponent = props => {

const onPressButton=()=>{
//  props.onPressBack
  console.log("kllkjlk>"+JSON.stringify(props.onPressBack))
  props.navigation.goBack();
}
  return (
    <>

      <LinearGradient
        colors={[Colors.GREEN, Colors.MIXED_GREEN_BLUE, Colors.BLUE]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={[StyleSheet.absoluteFill, styles.container]}
      >


        <View style={{
        //  backgroundColor: Colors.LIGHT_CERISE,

          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
          <Text style={{ fontSize: fontScale(16), color: Colors.WHITE, fontWeight: '700' }}>{props.headerTitle}</Text>
          {props.showBackButton?<View style={{ position: 'absolute', left: 15 }}>
        
        <TouchableOpacity style={{  height: 20, width: 20 , zIndex:10000}} onPress={()=>{props.navigation.goBack()}}>
          <Image source={Platform.OS === 'ios' ? Images.ic_ios_back : Images.ic_back_w}
           style={{ tintColor: Colors.WHITE, height: 20, width: 20 }} />
        </TouchableOpacity>
      </View>:<View/>}
        
        </View>
      </LinearGradient>
    </>
  );
};

export default CustomeHeaderComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
   // padding: 16,
    backgroundColor: 'white',
    //height: 60,
    width: Screen.width,
    ...ifIphoneX({
      height: 80,
      paddingTop: 30
    }, {
      height: 57,
      paddingTop: 0
    }),
  },
  image: { height: 80, width: 80 },
  sub_container: { flex: 1, paddingLeft: 8 },
  name_view: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  text1: { color: 'black', fontSize: fontScale(14), flex: 1, fontWeight: 'bold' },
  notification_text: { color: 'black', fontSize: fontScale(12), flex: 1, marginTop: 8 },
  date_text: { color: 'black', fontSize: fontScale(12), flex: 1, textAlign: 'right' }
});