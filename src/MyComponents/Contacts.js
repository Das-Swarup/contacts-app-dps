import React from 'react'
import { ContactItem } from './ContactItem'

export const Contacts = (props) => {

  return (
    <div className="container my-3">
      <h3 className=" text-center text-700 my-3">Contacts</h3>
      {props.contacts.length === 0 ? <h5 className="text-center my-5"> No Contacts to display</h5> :
        props.contacts.map((contact) => {
          return (
            <ContactItem contact={contact} key={contact.sno} onDelete={props.onDelete} />
          )
        })}
      <hr />
    </div>
  )
}

