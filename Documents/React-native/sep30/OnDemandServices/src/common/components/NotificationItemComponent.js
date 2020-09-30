import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { fontScale } from '../../constants/FontSize';
import Images from '../../assets/AppImages';
import { Colors, FontName, Scaling } from '../../constants';
import { Rating, AirbnbRating } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NotificationItemComponent = props => {

    return (
        <>
            <View style={styles.container}>
                <View style={{justifyContent:'center'}}>
                <Image
                      source={Images.dummyImage}
                    style={styles.image}
                />
                </View>
             
                <View style={styles.sub_container}>
                    <View style={styles.name_view}>
                        <Text style={styles.text1}>
                            AB dev
                        </Text>
                    </View>

                    <Text style={styles.notification_text}>
                        Nice app
                    </Text>

                    <Text style={styles.date_text}>
                      23 feb 2010
                    </Text>

                </View>
            </View>
        </>
    );
};

export default NotificationItemComponent;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: 'white',
    },
    image: { height: 50, width: 50 , borderRadius:25},
    sub_container: { flex: 1, paddingLeft: 8 },
    name_view: { flexDirection: 'row', alignItems: 'center', },
    text1: { color: 'black', fontSize: fontScale(14), flex: 1, fontWeight: 'bold' },
    notification_text: { color: 'black', fontSize: fontScale(12), flex: 1, marginTop: 5 },
    date_text: { color: 'black', fontSize: fontScale(12), flex: 1, textAlign: 'right' }
});