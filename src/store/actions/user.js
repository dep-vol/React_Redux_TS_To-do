import {LOGIN} from "./action-types";

export const userLogin = (id) => {
    return {
        type: LOGIN,
        payload: id
    }
};
