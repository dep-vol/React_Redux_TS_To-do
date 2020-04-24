import {popupState} from "../../Types/types";
import {actionsTypes} from "../actions/actions";

const initialState:popupState = {
    message:'',
    confirm:false,
    isShown:false,
    popupAct:{type:'',payload:0}
};

export const popupReducer = (state=initialState, action:actionsTypes):popupState => {
    switch (action.type) {
        case "SHOW_POPUP":{
            return {...state, message:action.message, isShown:true, popupAct:{...state.popupAct,...action.popupAct}}
        }
        case "CONFIRM_POPUP":{
            return {...state, confirm:action.confirm, isShown:false}
        }
        default: return state
    }
};