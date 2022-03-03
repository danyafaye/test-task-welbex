import React from "react";
import './Navbar.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="app-navbar">
            <img src="https://img.icons8.com/ios/500/vertical-line.png" alt="" className="app-line-right"/>
            <NavLink to="/app-main" className="app-main">Main page</NavLink>
            <NavLink to="/app-todo" className="app-todo">Todo list</NavLink>
        </nav>
    )
}

export default Navbar;