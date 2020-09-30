import { connect } from "react-redux";
import SignupScreen from "./SignupScreen";
import { signUpAction, signUpResetState } from "./SignUpScreenAction"

const mapStateToProps = state => ({
  dataSignUpReducer: state.signUpReducer
});

const mapDispatchToProps = dispatch => ({
  signUpAction: (
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
      ) => dispatch(signUpAction(
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
         )),
         signUpResetState:()=>dispatch(signUpResetState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupScreen);




