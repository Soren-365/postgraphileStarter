import { ACCOUNT } from "../types/types";

export const fetchStates = {
  fetching: "fetching",
  error: "error",
  success: "success",
  saga: "Saga processing",
};

const DEFAULT_ACCOUNT = {
  status: undefined,
  message: undefined,
  loggedIn: undefined,
  userId: undefined,
  agencyId: undefined,
  isAdmin: false,
  newpassConfirmed: undefined,
  newpassRequested: undefined,
};

export type accountType = {
  status: string | undefined;
  message: string | undefined;
  loggedIn: boolean | undefined;
  userId: number | undefined;
  agencyId: number | undefined;
  isAdmin: boolean | undefined;
  newpassConfirmed: boolean | undefined;
  newpassRequested: boolean | undefined;
};

const account = (
  state: accountType = DEFAULT_ACCOUNT,
  action: {
    type: any;
    message: any;
    id: any;
    user: { atAgency: any; isAdmin: any };
    messagee: any;
    authenticated: any;
  }
): accountType => {
  switch (action.type) {
    case ACCOUNT.FETCH:
      return { ...state, status: fetchStates.fetching };
    case ACCOUNT.FETCH_ERROR:
      document.cookie =
        " Troian=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
      return {
        ...state,
        status: fetchStates.error,
        message: action.message,
        loggedIn: false,
      };
    case ACCOUNT.FETCH_SIGNUP_SUCCESS:
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        loggedIn: true,
        userId: action.id,
        agencyId: action.user.atAgency,
        isAdmin: action.user.isAdmin,
      };
    case ACCOUNT.FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        loggedIn: true,
        userId: action.id,
        agencyId: action.user.atAgency,
        isAdmin: action.user.isAdmin,
      };
    case ACCOUNT.FETCH_NEWPASSWORD_SUCCESS:
      return {
        ...state,
        status: fetchStates.success,
        message: action.messagee,
        newpassRequested: true,
      };
    case ACCOUNT.FETCH_NEWPASSCONFIRMED_SUCCESS:
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        newpassConfirmed: true,
      };
    case ACCOUNT.FETCH_LOGOUT_SUCCESS:
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        loggedIn: false,
        userId: undefined,
      };
    case ACCOUNT.FETCH_AUTHENTICATED_SUCCESS:
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        loggedIn: action.authenticated,
        userId: action.id,
        agencyId: action.user.atAgency,
        isAdmin: action.user.isAdmin,
      };
    case ACCOUNT.LOGIN_REQUEST:
      return { ...state, status: fetchStates.saga, message: action.message };
    case ACCOUNT.LOGIN_ERROR:
      document.cookie =
        " Troian=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
      return { ...state, status: fetchStates.error, message: action.message };
    case ACCOUNT.LOGOUT_REQUEST:
      return { ...state, status: fetchStates.saga, message: action.message };
    case ACCOUNT.LOGOUT_ERROR:
      return { ...state, status: fetchStates.error, message: action.message };
    case ACCOUNT.LOGOUT_SUCCESS:
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        loggedIn: false,
        userId: undefined,
      };
    default:
      return state;
  }
};

export default account;
