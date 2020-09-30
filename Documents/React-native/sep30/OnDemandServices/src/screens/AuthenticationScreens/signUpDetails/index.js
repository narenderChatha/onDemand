import { connect } from "react-redux";
import SignUpDetails from "./SignUpDetails";
import { signUpDetailsAction, signUpDetailsResetState } from "./SignUpDetailsAction"

const mapStateToProps = state => ({
  dataSignUpDetailsReducer: state.signUpDetailsReducer
});

const mapDispatchToProps = dispatch => ({
    signUpDetailsAction: (
        firstName,
        lastName,
        address,
        zipCode,
        appVersion,
        deviceToken,
        deviceType,
      ) => dispatch(signUpDetailsAction(
        firstName,
        lastName,
        address,
        zipCode,
        appVersion,
        deviceToken,
        deviceType,
         )),
         signUpDetailsResetState:()=>dispatch(signUpDetailsResetState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpDetails);




