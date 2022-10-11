const redux = require("redux");
const createStore = redux.createStore;
const actionTypes = {
  CAKE_ORDERED: "CAKE_ORDERED",
  CAKE_RETURNED: "CAKE_RETURNED",
  WORKER_LEAVE: "WORKER_LEAVE",
  WORKER_JOINED: "WORKDER_JOINED",
};
const orderCake = () => {
  return { type: actionTypes.CAKE_ORDERED, value: 1 };
};
const returnCake = () => {
  return { type: actionTypes.CAKE_RETURNED, value: 1 };
};
const takeLeave = () => {
  return { type: actionTypes.WORKER_LEAVE, value: 1 };
};
const rejoin = () => {
  return { type: actionTypes.WORKER_JOINED, value: 1 };
};
const initialState = {
  cakeCount: 10,
  workers: 4,
};
const reducer = (state = initialState, action) => {
  const { type, value } = action;
  switch (type) {
    case actionTypes.CAKE_ORDERED:
      return { ...state, cakeCount: state.cakeCount - value };
    case actionTypes.CAKE_RETURNED:
      return { ...state, cakeCount: state.cakeCount + value };
    case actionTypes.WORKER_JOINED:
      return { ...state, workers: state.workers + value };
    case actionTypes.WORKER_LEAVE:
      return { ...state, workers: state.workers - value };
    default:
      return state;
  }
};

const store = createStore(reducer);
const gettingState = () => {
  console.log("updated state", store.getState());
};
const unsubscribe = store.subscribe(() => gettingState());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(returnCake());
store.dispatch(takeLeave());
store.dispatch(rejoin());
unsubscribe();
