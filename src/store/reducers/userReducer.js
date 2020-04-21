import {LOGIN} from "../actions/action-types";

const initialState = {
    userId: null,
    isLogged: true
};

const userReducer = (state= initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {...state, userId: action.payload}
        }
        default: return state;
    }
}

export default userReducer;