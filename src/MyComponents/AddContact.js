
import React, { useState } from 'react';
<link rel="stylesheet" href="/src/App.css" />
export const AddContact = (props) => {
    const[title,setTitle]=useState("");
    const [mail, setMail] = useState("");
    const [num, setNum] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title|| !num){
            alert("Name or Number cannot be blank")
        }
        else{
        props.addContact(title,mail,num)
        setTitle("");
        setMail("");
        setNum("");
        }
    }
    return (
        <div className="app-container">
        <div className="container my-3">
            <h3 className="text-center title-text">Add a Contact</h3>
            <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label head-text">Name</label>
                        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>   
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mail" className="form-label head-text">E-mail</label>
                        <input type="text" value={mail} onChange={(e)=>{setMail(e.target.value)}} className="form-control" id="desc"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="num" className="form-label head-text">Number</label>
                        <input type="value" value={num} onChange={(e)=>{setNum(e.target.value)}} className="form-control" id="num" />
                    </div>
                        
                <button type="submit" className="add-btn">Add</button>
            </form>
         </div>
         </div>
     )
}
