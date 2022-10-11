const redux = require("redux");
const produce = require("immer").produce;
const actionTypes = {
  updateCity: "UPDATE_CITY",
};

const updateCity = () => {
  return { type: actionTypes.updateCity, payload: "gandhi puram" };
};
const user = {
  name: "manfree",
  age: 21,
  address: {
    doorNo: 121,
    city: "sitra",
    town: "cbe",
  },
};
const reducer = (state = user, action) => {
  switch (action.type) {
    case actionTypes.updateCity:
      //   without immen
      //   return { ...state, address: { ...state.address, city: action.payload } };
      //   with immen
      return produce(state, (draft) => {
        draft.address.city = "madurai";
      });
    default:
      return state;
  }
};
const store = redux.createStore(reducer);
console.log(store.getState());
const unsub = store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(updateCity());
