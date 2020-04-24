import React from "react";
import style from "./Popup.module.css";
import {connect} from "react-redux";
import {RootState} from "../../store/store";
import {Action} from "redux";
import {popupAct} from "../../Types/types";
import {onConfirmPopup} from "../../store/actions/popup";
import {ThunkDispatch} from "redux-thunk";

type StateProps = {
    message:string
    confirm:boolean
    isShown:boolean
    popupAct:popupAct
}
type DispatchProps = {
    onConfirm:(popupAct:popupAct)=>void
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
        onConfirm:(popupAct)=>dispatch(onConfirmPopup(popupAct))
    }
};

const Popup:React.FC<Props> = ({isShown, message, popupAct,onConfirm}) => {
   const containerVisibility = !isShown ? style.show : style.hide;
    return (
        <div className={containerVisibility}>
            {message}
            <button onClick={()=>onConfirm(popupAct)}>OK</button>
            <button>CANCEL</button>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Popup);