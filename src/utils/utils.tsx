import {todoState} from "../Types/types";
import {RootState} from "../store/store";

export const makeToDo = (state:todoState, title:string, userId:number) => {
    const nextId = state.todos[state.todos.length-1].id +1;
    return {userId, id:nextId, title, completed:false};
};
export const findToDo = (state:todoState, payload:number, completed:boolean) => {
    return state.todos.map((todo) => {
        if (todo.id === payload) return {...todo, completed};
        return todo
    })
};

//SELECTORS

export const getUserId = (state:RootState):number => {
    return state.user.userId
};