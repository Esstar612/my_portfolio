import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaMoon, FaSun, FaHome, FaCode, FaProjectDiagram, FaUser } from 'react-icons/fa';

const Navbar = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    useEffect(() => {
        if (darkTheme) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, [darkTheme]);

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">
                        <FaHome /> Home
                    </Link>
                </li>
                <li>
                    <Link to="/open-source">
                        <FaCode /> Open Source
                    </Link>
                </li>
                <li>
                    <Link to="/projects">
                        <FaProjectDiagram /> Projects
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <FaUser /> About Me
                    </Link>
                </li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme}>
                {darkTheme ? <FaMoon /> : <FaSun />}
            </button>
        </nav>
    );
};

export default Navbar;
