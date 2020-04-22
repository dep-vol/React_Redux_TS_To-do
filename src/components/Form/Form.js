import React from "react";
import style from "./Form.module.css";
import Button from "../Button/Button";

const Form = () => {
    return (
        <div className={style.form}>
            <input className={style.input} type="text"/>
            <Button theme={'primary'}>Add To-do</Button>
        </div>
    )
};

export default Form