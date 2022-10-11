const redux = require('redux')
const third = require('third')
const actionTypes=third.actionTypes
const createStore = redux.createStore
const reducer=(state,action) => {
    switch (action.type) {
        case actionTypes.INC:
            return 
    }
}
const store=createStore(reducer)