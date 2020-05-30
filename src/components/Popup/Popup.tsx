import React from "react";
import style from "./Popup.module.css";
import {connect} from "react-redux";
import {RootState} from "../../store/store";
import {Action} from "redux";
import {popupAct} from "../../Types/types";
import {onConfirmPopup} from "../../store/actions/popup";
import {ThunkDispatch} from "redux-thunk";
import Button from "../Button/Button";
import {actions} from "../../store/actions/actions";

type StateProps = {
    message:string
    confirm:boolean
    isShown:boolean
    popupAct:popupAct
}
type DispatchProps = {
    onConfirm:(popupAct:popupAct)=>void
    onCancel:(confirm:boolean)=>void
}
type Props = StateProps & DispatchProps

const mapStateToProps = (state:RootState):StateProps => {
    return {
        message:state.popup.message,
        confirm:state.popup.confirm,
        isShown:state.popup.isShown,
        popupAct:state.popup.popupAct
    }
};
const mapDispatchToProps = (dispatch:ThunkDispatch<RootState,unknown,Action>):DispatchProps => {
    return {
        onConfirm:(popupAct)=>dispatch(onConfirmPopup(popupAct)),
        onCancel:(confirm)=>dispatch(actions.confirmPopup(confirm))
    }
};

const Popup:React.FC<Props> = ({isShown, message, popupAct,onConfirm, onCancel}) => {
   const containerVisibility = isShown ? style.show : style.hide;
    return (
        <div className={containerVisibility}>
            {message}
            <Button theme={'primary'} callback={()=>onConfirm(popupAct)}>OK</Button>
            <Button theme={'danger'} callback={()=>onCancel(false)}>CANCEL</Button>
        </div>
    )
};

export default connect(mapStateToProps,mapDispatchToProps)(Popup);