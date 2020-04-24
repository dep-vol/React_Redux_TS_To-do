//PARTIAL TYPES
export type ToDo = {
    userId: number
    id: number
    title: string
    completed: boolean
}

//STATE TYPES

export type todoState = {
    todos: ToDo[]
    isLoading: boolean
}

export type userState = {
    userId: number
}