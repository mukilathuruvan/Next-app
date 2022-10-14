const redux = require("redux");
const createStore = redux.createStore;
const apply = redux.applyMiddleware;
const thunk = require("redux-thunk").default;
const axios = require("axios");
const actions = {
  u: "fetch_users",
  s: "fetch_success",
  f: "fetch_failure",
};
const initialState = {
  loading: false,
  users: [],
  err: "",
};
const fetchLoading = () => {
  return { type: actions.u };
};
const fetchSuccess = (users) => {
  return { type: actions.s, data: users };
};
const fetchFailure = (err) => {
  return { type: actions.f, payload: err };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.u:
      return { ...state, loading: true };
    case actions.s:
      return { loading: false, users: action.data, err: "" };
    case actions.f:
      return { loading: false, users: [], err: action.payload };
    default:
      return state;
  }
};
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchLoading());
    dispatch(fetchSuccess(["manfree", "usilampatti", "paris"]));
    dispatch(fetchFailure("error vadhuruchu pa"));
    // axios
    //   .get("https://jsonplaceholder.typicode.com/userser")
    //   .then((response) => {
    //     const user = response.data.map((item) => item.username);
    //     dispatch(fetchSuccess(["manfree", "usilampatti", "paris"]));
    //   })
    //   .catch((err) => {
    //     dispatch(fetchFailure(err.message));
    //   });
  };
};
const store = createStore(reducer, apply(thunk));
const unsub = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());
// store.dispatch(fetchSuccess(["manfree", "usilampatti", "paris"]));
// console.log(store.getState())
unsub();
