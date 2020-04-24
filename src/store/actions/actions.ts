import {todoActions} from "./todo";
import {userActions} from "./user";

export const actions = {...todoActions,...userActions};

type inferValueTypes<T> = T extends {[key:string]:infer U} ? U : never;
export type actionsTypes = ReturnType<inferValueTypes<typeof actions>>;