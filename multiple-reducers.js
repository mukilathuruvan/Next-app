const redux = require("redux");
const createStore = redux.createStore;
const combine = redux.combineReducers;
const bind = redux.bindActionCreators;
const actionTypes = {
  addCar: "ADD_CAR",
  takeCar: "TAKE_CAR",
  addBoy: "ADD_BOY",
  addGirl: "ADD_GIRL",
};
const addCar = () => {
  return { type: actionTypes.addCar, payload: 10 };
};
const takeCar = () => {
  return { type: actionTypes.takeCar, payload: 5 };
};
const addBoy = () => {
  return { type: actionTypes.addBoy, payload: 2 };
};
const addGirl = () => {
  return { type: actionTypes.addGirl, payload: 3 };
};
const initialCountState = {
  car: 2,
  bike: 10,
};
const initialPersonState = {
  boys: 5,
  girls: 10,
};
const countReducer = (state = initialCountState, action) => {
  switch (action.type) {
    case actionTypes.addCar:
      return { ...state, car: state.car + action.payload };
    case actionTypes.takeCar:
      return { ...state, car: state.car - action.payload };
    default:
      return state;
  }
};
const personReducer = (state = initialPersonState, action) => {
  switch (action.type) {
    case actionTypes.addGirl:
      return { ...state, girls: state.girls + action.payload };
    default:
      return state;
  }
};
const rootReducer = combine({ count: countReducer, person: personReducer });
const store = createStore(rootReducer);
const get = () => {
  console.log(store.getState());
};
const unsub = store.subscribe(() => get());
const actions = bind({ addBoy, addCar, addGirl, takeCar }, store.dispatch);
actions.addGirl()
actions.addCar()
unsub();
