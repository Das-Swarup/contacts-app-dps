
import { Contacts } from "./Contacts";
import React, { useState, useEffect } from 'react';
<link rel="stylesheet" href="/src/App.css" />

function AllContacts() {
  let initContact;
  if (localStorage.getItem("contacts") === null) {
    initContact = [];
  }
  else {
    initContact = JSON.parse(localStorage.getItem("contacts"));
  }

  
const [contacts, setContacts] = useState(initContact)

useEffect(() => {
  localStorage.setItem("contacts", JSON.stringify(contacts));

}, [contacts])

const onDelete = (contact) => {
  console.log("I am ondelete of contact", contact);
  setContacts(contacts.filter((e) => {
    return e !== contact;
   }));
  localStorage.getItem("contacts", JSON.stringify(contacts));
  }
  return (
    <div className="app-container" id="App">
      <Contacts contacts={contacts} onDelete={onDelete} />
    </div>
  );
};

export default AllContacts;