import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export const EditTodoPage = (props) => {

    const [editValue, setEditValue] = useState(props.name)
    const [isclick, setIsclick] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault()
        props.editTodo(editValue, props.id)
        handleClick()
    }
    const handleClick = () => {
        setIsclick(!isclick)
    }
  return (
    <div>
        <FontAwesomeIcon onClick={handleClick} icon={faEdit}/>
        <div onClick={handleClick} className={`absolute ${!isclick ? 'block' : 'hidden'} bg-slate-500 border-2 bg-opacity-70 border-green-500 absolute top-0 left-0 w-full h-full`}></div>
        <form onSubmit={handleSubmit} className={`absolute ${!isclick ? 'block' : 'hidden'} bg-gray-500 flex flex-col w-2/5 rounded-t-md left-0 right-0 mx-auto`}>
            <input 
                className='w-full p-2 rounded-t-md'
                placeholder='edit your task'
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
            />
            <button className='w-full py-2 bg-purple-500 hover:bg-gray-600 hover:text-white'>UpdateTask</button>
        </form>
        
    </div>
  )
}
