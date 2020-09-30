import axios from "axios";
import Urls from "../../../constants/Urls";
import Globals from "../../../constants/Globals"
import RNFetchBlob from 'rn-fetch-blob';
export const Types = {
  SIGN_UP_START: "SIGN_UP_START",
  SIGN_UP_COMPLETE: "SIGN_UP_COMPLETE",
  SIGN_UP_ERROR: "SIGN_UP_ERROR",

  SIGN_UP_RESET:"SIGN_UP_RESET",
};

export function signUpAction(
  name,
  email,
  phoneNumber,
  address,
  profilePic,
  countryCode,
  appVersion,
  deviceToken,
  deviceType,
  uid
   ) {
  let accessToken1 = countryCode;
  console.log("country code======>"+countryCode)
 //alert(Globals.APP_VERSION)
  return dispatch => {
    dispatch(request(name));
  //   let fileName = profilePic.substring(
  //     profilePic.lastIndexOf("/") + 1
  //   );
  //  //alert(profilePic)
  //   RNFetchBlob.fetch(
  //     'POST',
  //     Urls.USER_SIGNUP,
  //     {
  //      // Authorization: 'Bearer' + '  ' + JSON.parse(accessToken1),
  //       'Content-Type': 'multipart/form-data',
  //     },
  //     [
  //       {
  //         name: 'name',
  //         data: name,
  //       },
  //       {
  //         name: 'email',
  //         data: email,
  //       },
  //       {
  //         name: 'country_code',
  //         data: countryCode,
  //       },
  //       {
  //         name: 'phone_no',
  //         data: phoneNumber,
  //       },
  //       {
  //         name: 'address',
  //         data: address,
  //       },
  //       {
  //         name: 'app_version',
  //         data: Globals.APP_VERSION,
  //       },
  //       {
  //         name: 'profilePic',
  //         filename: fileName,
  //         data: RNFetchBlob.wrap(profilePic),
  //         type: 'image/jpg',
  //       },
  //       {
  //         name: 'device_token',
  //         data: deviceToken,
  //       },
  //       {
  //         name: 'device_type',
  //         data: deviceType,
  //       },
  //       {
  //         name: 'uid',
  //         data: uid
  //       },  
  //     ],
  //   )
  //     .then(function (response) {
  //     // console.log("===response signup==="+JSON.stringify(response.json()));
  //         dispatch(success(response.json()));
  //     })
  //     .catch(function (error) {
  //      // console.log("error "+JSON.stringify(error));
  //      dispatch(failure(error));
  //     });

    // .then(response => {
    //   if (response.json().status) {
    //     console.log(
    //       'Response Sign up-----------------------' +
    //         JSON.stringify(response.json()),
    //     );
    //     props.navigation.navigate('verification', {
    //       data: response.json().data,
    //       FromSignUpScreen: true,
    //     });
    //   } else {
    //     console.log(
    //       'error response--------------else statement-----' +
    //         JSON.stringify(response.json()),
    //       // alert(response.data.message.email),
    //     );
    //   }
    // })
    // .catch(error => {
    //   console.log('Error----------------------' + error);
    // });


    //     axios
    //       .post(Urls.COMMON_SIGN_UP, {
    //         email: user.email,
    //         password: user.password
    //       })
    //       .then(function(response) {
    //      // alert(JSON.stringify(response));
    //       dispatch(success(response));
    //       })
    //       .catch(function(error) {
    //    // alert(JSON.stringify(error));
    //      dispatch(failure(error));
    //       });
  };

  function request(name) {
    return { type: Types.SIGN_UP_START, payload: name };
  }
  function success(response) {
    return { type: Types.SIGN_UP_COMPLETE, payload: response };
  }
  function failure(error) {
    return { type: Types.SIGN_UP_ERROR, payload: error };
  }
}

export function signUpResetState() {
  return dispatch => {
    dispatch(reset());
  };

  function reset() {
    return { type: Types.SIGN_UP_RESET, payload: null };
  }
}