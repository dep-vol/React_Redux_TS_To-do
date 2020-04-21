import axios from "axios";

const api = {
    //LOGIN PSEUDO
    login() {
      return new Promise((resolve, reject) => {
          setTimeout(()=>{resolve(true)},1000)
      })
    },

    loadData(userId) {
        return axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
            .then(response => response.data)
            .catch(error => console.log(error))
    }
};

export default api;