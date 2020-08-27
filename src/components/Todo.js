import React from "react";
import styles from './Todo.module.css'

const Todo = ({title, bolibompa, id, removeTodo}) => {

    const removeHandler = () => {
        //logic goes here
        removeTodo(id)
    }

    return <div className={styles.Todo} >
        <h4 >{title}</h4>
        <p>{id}</p>
        <p>{bolibompa}</p>
        <button onClick={removeHandler} >Ta bort mig</button>
    </div>
}
export default Todo;