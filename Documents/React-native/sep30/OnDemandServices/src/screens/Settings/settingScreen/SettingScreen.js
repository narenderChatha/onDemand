import React, { useState, useEffect } from 'react';
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
  FlatList,
  Switch
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors, FontName, Scaling, Strings } from '../../../constants';
import CustomeHeaderComponent from '../../../common/components/CustomeHeaderComponent';
import Images from '../../../assets/AppImages';
import { fontScale } from '../../../constants/FontSize';
import { RouteKeys } from '../../../routes/RouteKeys';
import TextComponent from '../../../common/widgets/TextComponent';

const proList = [
  {
    name: Strings.PORTFOLIO_GALLERY,
    icon: Images.ic_portfolio_gallery,
    target: RouteKeys.PORTFOLIO_GALLERY,
  },
  {
    name: Strings.PAYMENT_METHOD,
    icon: Images.ic_upgrade,
    target: RouteKeys.PAYMENT_METHOD,
  },
  {
    name: Strings.PAYMENT_HISTORY,
    icon: Images.ic_payment_history,
    target: RouteKeys.PAYMENT_HISTORY,
  },
  {
    name: Strings.AVAILABLILITY,
    icon: Images.ic_availability,
    target: RouteKeys.AVAILABILITY_SCREEN,
  },
  {
    name: Strings.CHANGE_PASSWORD,
    icon: Images.ic_change_password,
    target: RouteKeys.CHANGE_PASSWORD,
  },
  {
    name: Strings.HELP_AND_SUPPORT,
    icon: Images.ic_help_support,
    target: RouteKeys.HELP_AND_SUPPORT,
  },
  {
    name: Strings.TERMS_AND_CONDITIONS,
    icon: Images.ic_terms_conditions,
    target: RouteKeys.TERMS_AND_CONDITIONS,
  },
  {
    name: Strings.PRIVACY_POLICY,
    icon: Images.ic_terms_conditions,
    target: RouteKeys.PRIVACY_POLICY,
  },
  {
    name: Strings.DISCLAIMER,
    icon: Images.ic_terms_conditions,
    target: RouteKeys.DISCLAIMER,
  },
  {
    name: Strings.DISCLAIMER,
    icon: Images.ic_terms_conditions,
    target: RouteKeys.LOGIN,
  },
];

