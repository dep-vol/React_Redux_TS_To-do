import React from 'react';
import './App.css';
import Header from "../Header/Header";
import ToDos from "../ToDoList/ToDoListContainer";
import Popup from "../Popup/Popup";
import {connect} from "react-redux";
import {RootState} from "../../store/store";
import {Redirect} from "react-router";

type StateProps = {
    userId:number
}
type Props = StateProps

const App:React.FC<Props> = ({userId}) =>{
    if(userId===0) return <Redirect to="/"/>;

    return (
        <div className="App">
            <Header/>
            <ToDos/>
            <Popup/>
        </div>
    );
};

const mapStateToProps = (state:RootState):StateProps => {
    return ({userId:state.user.userId})
};
export default connect(mapStateToProps,null)(App);
