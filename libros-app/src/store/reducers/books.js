import * as actionTypes from "../actions/actionTypes";
import updateObject from "../utility";

const initialState = {
  notifications: [],
  loans: [],
  changes: [],
  myLoans: [],
  books: [],
  shoppingCar: [],
  loadingNotifications: false,
};


const submitLoan = (state, action) => {
  const updatedLoans = [...state.loans];

  updatedLoans.push(action.payload.loan);

  return updateObject(state, { loans: updatedLoans });
};

const buyBooks = (state, action) => {
  const updatedChanges = [...state.changes];

  updatedChanges.push(action.payload.books);

  return updateObject(state, { changes: updatedChanges });
};

const deleteBooks = (state, action) => {
  return updateObject(state, { changes: [] });
};


const fetchNotifications = (state, action) => {
  return updateObject(state, { notifications: action.payload.notifications });
};

const fetchLoans = (state, action) => {
  return updateObject(state, { loans: action.payload.loans });
};

const fetchChanges = (state, action) => {
  return updateObject(state, { changes: action.payload.changes });
};

const fetchMyLoans = (state, action) => {
  return updateObject(state, { myLoans: action.payload.myLoans });
};

const fetchBooks = (state, action) => {
  return updateObject(state, { books: action.payload.books });
};

const fetchShoppingCar = (state, action) => {
  return updateObject(state, { shoppingCar: action.payload.shoppingCar });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NOTIFICATIONS:
      return fetchNotifications(state, action);
    case actionTypes.FETCH_LOANS:
      return fetchLoans(state, action);
    case actionTypes.FETCH_CHANGES:
      return fetchChanges(state, action);
    case actionTypes.FETCH_MYLOANS:
      return fetchMyLoans(state, action);
    case actionTypes.FETCH_BOOKS:
      return fetchBooks(state, action);
    case actionTypes.FETCH_SHOPPINGCAR:
      return fetchShoppingCar(state, action);
    case actionTypes.SUBMIT_LOAN:
      return submitLoan(state, action);
    case actionTypes.BUY_BOOKS:
      return buyBooks(state, action);
    case actionTypes.DELETE_BOOKS:
      return deleteBooks(state, action);
    default:
      return state;
  }
};

export default reducer;
