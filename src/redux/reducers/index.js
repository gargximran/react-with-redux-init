import counterReducer from "./counter";
import loggedReducer from "./isLogged";
const {combineReducers} = require("redux");

export const rootReducer = combineReducers({
    counter: counterReducer,
    logged: loggedReducer
})
