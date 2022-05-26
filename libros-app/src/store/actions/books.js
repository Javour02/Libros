import * as actionTypes from "./actionTypes";
import axios from "../../instances/axios-books";


const loadNotifications = (notifications) => {
  return {
    type: actionTypes.FETCH_NOTIFICATIONS,
    payload: {
      notifications: notifications,
    },
  };
};

export const fetchNotifications = () => {
  return (dispatch) => {
    axios
      .get("/notifications.json")
      .then((response) => {
        console.log(response);

        const notifications = Object.values(response.data).map((notification) => {
          return { ...notification };
        });

        dispatch(loadNotifications(notifications));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const loadLoans = (loans) => {
  return {
    type: actionTypes.FETCH_LOANS,
    payload: {
      loans: loans,
    },
  };
};

export const fetchLoans = () => {
  return (dispatch) => {
    axios
      .get("/loans.json")
      .then((response) => {
        console.log(response);

        const loans = Object.values(response.data).map((loan) => {
          return { ...loan };
        });

        dispatch(loadLoans(loans));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const loadChanges = (changes) => {
  return {
    type: actionTypes.FETCH_CHANGES,
    payload: {
      changes: changes,
    },
  };
};

export const fetchChanges = () => {
  return (dispatch) => {
    axios
      .get("/changes.json")
      .then((response) => {
        console.log(response);

        const changes= Object.values(response.data).map((change) => {
          return { ...change };
        });

        dispatch(loadChanges(changes));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const loadMyLoans = (myLoans) => {
  return {
    type: actionTypes.FETCH_MYLOANS,
    payload: {
      myLoans: myLoans,
    },
  };
};

export const fetchMyLoans = () => {
  return (dispatch) => {
    axios
      .get("/myLoans.json")
      .then((response) => {
        console.log(response);

        const myLoans = Object.values(response.data).map((myLoan) => {
          return { ...myLoan };
        });
        console.log("------------------");
        console.log(myLoans);
        dispatch(loadMyLoans(myLoans));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const loadBooks = (books) => {
  return {
    type: actionTypes.FETCH_BOOKS,
    payload: {
      books: books,
    },
  };
};

export const fetchBooks = () => {
  console.log("llegue");
  return (dispatch) => {
    axios
      .get("/books.json")
      .then((response) => {
        console.log(response);

        const books = Object.values(response.data).map((book) => {
          
          return { ...book };
        });
        console.log(books);
        dispatch(loadBooks(books));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const storeReturns = (returns) => {
  return {
    type: actionTypes.RETURN_BOOKS,
    payload: {
      returns: returns,
    },
  };
};

export const returnBooks = (returns) => {
  return (dispatch) => {

    /*axios
      .re("/loans.json", post)
      .then((response) => {
        console.log(response);

        dispatch(storePost(post));
        dispatch(endPostsLoading());
      })
      .catch((error) => {
        console.log(error);

        dispatch(endPostsLoading());
      });*/
  };
};