import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { fontScale } from '../../constants/FontSize';
import Images from '../../assets/AppImages';
import { Colors, FontName, Scaling } from '../../constants';
import { Rating, AirbnbRating } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SingleListComponent = props => {

    return (
        <>
            <View style={styles.container}>
                <View >
                    <Image
                        // source={{uri:props.uriImage}}
                        source={Images.dummyImage}
                        style={styles.image}
                    />
                </View>

                <View style={styles.subContainer}>
                    <View style={styles.nameView}>
                        <Text style={styles.text1}>
                            title
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Rating
                                type='custom'
                                imageSize={14}
                                readonly
                                startingValue={3}
                                ratingBackgroundColor="white"
                                // ratingColor="#F37727"
                                style={{ paddingVertical: 4 }} />
                            <Text style={{ fontSize: fontScale(10), color: Colors.GRAY }}> (4.0)</Text>
                        </View>

                    </View>

                    <Text style={styles.descriptionText}>
                        body tetx ffgjgty ghkghk ghkgh chgkf vgjk ghkfghg cbhjfghkf gfjkfgh fgvgjj
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Image source={Images.ic_pant} style={{   height: Scaling.HEIGHT_SCALE_40,
                                    width: Scaling.HEIGHT_SCALE_40 }} />

                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={Images.ic_gar}
                                    style={{  height: Scaling.HEIGHT_SCALE_40,
                                        width: Scaling.HEIGHT_SCALE_40, marginHorizontal: Scaling.WIDTH_SCALE_4 }} />

                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image source={Images.ic_men} style={{
                                    height: Scaling.HEIGHT_SCALE_40,
                                    width: Scaling.HEIGHT_SCALE_40
                                }} />

                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity>
                            <View style={{
                                borderRadius: Scaling.HEIGHT_SCALE_15,
                                width: Scaling.WIDTH_SCALE_120,
                                height: Scaling.HEIGHT_SCALE_30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                //alignSelf:'flex-end',
                                marginBottom: Scaling.HEIGHT_SCALE_10,
                                marginTop: Scaling.HEIGHT_SCALE_10,
                                borderWidth: 1,
                                //marginRight:10,
                                borderColor: Colors.BLUE
                            }}>
                                <Text style={{
                                    fontSize: fontScale(12),
                                    fontFamily: FontName.RALEWAY_BOLD,
                                    color: Colors.BLUE
                                }}>Send Job Request</Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        </>
    );
};

export default SingleListComponent;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: Scaling.PADDING_SCALE_10,
        backgroundColor: 'white',
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    subContainer: {
        flex: 1,
        paddingLeft: 8
    },
    nameView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text1: {
        color: 'black',
        fontSize: fontScale(14),
        flex: 1,
        fontWeight: 'bold'
    },
    descriptionText: {
        color: 'black',
        fontSize: fontScale(10),
        flex: 1,
        marginVertical: Scaling.HEIGHT_SCALE_6,
    },

});