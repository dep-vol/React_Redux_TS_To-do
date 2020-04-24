import api from "../../api/api";
import {ToDo} from "../../Types/types";
import {Action, Dispatch} from "redux";
import { ThunkAction } from "redux-thunk";
import {RootState} from "../store";

export const todoActions = {
    loadTodosStatus : (payload: boolean) => {
        return {type: "LOAD_TODO_LIST", payload} as const
    },

    loadToDoListSuccess : (payload: ToDo[]) => {
        return {type: "LOAD_TODO_SUCCESS", payload} as const
    },

    deleteToDO : (id: number) => {
        return {type: "DELETE_TODO", id} as const
    },

    completeToDo : (id: number) => {
        return {type: "COMPLETE_TODO", id} as const
    },

    uncompleteToDo : (id: number) => {
        return {type: "UNCOMPLETE_TODO", id} as const
    },
    addToDo : (title: string, userId:number) => {
        return {type: "ADD_TODO", title, userId} as const
    }
};



export const fetchToDoList = (userId:number): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch:Dispatch) => {
    dispatch(todoActions.loadTodosStatus(true));
    api.loadData(userId)
        .then ((data) => {
            dispatch(todoActions.loadTodosStatus(false));
            dispatch(todoActions.loadToDoListSuccess(data));
        })
};




