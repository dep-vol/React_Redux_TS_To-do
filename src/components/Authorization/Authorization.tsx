import React, {FormEvent, useState} from "react";
import {RootState} from "../../store/store";
import {Dispatch} from "redux";
import {actions} from "../../store/actions/actions";
import {connect} from "react-redux";
import Button from "../Button/Button";
import { RouteComponentProps } from 'react-router-dom';
import {withRouter} from "react-router";

type StateProps = {
    isLogged: boolean
}
type DispatchProps = {
    userLogin: (id:number)=>void
}
type Props = StateProps & DispatchProps & RouteComponentProps

const mapStateToProps = (state:RootState):StateProps => {
    return {
        isLogged:state.user.isLogged
    }
};
const mapDispatchToProps = (dispatch:Dispatch):DispatchProps => {
    return {
        userLogin: (id) => dispatch(actions.userLogin(id))
    }
};



const Authorization:React.FC<Props> = ({userLogin, isLogged, history})=> {
    const [value, setValue] = useState('');
    const handleChange = (e:FormEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value);
    };

    if(isLogged) history.push('/App');

  return (
      <div>
          <label>
              Выберите пользователя:
              <select value={value} onChange={handleChange}>
                  <option value="1">Alex</option>
                  <option value="2">Svetlana</option>
                  <option value="3">Evgeniy</option>
                  <option value="4">Elena</option>
              </select>
          </label>
          <Button theme={'primary'} callback={()=>userLogin(+value)}>Show To-Do List</Button>
      </div>
  )  
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Authorization));