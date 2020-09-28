import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar  navbar-expand navbar-dark fixed-top bg-dark">
                    <a href="/contacts" className="navbar-brand">
                        Address Book
                    </a>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <Link to={"/contacts"} className="nav-link">
                            Contacts
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to={"/add"} className="nav-link">
                            Add Contact
                        </Link>
                        </li>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;
