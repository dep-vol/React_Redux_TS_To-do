import React from 'react';
import {useState} from 'react';
import './App.css';
import Header from "../Header/Header";
import ToDos from "../ToDoList/ToDoListContainer";
import api from "../../api/api";
import {store} from "../../store/store";
import {userLogin} from "../../store/actions/user";
import Loader from "../Loader/Loader";

function App(){
    const [isLoading, setIsLoading] = useState(true);

    //PSEUDO LOGIN
    api.login().then(result => {
        if (result) {
            store.dispatch(userLogin(1));
            setIsLoading (false)
        }
    });
    if (isLoading) return <Loader />;

    return (
        <div className="App">
            <Header/>
            <ToDos/>
        </div>
    );
}

export default App;
