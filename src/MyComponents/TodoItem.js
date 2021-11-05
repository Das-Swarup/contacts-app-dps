import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <hr/>
        <div>
            <p>Name: {todo.title}</p>
            <p>E-Mail: {todo.desc}</p>
            <p>Number:{todo.num}</p>
            <button className="btn btn-sm btn-danger" onClick={()=> {onDelete(todo)}}>Delete</button> 
        </div>
        
        </>
    )
}
