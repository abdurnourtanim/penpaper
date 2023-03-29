import { login, logout, signup } from "../components/services/auth.service";
import * as actionType from "./types";

// signup action
const signupAction = (payload) => (dispatch) => {
  return signup(payload)
    .then((response) => {
      dispatch({
        type: actionType.RESGISTER_SUCCESS,
        payload: response.data,
      });

      return Promise.resolve(response.data);
    })
    .catch((error) => {
      dispatch({
        type: actionType.RESGISTER_FAIL,
        payload: { err: error.message || "Sign up failed!" },
      });

      return Promise.reject(error);
    });
};

//  login action
const loginAction = (userInfo) => (dispatch) => {
  return login(userInfo)
    .then((data) => {
      dispatch({
        type: actionType.LOGIN_SUCCESS,
        payload: data,
      });

      return Promise.resolve(data);
    })
    .catch((error) => {
      dispatch({
        type: actionType.LOGIN_FAIL,
        payload: { err: error.message || "Login failed!" },
      });

      return Promise.reject(error);
    });
};

// logout action
const logoutAction = () => (dispatch) => {
  const msg = logout();

  dispatch({
    type: actionType.LOGOUT,
    payload: { msg },
  });

  return Promise.resolve(msg);
};

export { signupAction, loginAction, logoutAction };
