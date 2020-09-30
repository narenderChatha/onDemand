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
import JobComponent from '../../../common/components/JobComponent';
import FAB from 'react-native-fab'



const RequestJobs = props => {


 
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
                        <View style={{ height: 1, backgroundColor: 'gray' }} />
                    )}
                    data={[1,2,3,4,5,6]}
                    renderItem={({ item }) => (
             
                            <JobComponent
                                titleText={item.title}
                                bodyText={item.body}
                                dateTime={item.date}
                                uriImage={item.profile_image}
                            />
                      
                    )}
          />
    
        </ScrollView>
        
        <FAB buttonColor={Colors.GREEN}
                    iconTextColor="#FFFFFF"
                   // onClickAction={makeOrder}
                    visible={true}
              //iconTextComponent={<Icon name="all-out"/>} 
                />
     </>
    )

}
export default RequestJobs;