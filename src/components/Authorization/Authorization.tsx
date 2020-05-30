import React, {FormEvent, useState} from "react";
import {Dispatch} from "redux";
import {actions} from "../../store/actions/actions";
import {connect} from "react-redux";
import Button from "../Button/Button";
import { RouteComponentProps } from 'react-router-dom';
import {withRouter} from "react-router";
import style from "./Authorization.module.css";

type DispatchProps = {
    userLogin: (id:number)=>void
}
type Props = DispatchProps & RouteComponentProps


const mapDispatchToProps = (dispatch:Dispatch):DispatchProps => {
    return {
        userLogin: (id) => dispatch(actions.userLogin(id))
    }
};



const Authorization:React.FC<Props> = ({userLogin, history})=> {
    const [value, setValue] = useState('1');
    const handleChange = (e:FormEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value);
    };
    const onClick = () => {
       userLogin(+value);
        history.push('/App')
    };


  return (
      <div className={style.container}>
          <label>
              Выберите пользователя:
              <select className={style.select} value={value} onChange={handleChange}>
                  <option value="1">Alex</option>
                  <option value="2">Svetlana</option>
                  <option value="3">Evgeniy</option>
                  <option value="4">Elena</option>
              </select>
          </label>
          <Button theme={'primary'} callback={onClick}>Show To-Do List</Button>
      </div>
  )  
};

export default withRouter(connect(null,mapDispatchToProps)(Authorization));