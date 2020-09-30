import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';

import ViewPager from '@react-native-community/viewpager';
import {Strings, Colors, FontName, Scaling} from '../../constants';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import Images from '../../assets/AppImages';
import { RouteKeys } from '../../routes/RouteKeys';
import { fontScale } from '../../constants/FontSize';

const initialArr = [
  {
    id: 0,
    image:Images.finder,
    title: Strings.FIND_YOUR_PRO,
    text: Strings.FIND_YOUR_PRO_DESCRIPTION,
  },
  {
    id: 1,
    image:Images.deals,
    title: Strings.PROFESSIONAL_SERVICES,
    text: Strings.PROFESSIONAL_SERVICES_DESCRIPTION,
  },
  {
    id: 2,
    image:Images.employeeGif,
    title: Strings.DUMMY_TEXT_SERVICES,
    text: Strings.DUMMY_TEXT_SERVICES_DESCRIPTION,
  },
];

const AppIntroScreen = (props) => {
  const viewPager = useRef(null);

  const [text, setText] = useState(['Accept Job']);
  const [pageIndex, setPageIndex] = useState(0);

  setPageIndexValue = (index) => {
    setPageIndex(pageIndex + 1);
    viewPager.current.setPage(pageIndex + 1);
  };
const onPressGetStartedButton=()=>{
  props.navigation.dispatch(StackActions.replace(RouteKeys.WELCOME));
}
  return (
    <>
      <View style={styles.container}>
    
        <ViewPager
          onPageSelected={(e) => setPageIndex(e.nativeEvent.position)}
          //style={styles.viewPager}
          style={{ flex: 1 }}
         
          initialPage={pageIndex}
          ref={viewPager}>
          {initialArr.map((item, index) => {
            return (             
              <View style={styles.lottieView}  key={item.id}>
              <LottieView source={item.image} autoPlay loop style={{height: Scaling.HEIGHT_SCALE_250, }}/>
                <View  key={item.id} style={styles.textView}>
                  <Text style={styles.text1}>{item.title}</Text>
                  <Text style={styles.text2}>{item.text}</Text>
                </View>
              </View>             
             
            );
          })}
        </ViewPager>
        <View style={styles.sub_container}>
          <View style={styles.sub_container2}>
            {initialArr.map((item, index) => {
              return (
                <View
                key={item.id}
                  style={{
                    width: 15,
                    height: 5,
                    backgroundColor:
                      index === pageIndex ? Colors.GREEN: Colors.GRAY,
                    margin: 5,
                  }}
                />
              );
            })}
            {/* <View style={[styles.slider_view]} />
                        <View style={[styles.slider_view,
                             { backgroundColor: 'gray', marginHorizontal: 4 }]} />
                        <View style={[styles.slider_view,
                             { backgroundColor: 'gray' }]} /> */}
          </View>
          {/* {initialArr.map((item, index) => {
                            return ( */}
          <View style={{alignItems:'flex-end'}}>
            {pageIndex == 2 ? (
              <TouchableOpacity onPress={() => {
                onPressGetStartedButton()
              }}>
                <Text
                  style={styles.nextButton}
                //   onPress={
                //     () =>
                //     //  props.navigation.dispatch(StackActions.replace('welcome'))
                //     //   props.navigation.navigate('welcome')
                //   }
                  >
                  {Strings.GET_STARTED_BUTTON}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={styles.nextButton}
                  onPress={(e) => {
                    setPageIndexValue(pageIndex);
                  }}>
                  {Strings.NEXT_BUTTON}
                </Text>
              </TouchableOpacity>
            )}
          </View>
          {/* );
                    })} */}
        </View>
      </View>
    </>
  );
};

export default AppIntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'flex-end',
    justifyContent:'center',
    padding: Scaling.PADDING_SCALE_30,
    backgroundColor: Colors.WHITE,
  },
  textView:{backgroundColor: Colors.WHITE,flex:0.5},
  lottieView:{flex:2, alignItems:'center', justifyContent:'center'},
  text1: {
    fontSize: fontScale(24),
    fontWeight: 'bold',
    color: Colors.GREEN,
    marginBottom:Scaling.HEIGHT_SCALE_20,
   // marginTop:
  },
  text2: {
    fontSize:fontScale(14),
    color: Colors.BLACK,
    marginTop: Scaling.HEIGHT_SCALE_16,
    marginBottom:Scaling.HEIGHT_SCALE_40,
    fontFamily: FontName.SF_PRO_DISPLAY_REGULAR,
  },
  sub_container: {
    flexDirection: 'column',
   marginTop:Scaling.HEIGHT_SCALE_50,
  },
  nextButton: {
    fontSize:fontScale(20),
    color:Colors.BLUE,
    fontWeight: 'bold',
    fontFamily: FontName.RALEWAY_BOLD,
  },
//   getStartedButton:{
//     fontSize: 18,
//     color:Colors.BLUE,
//     fontWeight: 'bold',
//     fontFamily: FontName.RALEWAY_BOLD,
//   },
  sub_container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom:Scaling.HEIGHT_SCALE_70,
    flex: 1,
  },
  slider_view: {
    borderRadius: 8,
    //  backgroundColor: Colors.SAN_MARINO,
    width: Scaling.WIDTH_SCALE_20,
    height: Scaling.HEIGHT_SCALE_8,
  },
});
