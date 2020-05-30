import style from "./ToDoList.module.css";
import React from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";
import {popupAct, ToDo} from "../../Types/types";

type Props = {
    todos: ToDo[]
    deleteToDo: (id: number)=> void
    completeToDo:(id: number)=> void
    uncompleteToDo:(id: number)=> void
    showPopup:(message:string,popupAct:popupAct)=> void
}

const ToDoList: React.FC<Props> = ({ todos, completeToDo, uncompleteToDo, showPopup }) => {
    return (
        <div className={style.todos}>
            <h1 className={style.todos__head}>
                To-do list:
            </h1>
            <ul className={style.todos__list}>
                {todos.map((el, i) => {
                    return (
                    <li className={`${style.todos__item} ${el.completed ? style.completed : ''}`} key={el.id}>
                        <div className={style.todos__body}>
                            <div className={style.todos__id}>
                                {i+1}.
                            </div>
                            <div className={style.todos__title}>
                                {el.title}
                            </div>
                        </div>

                        <div>
                            <Button
                                theme={'primary'}
                                callback={()=>completeToDo(el.id)}
                                disabled={el.completed}
                            >
                                check
                            </Button>
                            <Button
                                theme={'secondary'}
                                callback={()=>uncompleteToDo(el.id)}
                                disabled={!el.completed}
                            >
                                uncheck
                            </Button>
                            <Button
                                theme={'danger'}
                                callback={()=>showPopup("Are you sure?", {type:"DELETE",payload:el.id})}
                            >
                                delete
                            </Button>
                        </div>

                    </li>
                    )
                })}
            </ul>
            <Form />
        </div>
    )
};

export default ToDoList;