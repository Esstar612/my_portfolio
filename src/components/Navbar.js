import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaMoon, FaSun, FaHome, FaCode, FaProjectDiagram, FaUser } from 'react-icons/fa';

const Navbar = () => {
    const [darkTheme, setDarkTheme] = useState(true);

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
                    <Link to="/" data-tooltip="Home">
                        <FaHome />
                    </Link>
                </li>
                <li>
                    <Link to="/open-source" data-tooltip="Open Source">
                        <FaCode />
                    </Link>
                </li>
                <li>
                    <Link to="/projects" data-tooltip="Projects">
                        <FaProjectDiagram />
                    </Link>
                </li>
                <li>
                    <Link to="/about" data-tooltip="About Me">
                        <FaUser />
                    </Link>
                </li>
            </ul>
            <button
                className="theme-toggle"
                onClick={toggleTheme}
                data-tooltip={darkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
                {darkTheme ? <FaMoon /> : <FaSun />}
            </button>
        </nav>
    );
};

export default Navbar;
