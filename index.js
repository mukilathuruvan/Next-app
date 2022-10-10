// importing redux

const redux = require('redux');
const createStore = redux.createStore

// creating an action

const CAKE_ORDERED = "CAKE_ORDERED";
const orderCake = () => {
  //action creater
  return {
    type: CAKE_ORDERED,
    count: 1,
  };
};

// creating reducer

const initialState = {
  cakeCount: 10,
  day: 12,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return { ...state, cakeCount: state.cakeCount - 1 };
    default:
      return state;
  }
};

// creating store

const store = createStore(reducer);
const gettingState = () => {
  console.log("getting state of ", store.getState());
};
gettingState();

// subscribing to the store
const unsubscribe=store.subscribe(() => gettingState());


// creating dispatch function

store.dispatch(orderCake())
store.dispatch(orderCake())
unsubscribe()