import {ADD_TODO, COMPLETE_TODO, DELETE_TODO, LOAD_TODO_LIST, LOAD_TODO_SUCCESS, UNCOMPLETE_TODO} from "./action-types";
import api from "../../api/api";

export const loadTodosStatus = (payload) => {
   return { type: LOAD_TODO_LIST, payload }
};

export const loadToDoListSuccess = (payload) => {
    return { type: LOAD_TODO_SUCCESS, payload}
};

export const fetchToDoList = (userId) => (dispatch) => {
    dispatch(loadTodosStatus(true));
    api.loadData(userId)
        .then ((data) => {
            dispatch(loadTodosStatus(false));
            dispatch(loadToDoListSuccess(data));
        })
};

export const addToDO = (todo) => {
    return { type: ADD_TODO, todo }
};

export const deleteToDO = (id) => {
    return { type: DELETE_TODO, id }
};

export const completeToDo = (id) => {
    return { type: COMPLETE_TODO, id}
};

export const uncompleteToDo = (id) => {
    return { type: UNCOMPLETE_TODO, id}
};