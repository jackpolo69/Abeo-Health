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

    const handleLinkClick = (e, id, blockPosition = 'start') => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const navbarHeight = 80; // Approximate height of navbar

            // Calculate absolute position
            const elementPosition = element.getBoundingClientRect().top;
            const absoluteElementTop = elementPosition + window.pageYOffset;

            // Standard offset for all links (just below navbar). 
            // Sections natively manage their own 100vh centering.
            const offsetPosition = absoluteElementTop - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} `}>
            <div className="navbar-container">
                <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
                    <img src={logoFull} alt="Abeo Health" className="nav-logo-img" />
                </div>
                <ul className="nav-links">
                    <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about', 'center')}>Our Mission</a></li>
                    <li><a href="#why-us" onClick={(e) => handleLinkClick(e, 'why-us', 'center')}>Why</a></li>
                    <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services', 'center')}>Our Services</a></li>
                    <li><a href="#reviews" onClick={(e) => handleLinkClick(e, 'reviews', 'center')}>Reviews</a></li>
                    <li><a href="#careers" onClick={(e) => handleLinkClick(e, 'careers', 'center')}>Careers</a></li>
                    <li><a href="#contact-form" className="btn-contact" onClick={(e) => handleLinkClick(e, 'contact-form', 'center')}>Contact Us</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
