import * as actionTypes from "./actionTypes";
import axios from "../../instances/axios-authentication";

const API_KEY = "AIzaSyDPMj5U8NoMmug0gR-Z2gO_KZWWOSdMnNQ";

const saveSession = (userName, token, localId) => {
  return {
    type: actionTypes.LOGIN,
    payload: {
      userName: userName,
      idToken: token,
      localId: localId,
    },
  };
};

const saveSignUp = (userName, token, localId) => {
  return {
    type: actionTypes.SIGN_UP,
    payload: {
      userName: userName,
      idToken: token,
      localId: localId,
    },
  };
};

export const logIn = (authData, onSuccessCallback) => {
  return (dispatch) => {
    axios
      .post("/accounts:signInWithPassword?key=" + API_KEY, authData)
      .then((response) => {
        const userEmail = authData.email;
        const token = response.data.idToken;
        const localId = response.data.localId;
        let userSession = {
          token,
          userEmail,
          localId,
        };

        userSession = JSON.stringify(userSession);

        console.log(response);

        localStorage.setItem("userSession", userSession);

        dispatch(saveSession(userEmail, token, localId));

        if (onSuccessCallback) {
          onSuccessCallback();
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(showError(true, error.message));
      });
  };
};

export const showError = (isError, message)=>{
  return{
    type: actionTypes.ERROR,
    err: isError,
    mes: message,
  }
}

export const signUp = (authData, onSuccessCallback) => {
  return (dispatch) => {
    axios
      .post("/accounts:signUp?key=" + API_KEY, authData)
      .then((response) => {
        const userEmail = authData.email;
        const token = response.data.idToken;
        const localId = response.data.localId;
        let userSession = {
          token,
          userEmail,
          localId,
        };

        userSession = JSON.stringify(userSession);

        console.log(response);

        localStorage.setItem("userSession", userSession);

        dispatch(saveSignUp(userEmail, token, localId));

        if (onSuccessCallback) {
          onSuccessCallback();
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(showError(true, error.error.message));
      });
  };
};

export const persistAuthentication = () => {
  return (dispatch) => {
    let userSession = localStorage.getItem("userSession");

    if (!userSession) {
      dispatch(logOut());
    } else {
      userSession = JSON.parse(userSession);

      dispatch(
        saveSession(
          userSession.userEmail,
          userSession.token,
          userSession.localId
        )
      );
    }
  };
};

export const logOut = () => {
  return {
    type: actionTypes.LOG_OUT,
  };
};
