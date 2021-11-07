import React from 'react'

export const ContactItem = ({contact, onDelete}) => {
    return (
        <>
        <hr/>
        <div>
            <p>Name: {contact.title}</p>
            <p>E-Mail: {contact.desc}</p>
            <p>Number: {contact.num}</p>
            <button className="btn btn-sm btn-danger" onClick={()=> {onDelete(contact)}}>Delete</button> 
        </div>
        
        </>
    )
}
