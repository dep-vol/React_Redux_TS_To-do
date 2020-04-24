import React, {useState} from "react";
import style from "./Form.module.css";
import Button from "../Button/Button";
import {connect} from "react-redux";
import {RootState} from "../../store/store";
import {getUserId} from "../../utils/utils";
import {actions} from "../../store/actions/actions";
import {Dispatch} from "redux";

type mapState = {
    userId:number
}
type mapDispatch = {
    addToDo: (title:string, id:number)=> void
}

type Props = mapState & mapDispatch;

const mapStateToProps = (state:RootState):mapState => {
    return {
        userId: getUserId(state)
    }
};

const mapDispatchToProps = (dispatch:Dispatch):mapDispatch => {
    return {
        addToDo: (title,userId) => dispatch(actions.addToDo(title,userId))
    }
};

const Form:React.FC<Props> = ({userId,addToDo}) => {
    const[title,setTitle] = useState('');
    const onChangeTitle = (e:React.FormEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    };
    return (
        <div className={style.form}>
            <input className={style.input} type="text" value={title} onChange={onChangeTitle}/>
            <Button theme={'primary'} callback={()=>addToDo(title,userId)}>Add To-do</Button>
        </div>
    )
};

export default connect(mapStateToProps,mapDispatchToProps)(Form);