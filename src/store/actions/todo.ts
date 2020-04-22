import {COMPLETE_TODO, DELETE_TODO, LOAD_TODO_LIST, LOAD_TODO_SUCCESS, UNCOMPLETE_TODO} from "./action-types";
import api from "../../api/api";
import {ToDo} from "../../Types/types";
import {Dispatch} from "redux";



export const loadTodosStatus = (payload:boolean) => {
   return { type: LOAD_TODO_LIST, payload }
};

export const loadToDoListSuccess = (payload:ToDo[]) => {
    return { type: LOAD_TODO_SUCCESS, payload}
};

export const fetchToDoList = (userId:number) => (dispatch:Dispatch) => {
    dispatch(loadTodosStatus(true));
    api.loadData(userId)
        .then ((data) => {
            dispatch(loadTodosStatus(false));
            dispatch(loadToDoListSuccess(data));
        })
};


export const deleteToDO = (id:number) => {
    return { type: DELETE_TODO, id }
};

export const completeToDo = (id:number) => {
    return { type: COMPLETE_TODO, id}
};

export const uncompleteToDo = (id:number) => {
    return { type: UNCOMPLETE_TODO, id}
};