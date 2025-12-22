import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logoFull from '../assets/logo-full.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} `}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logoFull} alt="Abeo Health" height="400" />
                </div>
                <ul className="nav-links">
                    <li><a href="#services">Caregiver & Personal Care</a></li>
                    <li><a href="#staffing">Nurse Staffing</a></li>
                    <li><a href="#transport">Transportation</a></li>
                    <li><a href="#placement">Senior Placement</a></li>
                    <li><a href="#coordination">Care Coordination</a></li>
                    <li><a href="#contact" className="btn-contact">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
