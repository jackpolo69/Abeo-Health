import React from 'react';
import './Footer.css';
import logoFull from '../assets/logo-full.png';

const Footer = () => {
    return (
        <footer className="footer-container" id="contact">
            <div className="footer-content">
                <div className="footer-brand">
                    <img src={logoFull} alt="Abeo Health" className="footer-logo" height="250" />
                    <p>Compassionate care directly to you.</p>
                </div>
                <div className="footer-links">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#services">Caregiver & Personal Care</a></li>
                        <li><a href="#staffing">Nurse Staffing</a></li>
                        <li><a href="#transport">Transportation</a></li>
                        <li><a href="#placement">Senior Placement</a></li>
                        <li><a href="#coordination">Care Coordination</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Email: info@abeo.health</p>
                    <p>Phone: (949) 987-4605</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Abeo Health. All rights reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;
