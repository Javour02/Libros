import * as actionTypes from "../actions/actionTypes";
import updateObject from "../utility";

const initialState = {
  isUserLoggedIn: false,
  userLoggedIn: {
    userName: "",
    idToken: "",
    localId: "",
  },
  loadingAuth: false,
  errorMessageAuth: false,
  errorMessage: "",
};

const login = (state, action) => {
  return updateObject(state, {
    isUserLoggedIn: true,
    userLoggedIn: {
      userName: action.payload.userName,
      idToken: action.payload.idToken,
      localId: action.payload.localId,
    },
  });
};

const signUp = (state, action) => {
  return updateObject(state, {
    isUserLoggedIn: true,
    userLoggedIn: {
      userName: action.payload.userName,
      idToken: action.payload.idToken,
      localId: action.payload.localId,
    },
  });
};

const logOut = (state, action) => {
  console.log("he hecho log out creo");
  return updateObject(state, {
    isUserLoggedIn: false,
    userLoggedIn: {
      userName: "",
      idToken: "",
      localId: "",
    },
  });
};

const error = (state, action) => {
  return updateObject(state, {
    isUserLoggedIn: false,
    userLoggedIn: {
      userName: "",
      idToken: "",
      localId: "",
    },
    errorMessageAuth: action.err,
    errorMessage: action.mes,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return login(state, action);
    case actionTypes.SIGN_UP:
      return signUp(state, action);
    case actionTypes.LOG_OUT:
      return logOut(state, action);
    case actionTypes.ERROR:
      return error(state, action);
    default:
      return state;
  }
};

export default reducer;
