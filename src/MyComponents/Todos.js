import React from 'react'
import {TodoItem} from './TodoItem'

export const Todos = (props) => {
  
  return (
    <div className="container my-3">
      <h3 className=" text-center text-700 my-3">Contacts</h3>
      {props.todos.length === 0? <h5 className="text-center my-5"> No Contacts to display</h5>: 
      props.todos.map((todo)=>{
        return (
        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        )
      })}
      <hr/>  
    </div>
  )
}

