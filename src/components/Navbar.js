import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/open-source">Open Source</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About Me</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
