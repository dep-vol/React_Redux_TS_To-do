import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {Action} from "redux";
import {actions} from "./actions";
import {popupAct} from "../../Types/types";

export const popupActions = {
    showPopup: (message:string, popupAct:popupAct) => ({type:"SHOW_POPUP",message,popupAct} as const),
    confirmPopup: (confirm:boolean) => ({type:"CONFIRM_POPUP",confirm} as const)
};

export const onConfirmPopup = (popupAction:popupAct): ThunkAction<void, RootState, unknown, Action<string>> =>(dispatch)=>{
    switch(popupAction.type){
        case "DELETE":{
            dispatch(actions.deleteToDO(popupAction.payload));
            dispatch(popupActions.confirmPopup(true));
            break;
        }
        default: return
    }
}