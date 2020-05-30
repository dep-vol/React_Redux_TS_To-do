import {applyMiddleware, combineReducers, createStore} from "redux";
import todoReducer from "./reducers/todoReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import {popupReducer} from "./reducers/popupReducer";


const rootReducer = combineReducers({
    todos:todoReducer,
    user:userReducer,
    popup:popupReducer
});


export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export type RootState = ReturnType<typeof rootReducer>;

