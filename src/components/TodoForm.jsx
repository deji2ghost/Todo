import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(value)
        setValue('')
    }
  return (
    <form onSubmit={handleSubmit} className='w-full mb-6'>
        <input 
            className='p-2 outline-none w-4/5 rounded-l-md'
            type='text'
            placeholder='Your ToDo List'
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
        <button className='bg-purple-600 rounded-r-md p-2 w-1/5 hover:bg-stone-600 hover:text-gray-500'>Add ToDo</button>
    </form>
  )
}
