import axios from "axios";
import Urls from "../../../constants/Urls";
import Globals from "../../../constants/Globals";
import { Platform } from "react-native";

export const Types = {
  SIGN_UP_DETAILS_START: "SIGN_UP_DETAILS_START",
  SIGN_UP_DETAILS_COMPLETE: "SIGN_UP_DETAILS_COMPLETE",
  SIGN_UP_DETAILS_ERROR: "SIGN_UP_DETAILS_ERROR",

  SIGN_UP_DETAILS_RESET:"SIGN_UP_DETAILS_RESET",
};

export function signUpDetailsAction(
  needAPro, firstName, lastName, email, password, phoneNumber, address, zipCode, description,
  countryCode, latitude,
  longitude,
   ) {

 //alert(Globals.APP_VERSION)
  return dispatch => {
    dispatch(request());
    let formData = new FormData();
    formData.append('account_type', JSON.stringify(needAPro));
    formData.append('first_name', firstName);

    formData.append('last_name', lastName);

    formData.append('email', email);

    formData.append('password', password);

    formData.append('phone', phoneNumber);
    formData.append('country_code', countryCode);

    formData.append('user_address', address);
    formData.append('description', description);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    formData.append('zip_code', zipCode);
    // formData.append('deviceType', Globals.DEVICE_TYPE);
    formData.append('deviceType', Platform.OS === 'android' ? 'Android' : 'ios');
    formData.append('deviceToken', 'lkjwflwejlfkewlkgewkrgjewklrhjeklt');
    formData.append('device_model', Globals.DEVICE_MODEL);
    formData.append('app_version', Globals.APP_VERSION);

    const body = {
      account_type: JSON.stringify(needAPro),
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      phone: phoneNumber,
      country_code:countryCode,
      user_address:address,
      description: description,
      latitude:JSON.stringify(latitude),             
      longitude: JSON.stringify(longitude),
      zip_code:zipCode,             
      deviceType:Platform.OS === 'android' ? 'Android' : 'ios',  
      deviceToken:'lwflwejlfkewlkgewkrgjewklrhjeklt',   
      device_model:  Globals.DEVICE_MODEL,   
      app_version: Globals.APP_VERSION,   
      
      
      
    };
    console.log(" data body========>" + JSON.stringify(body))

    console.log("form data========>" + JSON.stringify(formData))
console.log("form data URL========>"+JSON.stringify(Urls.REGISTER_URL))
    
    axios
    .post(Urls.REGISTER_URL, body)
    .then(function (response) {
      console.log("register response"+JSON.stringify(response));
    //  dispatch(success(response));
    })
    .catch(function (error) {
      console.log("register response"+JSON.stringify(error));
    //  dispatch(failure(error));
    });
  };

  function request() {
    return { type: Types.SIGN_UP_DETAILS_START, payload: null };
  }
  function success(response) {
    return { type: Types.SIGN_UP_DETAILS_COMPLETE, payload: response };
  }
  function failure(error) {
    return { type: Types.SIGN_UP_DETAILS_ERROR, payload: error };
  }
}

export function signUpDetailsResetState() {
  return dispatch => {
    dispatch(reset());
  };

  function reset() {
    return { type: Types.SIGN_UP_DETAILS_RESET, payload: null };
  }
}