import React from "react";
import styles from './Todo.module.css'

const Todo = ({title, bolibompa, id, removeTodo}) => {

    const removeHandler = () => {
        //logic goes here
        removeTodo(id)
    }

    //lägg till defaultcss
    const css = [styles.Todo]

    //om todo är completed så lägg till cssklassen Completed
    if(bolibompa){
        css.push(styles.Completed)
    }
    //join konverterar array till string
    //[styles.Todo, styles.Completed] = "Todo Completed"
    return <div className={css.join(' ')} >
        <h4 >{title}</h4>
        <p>{id}</p>
        <p>{bolibompa}</p>
        <button onClick={removeHandler} >Ta bort mig</button>
    </div>
}
export default Todo;