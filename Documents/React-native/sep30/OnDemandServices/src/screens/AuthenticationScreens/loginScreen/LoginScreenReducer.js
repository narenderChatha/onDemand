import { Types } from "./LoginScreenAction";
const INIT_DATA = {
  response: null,
  loading: false,
  error: null
};
export  function loginApp(state = INIT_DATA, action) {
  switch (action.type) {
    case Types.LOGIN_START:
      return { response: null, loading: true, error: null };
    case Types.LOGIN_COMPLETE:
      return { response: action.payload, loading: false, error: null };
    case Types.LOGIN_ERROR:
      return { response: action.payload, loading: false, error: null };
    default:
      return INIT_DATA;
  }
}
const INIT_DATA_GMAIL_AUTH = {
  response: null,
  loading: false,
  error: null
};
export  function loginGmailAuth(state = INIT_DATA_GMAIL_AUTH, action) {
  switch (action.type) {
    case Types.LOGIN_GMAIL_AUTH_START:
      return { response: null, loading: true, error: null };
    case Types.LOGIN_GMAIL_AUTH_COMPLETE:
      return { response: action.payload, loading: false, error: null };
    case Types.LOGIN_GMAIL_AUTH_ERROR:
      return { response: action.payload, loading: false, error: null };
    default:
      return INIT_DATA_GMAIL_AUTH;
  }
}