import React from 'react'
import {Link} from 'react-router-dom';
<link rel="stylesheet" href="/src/App.css" />


export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/Home">{props.title}</Link>
                
                <div className="navbar" id="">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="btn-header" aria-current="page" to="/Home">Add Contacts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn-header" to="all">All Contacts</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

