import React from 'react';
import './App.css';
import Header from "../Header/Header";
import ToDos from "../ToDoList/ToDoListContainer";

const App = () =>{

    return (
        <div className="App">
            <Header/>
            <ToDos/>
        </div>
    );
};

export default App;
