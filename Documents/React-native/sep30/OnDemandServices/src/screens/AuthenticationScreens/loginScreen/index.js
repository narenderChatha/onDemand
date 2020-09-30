import { connect } from "react-redux";
import LoginScreen from "./LoginScreen";
import {login} from "./LoginScreenAction"

const mapStateToProps = state => ({
  dataLogin:state.loginApp,
});

const mapDispatchToProps = dispatch => ({
  loginUser: (phone_no,countryCode) => dispatch(login(phone_no,countryCode)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);




