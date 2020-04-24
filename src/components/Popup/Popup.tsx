import React from "react";
import style from "./Popup.module.css";
import {connect} from "react-redux";
import {RootState} from "../../store/store";
import {Dispatch} from "redux";
import {actions} from "../../store/actions/actions";

type StateProps = {
    message:string
    confirm:boolean
    isShown:boolean
}
type DispatchProps = {
    onConfirmToggle:(confirm:boolean)=>void
}
type Props = StateProps & DispatchProps

const mapStateToProps = (state:RootState):StateProps => {
    return {
        message:state.popup.message,
        confirm:state.popup.confirm,
        isShown:state.popup.isShown
    }
};
const mapDispatchToProps = (dispatch:Dispatch):DispatchProps => {
    return {
        onConfirmToggle:(confirm)=>dispatch(actions.confirmPopup(confirm))
    }
};

const Popup:React.FC<Props> = ({isShown, message, confirm,onConfirmToggle}) => {
   return (
        <div>
            {message}
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Popup);