const needAProList = [
  {
    name: Strings.CHANGE_PASSWORD,
    icon: Images.ic_change_password,
    target: RouteKeys.CHANGE_PASSWORD,
  },
  {
    name: Strings.ADDRESS,
    icon: Images.ic_address,
    //target: '',
  },
  {
    name: Strings.HELP_AND_SUPPORT,
    icon: Images.ic_help_support,
    target: RouteKeys.HELP_AND_SUPPORT,
  },
  {
    name: Strings.TERMS_AND_CONDITIONS,
    icon: Images.ic_terms_conditions,
    target: RouteKeys.TERMS_AND_CONDITIONS,
  },

  {
    name: Strings.PRIVACY_POLICY,
    icon: Images.ic_terms_conditions,
    target: RouteKeys.PRIVACY_POLICY,
  },
  {
    name: Strings.DISCLAIMER,
    icon: Images.ic_terms_conditions,
    target: RouteKeys.DISCLAIMER,
  },
  {
    name: Strings.LOGOUT,
    icon: Images.ic_logout,
    target: RouteKeys.LOGIN,
  },
]
const SettingScreen = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabledNotification, setIsEnabledNotification] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);



  const goToScreen = (targetScreen, name) => {
    if (name === 'Logout')
    {
      props.navigation.navigate(targetScreen)
    }
    else
    {
      props.navigation.navigate(targetScreen)
      }
   
    // if (screenName !== null)
    //   NavigationService.navigate(screenName, {name: name});
  };
  return (
    <>
      <View style={{ flex: 1 }}>


        <ScrollView
          style={{
            // width: '100%',
            // height: '100%',
            flex: 1,
            backgroundColor: Colors.WHITE,
            //  justifyContent:'center',
            //  alignItems:'center'
          }}>
          <TouchableOpacity
            onPress={() => { props.navigation.navigate(RouteKeys.PROFILE_SCREEN) }}
            style={{
              flexDirection: 'row',
              marginVertical: Scaling.HEIGHT_SCALE_15,
              marginHorizontal: Scaling.WIDTH_SCALE_15
            }}>
            <View >
              <Image source={Images.img3}
                style={{
                  height: Scaling.HEIGHT_SCALE_80, width: Scaling.HEIGHT_SCALE_80,
                  borderRadius: Scaling.HEIGHT_SCALE_40,
                }} />
            </View>
            <View style={{
              marginVertical: Scaling.HEIGHT_SCALE_15,
              marginHorizontal: Scaling.WIDTH_SCALE_15,
              justifyContent: 'center',
            }}>
              <View>
                <Text style={{
                  fontSize: fontScale(16),
                  fontFamily: FontName.RALEWAY_BOLD,
                  marginBottom: Scaling.HEIGHT_SCALE_5
                }}>Hi, Dwayne Johnson</Text>
              </View>
              <View>
                <Text style={{
                  fontSize: fontScale(14),
                  marginBottom: Scaling.HEIGHT_SCALE_5,
                  color: Colors.BLUE
                }}>San Francisco, CA 9656667, USA</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{
            height: 4, width: wp('100%'),
            backgroundColor: Colors.LIGHT_GRAY
          }} />
          <FlatList
            data={needAProList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                {item.name === "Address" ? <TouchableOpacity
                  onPress={() => {
                   // goToScreen(item.target, item.name)
                  }
                  }
                >
                  <View
                    style={{
                      backgroundColor: Colors.WHITE,
                      padding: Scaling.PADDING_SCALE_5,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent:'space-between'
                    }}>
                    <View
                      style={{
                        backgroundColor: Colors.WHITE,
                        padding: Scaling.PADDING_SCALE_5,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{
                          height: Scaling.HEIGHT_SCALE_50,
                          width: Scaling.HEIGHT_SCALE_50,
                          marginHorizontal: Scaling.WIDTH_SCALE_10,
                          resizeMode: 'contain',
                        }}
                        source={item.icon}
                      />
                      <TextComponent
                        style={{ fontSize: fontScale(16), paddingHorizontal: Scaling.WIDTH_SCALE_10 }}>
                        {item.name}
                      </TextComponent>
                    </View>
                    <Switch
                                trackColor={{ false: Colors.LIGHT_BLACK, true: Colors.BLUE }}
                                thumbColor={Colors.WHITE}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                  </View>
                </TouchableOpacity> : <TouchableOpacity
                  onPress={() => {
                    goToScreen(item.target, item.name)
                  }
                  }
                >
                    <View
                      style={{
                        backgroundColor: Colors.WHITE,
                        padding: Scaling.PADDING_SCALE_5,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{
                          height: Scaling.HEIGHT_SCALE_50,
                          width: Scaling.HEIGHT_SCALE_50,
                          marginHorizontal: Scaling.WIDTH_SCALE_10,
                          resizeMode: 'contain',
                        }}
                        source={item.icon}
                      />
                      <TextComponent
                        style={{ fontSize: fontScale(16), paddingHorizontal: Scaling.WIDTH_SCALE_10 }}>
                        {item.name}
                      </TextComponent>
                    </View>
                  </TouchableOpacity>}
              </View>
            )}
            ItemSeparatorComponent={() => (
              <View style={{
                height: Scaling.HEIGHT_SCALE_4,
                width: wp('100%'),
                backgroundColor: Colors.LIGHT_GRAY
              }} />
            )}
          />
        </ScrollView>

      </View>
    </>
  )

}
export default SettingScreen;