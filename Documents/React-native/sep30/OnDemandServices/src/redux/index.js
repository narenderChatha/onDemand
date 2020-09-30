import { combineReducers } from "redux";
import signUpDetailsReducer from "../screens/AuthenticationScreens/signUpDetails/SignUpDetailsReducer";
import { reducer as network } from 'react-native-offline';
export default combineReducers({
    //Signup details Reducer
    signUpDetailsReducer,
    //network
    network,
})