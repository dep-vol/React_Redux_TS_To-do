import React, {useEffect} from "react";
import {connect} from "react-redux";
import { fetchToDoList } from "../../store/actions/todo";
import {actions} from "../../store/actions/actions";
import ToDoList from "./ToDoList";
import Loader from "../Loader/Loader";
import {ToDo, popupAct} from "../../Types/types";
import {RootState} from "../../store/store";
import  {Action} from "redux";
import {ThunkDispatch} from "redux-thunk";


type stateProps = {
    todos: ToDo[]
    userId: number
    isLoading: boolean
}
type dispatchProps = {
    load: (userId:number) => void
    deleteToDo: (toDoId:number) => void
    completeToDo: (toDoId:number) => void
    uncompleteToDo: (toDoId:number) => void
    showPopup: (message:string,popupAct:popupAct) => void
}

type Props = stateProps & dispatchProps;


const ToDoListContainer:React.FC<Props> = (props) => {
    const {load, userId, isLoading, todos, deleteToDo, completeToDo, uncompleteToDo, showPopup} = props;

    useEffect(() => {
        load(userId);
    },[load, userId]);

    return isLoading ?  <Loader/> :
                        <ToDoList
                            todos={todos}
                            deleteToDo={deleteToDo}
                            completeToDo={completeToDo}
                            uncompleteToDo={uncompleteToDo}
                            showPopup={showPopup}
                        />
};



const mapStateToProps = (state:RootState):stateProps => {
    return {
        todos: state.todos.todos,
        userId: state.user.userId,
        isLoading: state.todos.isLoading
    }
};

const mapDispatchToProps = (dispatch:ThunkDispatch<RootState,unknown,Action>):dispatchProps => {
    return {
        load: (userId) => dispatch(fetchToDoList(userId)),
        deleteToDo: (toDoId) => dispatch(actions.deleteToDO(toDoId)),
        completeToDo: (toDoId) => dispatch(actions.completeToDo(toDoId)),
        uncompleteToDo: (toDoId) => dispatch(actions.uncompleteToDo(toDoId)),
        showPopup: (message,popupAct) => dispatch(actions.showPopup(message,popupAct))
    }
};


export default connect<stateProps,dispatchProps,{},RootState>(mapStateToProps, mapDispatchToProps)(ToDoListContainer);