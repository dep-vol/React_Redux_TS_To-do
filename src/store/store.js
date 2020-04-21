import {applyMiddleware, combineReducers, createStore} from "redux";
import todoReducer from "./reducers/todoReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";

const reducer = combineReducers({
    todos:todoReducer,
    user:userReducer
});


export const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk)
));

