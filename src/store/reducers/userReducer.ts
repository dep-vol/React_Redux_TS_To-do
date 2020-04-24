import {actionsTypes} from "../actions/actions";
import {userState} from "../../Types/types";

const initialState:userState = {
    userId: 0,
    isLogged: false
};

const userReducer = (state= initialState, action:actionsTypes):userState => {
    switch (action.type) {
        case "LOGIN": {
            return {...state, userId: action.payload, isLogged:true}
        }
        default: return state;
    }
};

export default userReducer;