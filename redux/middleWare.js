const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const logger = reduxLogger.createLogger;
// this logger will log the state after and before

const apply = redux.applyMiddleware;
const store = createStore(reducer, apply(logger));
