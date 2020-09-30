import { Types } from "./SignUpScreenAction";
const INIT_DATA_SIGNUP = {
  response: null,
  loading: false,
  error: null
};
export default function signUpReducer(state = INIT_DATA_SIGNUP, action) {
  switch (action.type) {
    case Types.SIGN_UP_START:
      return { response: null, loading: true, error: null };
    case Types.SIGN_UP_COMPLETE:
      return { response: action.payload, loading: false, error: null };
    case Types.SIGN_UP_ERROR:
      return { response: action.payload, loading: false, error: null };
      case Types.SIGN_UP_RESET:
        return { ...state, response: null, loading: false, error: null };
      default:
        return { ...state, response: null, loading: false, error: null };
  }
}
