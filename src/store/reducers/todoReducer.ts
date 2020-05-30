import {findToDo, makeToDo} from "../../utils/utils";
import {actionsTypes} from "../actions/actions";
import {ToDo, todoState} from "../../Types/types";

const initialState:todoState = {
    todos: [],
    isLoading: false
};

const todoReducer = (state=initialState, action:actionsTypes):todoState => {
    switch (action.type) {
        case "LOAD_TODO_LIST": {
            return {...state, isLoading:action.payload};
        }
        case "LOAD_TODO_SUCCESS": {
            return {...state, todos: action.payload}
        }

        case "DELETE_TODO": {
            const newList = state.todos.filter((el:ToDo) => el.id !== action.id);
            return { ...state, todos: newList}
        }
        case "COMPLETE_TODO": {
            return {...state, todos:findToDo(state,action.id,true)}
        }
        case "UNCOMPLETE_TODO": {
            return {...state, todos:findToDo(state,action.id,false)}
        }
        case "ADD_TODO": {
            const newToDo = makeToDo(state,action.title,action.userId);
            return {...state, todos:[...state.todos,newToDo]}
        }

        default: return state;
    }
};

export default todoReducer;