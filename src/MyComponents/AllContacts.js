
import { Todos } from "./Todos";
import React, { useState, useEffect } from 'react';
<link rel="stylesheet" href="/src/App.css" />

function About() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  
const [todos, setTodos] = useState(initTodo)

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));

}, [todos])

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.getItem("todos", JSON.stringify(todos));
  }

  return (
    <div className="app-container" id="App">
      <Todos todos={todos} onDelete={onDelete} />
    </div>
  );
};

export default About;