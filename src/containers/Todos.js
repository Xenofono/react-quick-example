import React, {useState, useEffect} from 'react';
import css from './Todos.module.css'

import Todo from '../components/Todo'

const URL = "https://jsonplaceholder.typicode.com/todos?_limit=10"

const Todos = props => {

    const [todoList, setTodoList] = useState([])
    const [example, setExample] = useState("")
    // useEffect(func, array)
    useEffect(() => {

        // fetch(URL)
        // .then(response => response.json())
        // .then(data => setTodoList(data))

        async function getData(){
            const response = await fetch(URL)
            const list = await response.json()
            setTodoList(list)
            console.log(list)
        }
        getData()
        setExample("hallå")
    }, [])
    const removeTodo = (id) => {
        const newList = todoList.filter(todo => todo.id !== id)
        setTodoList(newList)
    }

    const toShow = todoList //[1,2,3,4,5,6,7,8,9,10]
            .filter(todo => todo.id%2=== 0) //[2,4,6,8,10]
            .map(todo =><Todo 
                key={todo.id}
                id={todo.id} 
                title={todo.title} 
                bolibompa={todo.completed}
                userId={todo.userId}
                removeTodo={removeTodo}></Todo>) //[div, div, div, div, div]


   

    return (
        <div className={css.Todos}>
            {todoList.length === 0 ? <p>laddar</p> :toShow}
            {example}
        </div>
    )
}

export default Todos;