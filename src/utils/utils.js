export const makeToDo = (state, payload) => {
    const nextId = state.todos.length + 1;
    const title = payload.title;
    const userId = state.user.userId;
    return {userId, id:nextId, title, completed:false};
};
export const findToDo = (state, payload, completed) => {
    return state.todos.map((todo) => {
        if (todo.id === payload) return {...todo, completed};
        return todo
    })
};