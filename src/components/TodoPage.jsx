import React, { useState } from 'react'
import { EditTodoPage } from './EditTodoPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCancel, faTimes } from '@fortawesome/free-solid-svg-icons'

export const TodoPage = (props) => {

    const [clicked, setClicked] = useState(false)

    const toggleComplete = () => {
      setClicked(!clicked)
    }
  return (
    <div key={props.todoid} className={`flex ${clicked ? 'line-through bg-black text-gray-600 hover:bg-gray-600' : 'bg-stone-600 hover:bg-purple-600'} p-2 my-2 text-gray-400 transition shadow-md items-center justify-between mx-auto rounded-md hover:text-black cursor-pointer`}>
        <p onClick={toggleComplete} >{props.todoname}</p>

        <div className='flex items-center'>
          <FontAwesomeIcon icon={faTimes} onClick={() => props.deleteTodo(props.todoid)} className='mx-1 text-2xl'/>
          <span className='mx-1'><EditTodoPage name={props.todoname} id={props.todoid} editTodo={props.editTodo}/></span>
        </div>
    </div>
  )
}
