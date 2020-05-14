import { BACKEND } from "../../../config";
import { ACCOUNT } from "../../types/types";

export const fetchFromAccount = ({
  endpoint,
  options,
  FETCH_TYPE,
  ERROR_TYPE,
  SUCCESS_TYPE,
}: any) => (dispatch: (arg0: { type: any; message?: any }) => void) => {
  // console.log("fectch address: ", `${BACKEND.ADDRESS}/account/${endpoint}`)
  console.log("In accountCreators fetch endpoint: /", endpoint);
  dispatch({ type: FETCH_TYPE });
  return fetch(`${BACKEND.ADDRESS}/account/${endpoint}`, options)
    .then((response) => response.json())
    .then((json) => {
      if (json.type === "error") {
        dispatch({ type: ERROR_TYPE, message: json.message });
      } else {
        dispatch({ type: SUCCESS_TYPE, ...json });
        console.log(
          "accountCreators (Redux): Fetch response body (json):",
          json
        );
      }
    })
    .catch((error) =>
      dispatch({
        type: ERROR_TYPE,
        message: error.message,
      })
    );
};

export const signupWithInvite = ({
  email,
  password,
  atAgency,
  isAdmin,
}: {
  email: string;
  password: string;
  atAgency: number;
  isAdmin: boolean;
}) =>
  fetchFromAccount({
    endpoint: "signupwithinvite",
    options: {
      method: "POST",
      body: JSON.stringify({ email, password, atAgency, isAdmin }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    },
    FETCH_TYPE: ACCOUNT.FETCH,
    ERROR_TYPE: ACCOUNT.FETCH_ERROR,
    SUCCESS_TYPE: ACCOUNT.FETCH_SIGNUP_SUCCESS,
  });

export const signup = ({ email, password, atAgency, isAdmin }: any) =>
  fetchFromAccount({
    endpoint: "signup",
    options: {
      method: "POST",
      body: JSON.stringify({ email, password, atAgency, isAdmin }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    },
    FETCH_TYPE: ACCOUNT.FETCH,
    ERROR_TYPE: ACCOUNT.FETCH_ERROR,
    SUCCESS_TYPE: ACCOUNT.FETCH_SIGNUP_SUCCESS,
  });

export const login = ({ email, password }: any) =>
  fetchFromAccount({
    endpoint: "login",
    options: {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    },
    FETCH_TYPE: ACCOUNT.FETCH,
    ERROR_TYPE: ACCOUNT.FETCH_ERROR,
    SUCCESS_TYPE: ACCOUNT.FETCH_LOGIN_SUCCESS,
  });

export const logout = () =>
  fetchFromAccount({
    endpoint: "logout",
    options: {
      credentials: "include",
    },
    FETCH_TYPE: ACCOUNT.FETCH,
    ERROR_TYPE: ACCOUNT.FETCH_ERROR,
    SUCCESS_TYPE: ACCOUNT.FETCH_LOGOUT_SUCCESS,
  });

export const passwordReset = ({ email }: any) =>
  fetchFromAccount({
    endpoint: "passwordReset",
    options: {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    },
    FETCH_TYPE: ACCOUNT.FETCH,
    ERROR_TYPE: ACCOUNT.FETCH_ERROR,
    SUCCESS_TYPE: ACCOUNT.FETCH_NEWPASSWORD_SUCCESS,
  });

export const passwordResetConfirm = ({ emailHash, password }: any) =>
  fetchFromAccount({
    endpoint: "passwordResetConfirm",
    options: {
      method: "POST",
      body: JSON.stringify({ emailHash, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    },
    FETCH_TYPE: ACCOUNT.FETCH,
    ERROR_TYPE: ACCOUNT.FETCH_ERROR,
    SUCCESS_TYPE: ACCOUNT.FETCH_NEWPASSCONFIRMED_SUCCESS,
  });

export const fetchAuthenticated = () =>
  fetchFromAccount({
    endpoint: "authenticated",
    options: {
      credentials: "include",
    },
    FETCH_TYPE: ACCOUNT.FETCH,
    ERROR_TYPE: ACCOUNT.FETCH_ERROR,
    SUCCESS_TYPE: ACCOUNT.FETCH_AUTHENTICATED_SUCCESS,
  });

export const login_ = ({ email }: any) => (
  dispatch: (arg0: { type: string; email: any }) => void
) => {
  dispatch({ type: ACCOUNT.LOGIN_REQUEST, email });
};

export const logout_ = () => (dispatch: (arg0: { type: string }) => void) => {
  dispatch({ type: ACCOUNT.LOGOUT_REQUEST });
};
