import axios from 'axios';
import Urls from '../../../constants/Urls';
import Globals from '../../../constants/Globals';
import DeviceInfo from 'react-native-device-info';
import {Platform} from 'react-native';
let type = DeviceInfo.getDeviceType();

export const Types = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_COMPLETE: 'LOGIN_COMPLETE',
  LOGIN_ERROR: 'LOGIN_ERROR',

};

export function login(phone_no, countryCode) {
  //alert('hello')
  //alert(phone_no)
  //alert("-device type"+Platform.OS === 'android' ? 'ANDROID' : 'iOS')
  // console.log("device token"+Globals.DEVICE_TOKEN)

  //alert("device version"+Globals.APP_VERSION)
  return (dispatch) => {
    dispatch(request());
    // const body = {
    //   phone_no: phone_no,
    //   country_code: countryCode,
    //   app_version: Globals.APP_VERSION,
    // };
    // axios
    //   .post(Urls.LOGIN_URL, body)
    //   .then(function (response) {
    //     // alert(JSON.stringify(response));
    //     dispatch(success(response));
    //   })
    //   .catch(function (error) {
    //     //  alert(JSON.stringify(error));
    //     dispatch(failure(error));
    //   });
  };

  function request() {
    return {type: Types.LOGIN_START, payload: null};
  }
  function success(response) {
    return {type: Types.LOGIN_COMPLETE, payload: response};
  }
  function failure(error) {
    return {type: Types.LOGIN_ERROR, payload: error};
  }
}
