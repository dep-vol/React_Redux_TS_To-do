import {
    COMPLETE_TODO,
    DELETE_TODO,
    LOAD_TODO_ERROR,
    LOAD_TODO_LIST,
    LOAD_TODO_SUCCESS, UNCOMPLETE_TODO
} from "../actions/action-types";
import {findToDo, makeToDo} from "../../utils/utils";

const initialState = {
    todos: [],
    isLoading: false
};

const todoReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOAD_TODO_LIST: {
            return {...state, isLoading:action.payload};
        }
        case LOAD_TODO_SUCCESS: {
            return {...state, todos: action.payload}
        }

        case DELETE_TODO: {
            const newList = state.todos.filter((el) => el.id !== action.id);
            return { ...state, todos: newList}
        }
        case COMPLETE_TODO: {
            return {...state, todos:findToDo(state,action.id,true)}
        }
        case UNCOMPLETE_TODO: {
            return {...state, todos:findToDo(state,action.id,false)}
        }

        default: return state;
    }
};

export default todoReducer;