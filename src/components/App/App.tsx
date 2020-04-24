import React from 'react';
import './App.css';
import Header from "../Header/Header";
import ToDos from "../ToDoList/ToDoListContainer";
import Popup from "../Popup/Popup";

const App = () =>{

    return (
        <div className="App">
            <Header/>
            <ToDos/>
            <Popup/>
        </div>
    );
};

export default App;
