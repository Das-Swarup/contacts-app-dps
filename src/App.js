
import "./App.css";
import Header from "./MyComponents/Header.js";
import { AddTodo } from './MyComponents/AddTodo.js'
import AllContacts from './MyComponents/AllContacts.js';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

<link rel="stylesheet" href="/src/App.css" />

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.getItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc,num) => {
    console.log("I am Addding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 1
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      num: num,
    }
    setTodos([...todos, myTodo])
    console.log(myTodo);

  }
  const [todos, setTodos] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])
  return (
    <Router>
      <Header title="Your Contacts List" searchBar={false} />

      <Switch>
        <Route exact path="/Home" render={() => {
          return (
            <>
              <AddTodo addTodo={addTodo} />
            </>)
        }}>
        </Route>
        <Route exact path="/all">
          <AllContacts />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
