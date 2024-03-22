import React, { useState } from 'react'

export const AddContact = (props) => {

    const [clicked, setClicked] = useState(true)
    const [name, setName] = useState('')
    const [occupation, setOccupation ] = useState('')
    const [phone, setPhone ] = useState('')

    const handleClick = (props) => {
        console.log('clicked')
        setClicked(!clicked)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addValue({name, occupation, phone})

        setName('')
        setOccupation('')
        setPhone('')
    }
  return (
    <>
        <div onClick={handleClick} className='cursor-pointer text-center bg-purple-600 w-1/12 mx-auto my-8 rounded p-3 ease-in-out hover:bg-stone-600 hover:text-gray-500'>Add Contact</div>

        <div onClick={handleClick} className={`absolute bg-gray-300 bg-opacity-50  ${clicked ? 'hidden' : 'visible'} top-0 left-0 w-full h-screen`}></div>
        <form onSubmit={handleSubmit} className={`absolute rounded ${clicked ? 'hidden' : 'visible'} p-4 w-2/6 top-0 bottom-0 my-auto h-64 left-0 right-0 mx-auto bg-slate-600`}>
            <div className='my-1'>
                <label htmlFor='name'>Name</label>
                <input 
                    className='w-full rounded-sm outline-none p-1'
                    type='text'
                    placeholder='type your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='my-1'>
                <label htmlFor='occupation'>Occupation</label>
                <input 
                    className='w-full rounded-sm outline-none p-1'
                    type='text'
                    placeholder='type your name'
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                />
            </div>
            <div className='my-1'>
                <label htmlFor='phone'>Phone Number</label>
                <input 
                    className='w-full rounded-sm outline-none p-1'
                    type='text'
                    placeholder='type your name'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            
            <button onClick={handleClick} className='w-full mt-3 rounded-sm text-center bg-gray-600 hover:bg-gray-200'>AddContact</button>
        </form>
    </>
  )
}
