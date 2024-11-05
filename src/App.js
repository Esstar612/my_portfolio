import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import OpenSource from './pages/OpenSource';
import './App.css';

const App = () => {
    return (
        <Router basename="/my_portfolio">  {/* Set basename here */}
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/open-source" element={<OpenSource />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
