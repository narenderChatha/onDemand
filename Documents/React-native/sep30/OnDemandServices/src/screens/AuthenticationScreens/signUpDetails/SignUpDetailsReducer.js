import { Types } from "./SignUpDetailsAction";
const INIT_DATA_SIGNUP_DETAILS = {
  response: null,
  loading: false,
  error: null
};
export default function signUpDetailsReducer(state = INIT_DATA_SIGNUP_DETAILS, action) {
  switch (action.type) {
    case Types.SIGN_UP_DETAILS_START:
      return { response: null, loading: true, error: null };
    case Types.SIGN_UP_DETAILS_COMPLETE:
      return { response: action.payload, loading: false, error: null };
    case Types.SIGN_UP_DETAILS_ERROR:
      return { response: action.payload, loading: false, error: null };
      case Types.SIGN_UP_DETAILS_RESET:
        return { ...state, response: null, loading: false, error: null };
      default:
        return { ...state, response: null, loading: false, error: null };
  }
}
