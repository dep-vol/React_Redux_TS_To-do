import {todoActions} from "./todo";
import {userActions} from "./user";
import {popupActions} from "./popup";

export const actions = {...todoActions,...userActions, ...popupActions};

type inferValueTypes<T> = T extends {[key:string]:infer U} ? U : never;
export type actionsTypes = ReturnType<inferValueTypes<typeof actions>>;