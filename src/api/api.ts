import axios from "axios";
import {ToDo} from "../Types/types";

const api = {
    //LOGIN PSEUDO
    login() {
      return new Promise((resolve, reject) => {
          setTimeout(()=>{resolve(true)},1000)
      })
    },

    loadData(userId:number){
        return axios.get<ToDo[]>(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
            .then(response => response.data)
    }
};



export default api;