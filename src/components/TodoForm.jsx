import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(value)
        setValue('')
    }
  return (
    <>
      <h1 className='font-light'>Add Your Todo List Down</h1>
      <form onSubmit={handleSubmit} className='flex w-full my-6'>
          <input 
              className='p-2 w-4/6 outline-none md:w-4/5 rounded-l-md'
              type='text'
              placeholder='Click here to add Your ToDo List'
              value={value}
              onChange={(e) => setValue(e.target.value)}
          />
          <button className='bg-purple-600 w-2/6 rounded-r-md p-2 md:w-1/5 hover:bg-stone-600 hover:text-gray-500'>Add ToDo</button>
      </form>
    </>
  )
}
