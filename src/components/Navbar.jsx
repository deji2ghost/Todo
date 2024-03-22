import React, { Children } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = (props) => {
  return (
    <>
        <div className='flex bg-gray-600 px-3 justify-between font-medium items-center'>
            <Link to='/' className='cursor-pointer py-2 px-2 rounded-sm text-xl hover:text-gray-400 hover:bg-blue-600'>Home</Link>

            <Link to='/movie' className='cursor-pointer py-2 px-2 rounded-sm text-xl hover:text-gray-400 hover:bg-blue-600'>Contact List</Link>
        </div>
        {props.children}
        <div className='absolute bg-zinc-900 bottom-0'>footer</div>
    </>
  )
}
