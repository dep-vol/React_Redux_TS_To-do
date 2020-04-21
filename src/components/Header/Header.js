import React from "react";
import style from "./Header.module.scss";
import logo from "../../img/redux.svg";

const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.header__img} src={logo} alt='Redux'/>
            TO-DO REDUX APP
        </header>
    )
};

export default Header;