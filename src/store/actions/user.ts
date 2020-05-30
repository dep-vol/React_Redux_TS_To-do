
export const userActions = {
    userLogin : (id:number) => {
        return {
            type: "LOGIN",
            payload: id
        } as const
    }
};