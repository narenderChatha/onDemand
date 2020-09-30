

import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
  AsyncStorage,
  StatusBar,
  PermissionsAndroid,
  Platform,
  ScrollView,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DeviceInfo from 'react-native-device-info';
import TextComponent from '../../../common/widgets/TextComponent';
import { fontScale } from '../../../constants/FontSize';
import { Colors, FontName, Strings, Scaling } from '../../../constants';
import Images from '../../../assets/AppImages';


const OtherUserProfileScreen = props => {


 
    return (
        <>
        <ScrollView
          style={{
            // width: '100%',
            // height: '100%',
            flex: 1,
            backgroundColor: Colors.WHITE,
          }}>
          <View style={{width: wp('100%'), height: hp('30%')}}>
            <ImageBackground
              source={
                 Images.dummyImage
                 
              }
              resizeMode={'cover'}
              style={{width:wp('100%'), height: hp('30%')}}>
              {/* <View style={{paddingVertical: Platform.OS === 'ios' ? 50 : 15}}>
                <View
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    padding: 10,
                  }}>
                  <TextComponent
                    style={{
                      textAlign: 'center',
                      fontFamily: FontName.RALEWAY_BOLD,
                      fontSize: fontScale(18),
                    }}>
                    Profile
                  </TextComponent>
                </View> 
              </View>*/}
              <TouchableOpacity
              //  onPress={() => this.openDrawer()}
                style={{
                  position: 'absolute',
                  left: Scaling.WIDTH_SCALE_15,
                  top: Platform.OS === 'ios' ? Scaling.HEIGHT_SCALE_15 : Scaling.HEIGHT_SCALE_15,
                }}>
                {/* <Image source={Images.ic_menu_black} style={{marginTop: 6}} /> */}
              </TouchableOpacity>
              <TouchableOpacity
               // onPress={() => this.checkAndroidPermissions()}
                style={{
                  position: 'absolute',
                  right: Platform.OS === 'ios' ?Scaling.WIDTH_SCALE_5:Scaling.WIDTH_SCALE_15,
                  bottom: Platform.OS === 'ios' ?Scaling.HEIGHT_SCALE_5:Scaling.HEIGHT_SCALE_15,
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  height: Scaling.HEIGHT_SCALE_40,
                  width: Scaling.HEIGHT_SCALE_40,
                  borderRadius:Scaling.HEIGHT_SCALE_20,
                 justifyContent: 'center',
                 alignItems: 'center',
                }}>
                <Image
                  source={Images.photo_camera}
                   style={{height: Scaling.HEIGHT_SCALE_30, width: Scaling.HEIGHT_SCALE_30, tintColor:Colors.BLACK, resizeMode:'contain' }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  left: Scaling.WIDTH_SCALE_15,
                  bottom: Scaling.HEIGHT_SCALE_15,
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  height: Scaling.HEIGHT_SCALE_40,
                  width: Scaling.HEIGHT_SCALE_40,
                  borderRadius: Scaling.HEIGHT_SCALE_20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => this.openPersonalDetails()}>
                <Image source={Images.ic_edit} style={{tintColor: 'black'}} />
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={{padding: 15, paddingVertical: 30}}>
            <View style={{ marginVertical: 10}}>
              <TextComponent style={{fontSize: fontScale(15)}}>
                {Strings.NAME}
              </TextComponent>
              <TextComponent
                style={{
                  width: wp('50%'),                
                  fontSize: fontScale(15),
                  color:Colors.BLACK
                }}>
                name
              </TextComponent>
            </View>
            <View style={{ marginVertical: 10}}>
              <TextComponent style={{fontSize: fontScale(15)}}>
                {Strings.EMAIL}
              </TextComponent>
              <TextComponent
                style={{
                  width: '50%',
                  color:Colors.BLACK,
               
                  fontSize: fontScale(15),
                }}>
                nagjhgj@gjk.com
              </TextComponent>
            </View>
            <View style={{ marginVertical: 10}}>
              <TextComponent style={{fontSize: fontScale(15)}}>
                {Strings.MOBILE}
              </TextComponent>
              <TextComponent
                style={{
                  width: '50%',
                  color:Colors.BLACK,
                
                  fontSize: fontScale(15),
                }}>
               980980809809
              </TextComponent>
            </View>
            <View style={{ marginVertical: 10}}>
              <TextComponent style={{fontSize: fontScale(15)}}>
                {Strings.ADDRESS}
              </TextComponent>
              <TextComponent
                style={{
                  width: '50%',
                  color:Colors.BLACK,
          
                  fontSize: fontScale(15),
                }}>
                sec 45
              </TextComponent>
            </View>
            <View style={{ marginVertical: 10}}>
              <TextComponent style={{fontSize: fontScale(15)}}>
                {Strings.AVAILABLILITY}
              </TextComponent>
              <TextComponent
                style={{
                  width: '50%',
                  color:Colors.BLACK,
            
                  fontSize: fontScale(15),
                }}>
                Available
              </TextComponent>
            </View>

            <View style={{marginVertical: 10}}>
              <TextComponent style={{fontSize: fontScale(15)}}>
                {Strings.NUMBER_OF_JOBSYOU_ARE_WILLING_TO_TAKE_ONEACH_OTHER}
              </TextComponent>
              <TextComponent
                style={{
                  width: '50%',
                  color:Colors.BLACK,
              
                  fontSize: fontScale(15),
                }}>
                1Available
              </TextComponent>
            </View>
            {/* <TextComponent
              style={{
                fontSize: fontScale(18),
                // marginTop: 50,
                marginBottom: 20,
              }}>
              {'Instagram Account'}
            </TextComponent>
            <ButtonComponent name={'Link Instagram Account'} /> */}
          </View>
        </ScrollView>
     </>
    )

}
export default OtherUserProfileScreen;