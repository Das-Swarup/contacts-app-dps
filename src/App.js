
import "./App.css";
import Header from "./MyComponents/Header.js";
import { AddContact } from './MyComponents/AddContact.js'
import AllContacts from './MyComponents/AllContacts.js';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

<link rel="stylesheet" href="/src/App.css" />

function App() {
  let initContact;
  if (localStorage.getItem("contacts") === null) {
    initContact = [];
  }
  else {
    initContact = JSON.parse(localStorage.getItem("contacts"));
  }
  const addContact = (title, desc,num) => {
    let sno;
    if (contacts.length === 0) {
      sno = 1
    }
    else {
      sno = contacts[contacts.length - 1].sno + 1;
    }
    const myContact = {
      sno: sno,
      title: title,
      desc: desc,
      num: num,
    }
    setContacts([...contacts, myContact])
    console.log(myContact);

  }
  const [contacts, setContacts] = useState(initContact)

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));

  }, [contacts])
  return (
    <Router>
      <Header title="Your Contacts List" searchBar={false} />

      <Switch>
        <Route exact path="/Home" render={() => {
          return (
            <>
              <AddContact addContact={addContact} />
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
