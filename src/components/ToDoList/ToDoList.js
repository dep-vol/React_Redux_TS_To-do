import style from "./ToDoList.module.scss";
import React from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";

const ToDoList = ({ todos, deleteToDo, completeToDo, uncompleteToDo }) => {
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
                                callback={{func:completeToDo, params:[el.id]}}
                                disabled={el.completed}
                            >
                                check
                            </Button>
                            <Button
                                theme={'secondary'}
                                callback={{func:uncompleteToDo, params:[el.id]}}
                                disabled={!el.completed}
                            >
                                uncheck
                            </Button>
                            <Button
                                theme={'danger'}
                                callback={{func:deleteToDo, params:[el.id]}}
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