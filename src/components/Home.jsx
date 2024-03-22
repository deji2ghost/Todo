import React, { useEffect, useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4} from 'uuid'
import { TodoPage } from './TodoPage'

export const Home = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (value) => {
        const addTask = { id: uuidv4(), name: value, isEditing: false} 
        setTodos([...todos, addTask])
    }

    const editTodo = (newTodo, id) => {
        const editValue = todos.map(todo => {
            if(todo.id === id){
                return {...todo, name:newTodo }
            } else {
                return todo
        }})

        // console.log(editValue)
        setTodos(editValue)
    }

    const deleteTodo = (id) => {
        console.log('clicked')
        const deleteTask = todos.filter(todo => todo.id !== id)
        setTodos(deleteTask)
    }

    // const toggleComplete = (id) => {
    //     const 
    // }

    useEffect(() => {
        console.log(todos)
    })


  return (
    <div className='flex flex-col justify-center items-center w-2/5 mx-auto p-2 mt-7'>
        <TodoForm addTodo={addTodo}/>
        
        <div className='rounded-md w-full bg-gray-400 p-3'>
            {todos.map(todo => {
                return(
                    <TodoPage key={todo.id} todoname={todo.name} todoid={todo.id} editTodo={editTodo} deleteTodo={deleteTodo}/>
                )
            })}
        </div>
    </div>
  )
}
