import React, {useEffect} from "react";
import {connect} from "react-redux";
import {completeToDo, deleteToDO, fetchToDoList, uncompleteToDo} from "../../store/actions/todo";
import ToDoList from "./ToDoList";
import Loader from "../Loader/Loader";

const ToDoListContainer = (props) => {
    const {load, userId, isLoading, todos, deleteToDo, completeToDo, uncompleteToDo} = props;

    useEffect(() => {
        load(userId);
    },[load, userId]);

    return isLoading ?  <Loader/> :
                        <ToDoList
                            todos={todos}
                            deleteToDo={deleteToDo}
                            completeToDo={completeToDo}
                            uncompleteToDo={uncompleteToDo}
                        />
};



const mapStateToProps = (state) => {
    return {
        todos: state.todos.todos,
        userId: state.user.userId,
        isLoading: state.todos.isLoading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        load: (userId) => dispatch(fetchToDoList(userId)),
        deleteToDo: (toDoId) => dispatch(deleteToDO(toDoId)),
        completeToDo: (toDoId) => dispatch(completeToDo(toDoId)),
        uncompleteToDo: (toDoId) => dispatch(uncompleteToDo(toDoId))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer);