import List from '@mui/material/List'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import { v4 as uuid } from 'uuid'
import { useState, useEffect } from 'react'

const initialTodos = () => {
    const data = JSON.parse(localStorage.getItem('todos'))
    if (!data)
        return []
    else
        return data
}

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const deleteTodo = (id) => {
        setTodos((todos) => {
            return todos.filter(todo => todo.id !== id)
        })
    }

    const changeStatus = (id) => {
        setTodos((todos) => {
            return todos.map((todo) => {
                if (todo.id === id)
                    return { ...todo, completed: !todo.completed }
                else
                    return todo
            })
        })
    }

    const addTodo = (newTodo) => {
        if (newTodo !== "") {
            setTodos((todos) => {
                return [...todos, { id: uuid(), text: newTodo, completed: false }]
            })
        }
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '0 auto' }}>
            {todos.map((todo) => {
                return <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={() => deleteTodo(todo.id)}
                    changeStatus={() => changeStatus(todo.id)}
                />
            })}
            <TodoForm addTodo={addTodo} />
        </List>
    )
}