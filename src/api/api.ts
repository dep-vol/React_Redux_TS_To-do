import axios from "axios";
import {ToDo} from "../Types/types";

const api = {

    loadData(userId:number){
        return axios.get<ToDo[]>(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
            .then(response => response.data)
    }
};



export default api;