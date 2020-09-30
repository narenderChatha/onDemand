import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { fontScale } from '../../constants/FontSize';
import Images from '../../assets/AppImages';
import { Colors, FontName, Scaling, Strings } from '../../constants';
import { Rating, AirbnbRating } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';


const JobComponent = props => {

    return (
        <>
            <View style={styles.container}>
  

                <View style={styles.subContainer}>
                    <View style={styles.nameView}>
                        <Text style={styles.text1}>
                          dummy title
                        </Text>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Image source={Images.dummyImage} style={{
                                height: Scaling.HEIGHT_SCALE_30,
                                width: Scaling.HEIGHT_SCALE_30,
                               borderRadius:Scaling.HEIGHT_SCALE_20,    
                        }}/>
                        <Text style={{marginLeft:5}}>Dwayne Johnson</Text>
                        {/* <Rating
                            type='custom'
                            imageSize={14}
                            readonly
                            startingValue={3}
                            ratingBackgroundColor="white"
                            // ratingColor="#F37727"
                            style={{ paddingVertical: 4 }} />
                            <Text style={{fontSize:fontScale(10), color:Colors.GRAY}}> (4.0)</Text> */}
                        </View>
                      
                    </View>
                    <Text style={styles.descriptionText}>
                       {Strings.BUDGET_RANGE} $1300
                          </Text>
                    <Text style={styles.descriptionText}>
                        body tetx ffgjgty ghkghk ghkgh chgkf vgjk ghkfghg cbhjfghkf gfjkfgh fgvgjj
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Image source={Images.ic_pant} style={{
                                    height: Scaling.HEIGHT_SCALE_40,
                                    width: Scaling.WIDTH_SCALE_40,
                                    resizeMode:'contain'
                                   // paddingBottom:Scaling.PADDING_SCALE_10,

                                }} />

                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={Images.ic_gar} style={{
                                    height: Scaling.HEIGHT_SCALE_40,
                                    width: Scaling.WIDTH_SCALE_40,
                                    marginHorizontal: Scaling.WIDTH_SCALE_5,
                                    resizeMode:'contain'
                                    //paddingBottom:Scaling.PADDING_SCALE_10,
                                }} />

                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image source={Images.ic_men} style={{
                                    height: Scaling.HEIGHT_SCALE_40,
                                    width: Scaling.WIDTH_SCALE_40,
                                    resizeMode:'contain'
                                  //  paddingBottom:Scaling.PADDING_SCALE_10,

                                }} />

                            </TouchableOpacity>

                        </View>
                        {/* <TouchableOpacity>
                            <View style={{
                                borderRadius: 15,
                                width: 160, height: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                //alignSelf:'flex-end',
                                marginBottom: 10,
                                marginTop: 10,
                                borderWidth: 1,
                                borderColor: Colors.BLUE
                            }}>
                                <Text style={{
                                    fontSize: fontScale(12),
                                    fontFamily: FontName.RALEWAY_BOLD,
                                    color: Colors.BLUE
                                }}>Send Job Request</Text>
                            </View>
                        </TouchableOpacity> */}
                    </View>


                </View>
            </View>
        </>
    );
};

export default JobComponent;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: Scaling.PADDING_SCALE_10,
        paddingRight: Scaling.PADDING_SCALE_10,
        paddingTop: Scaling.PADDING_SCALE_5,
        paddingBottom: Scaling.PADDING_SCALE_5,

        backgroundColor: 'white',
    },
    image: {
        height: Scaling.HEIGHT_SCALE_60, width: Scaling.WIDTH_SCALE_60,
        borderRadius: Scaling.HEIGHT_SCALE_30
    },
    subContainer: { flex: 1, paddingLeft: Scaling.PADDING_SCALE_8 },
    nameView: { flexDirection: 'row', alignItems: 'center',},
    text1: { color: 'black', fontSize: fontScale(14), flex: 1, fontWeight: 'bold' },
    descriptionText: { color: 'black', 
    fontSize: fontScale(12), flex: 1, marginVertical: Scaling.HEIGHT_SCALE_6, },

});