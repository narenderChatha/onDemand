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
  FlatList,
  PermissionsAndroid,
  Platform,
  ScrollView,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors } from '../../../constants';
import NotificationItemComponent from '../../../common/components/NotificationItemComponent';



const NotificationsScreen = props => {


 
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
                <FlatList
                    //  keyExtractor={item => item.order_number}
                    
                    ItemSeparatorComponent={() => (
                        <View style={{ height: 1, backgroundColor: Colors.LIGHT_BLACK }} />
                    )}
                    data={[1,2,3,4,5,6]}
                    renderItem={({ item }) => (
             
                      <NotificationItemComponent
                      titleText={item.title}
                      bodyText={item.body}
                      dateTime={item.date}
                      uriImage={item.profile_image}
                  />
                      
                    )}
                />
        </ScrollView>
     </>
    )

}
export default NotificationsScreen;