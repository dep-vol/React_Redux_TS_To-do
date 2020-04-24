import {popupState} from "../../Types/types";
import {actionsTypes} from "../actions/actions";

const initialState:popupState = {
    message:'',
    confirm:false,
    isShown:false
};

export const popupReducer = (state=initialState, action:actionsTypes):popupState => {
    switch (action.type) {
        case "SHOW_POPUP":{
            return {...state, message:action.message, isShown:true}
        }
        case "CONFIRM_POPUP":{
            return {...state, confirm:action.confirm}
        }
        default: return state
    }
};