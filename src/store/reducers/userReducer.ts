import {actionsTypes} from "../actions/actions";
import {userState} from "../../Types/types";

const initialState:userState = {
    userId: 0
};

const userReducer = (state= initialState, action:actionsTypes):userState => {
    switch (action.type) {
        case "LOGIN": {
            return {...state, userId: action.payload}
        }
        default: return state;
    }
};

export default userReducer;