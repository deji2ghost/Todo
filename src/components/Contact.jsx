import React, { useEffect, useState } from 'react'
import { AddContact } from './AddContact'
import { v4 as uuidv4} from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactCard } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { EditContactButton } from './EditContactButton'

export const Contact = () => {
    const [contact, setContact] = useState([])

    const addValue = ({name, occupation, phone}) => {
        const newValue = {id: uuidv4(), name: name, occupation: occupation, phone: phone}
        setContact([...contact, newValue])
    }

    const editContact = (newName, newOccupation, newPhone, id) => {
        const editedContact = contact.map(contac => {
            if(contac.id === id){
                return ({...contac, name: newName, occupation: newOccupation, phone: newPhone})
            }else{
                return contac
            }
        })

        setContact(editedContact)
    }

    useEffect(() => {
        console.log(contact)
    })

  return (
    <>
    <AddContact addValue={addValue}/>
    <div className='flex flex-wrap justify-center py-3'>
        {
            contact.map((cont) => {
                return(
                    <div key={cont.id} className='mx-4 my-4 bg-white p-3 rounded shadow-md w-2/5'>
                        <div className='flex my-2 items-center'><FontAwesomeIcon icon={faContactCard}/><span className='mx-2 font-light'>Name: {cont.name}</span></div>
                        <div className='flex my-2 items-center'><FontAwesomeIcon icon={faPhone}/><span className='mx-2 font-light'>Phone Number: {cont.phone}</span></div>
                        <div className='flex my-2 items-center'><FontAwesomeIcon icon={faSuitcase} /><span className='mx-2 font-light'>Occupation: {cont.occupation}</span></div>
                        <EditContactButton editContact={editContact} cont={cont}/>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}
