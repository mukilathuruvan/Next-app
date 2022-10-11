const redux = require("redux");
const createStore = redux.createStore;
const bind=redux.bindActionCreators
const actionTypes = {
  INC: "INCREAMENT",
  DEC: "DECREAMENT",
  RESET: "RESET",
};

const getInc = (value) => {
  return { type: actionTypes.INC, value };
};
const getDec = (value) => {
  return { type: actionTypes.DEC, value };
};
const getReset = () => {
  return { type: actionTypes.RESET };
};
const initialState = {
  count: 0,
  value: 0,
};
const reducer = (state = initialState, action) => {
  let { value, type } = action;
  switch (type) {
    case actionTypes.INC:
      return { ...state, count: state.count + value };
    case actionTypes.RESET:
      return initialState;
    default:
      return state;
  }
};

const store = createStore(reducer);
const getValue = () => {
  console.log("updated state", store.getState());
};
const unsub = store.subscribe(() => getValue());
// store.dispatch(getInc(10));
// store.dispatch(getInc(20));
// store.dispatch(getReset());
// store.dispatch(getInc(20));
// store.dispatch(getReset());
const actions = bind({ getInc, getDec, getReset }, store.dispatch)
actions.getInc(10)
actions.getInc(20)
actions.getReset()
unsub();
