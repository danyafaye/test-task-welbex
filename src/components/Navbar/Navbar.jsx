import React from "react";
import './Navbar.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="app-navbar">
            <NavLink to="/app-main" className="app-main" activeClassName="app-active">Main page</NavLink>
            <NavLink to="/app-todo" className="app-todo" activeClassName="app-active">Todo list</NavLink>
        </nav>
    )
}

export default Navbar;