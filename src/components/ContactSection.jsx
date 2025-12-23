import React from 'react';
import './ContactSection.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <section className="contact-section" id="contact-form">
            <div className="contact-container" data-aos="zoom-in">
                <div className="contact-info">
                    <h2>Start Your Care Journey</h2>
                    <p>Ready to experience the Abeo difference? Schedule your free consultation today. We're here to guide you every step of the way.</p>

                    <div className="contact-methods">
                        <div className="contact-item">
                            <FaPhone size={24} />
                            <span>(949) 987-4605</span>
                        </div>
                        <div className="contact-item">
                            <FaEnvelope size={24} />
                            <span>info@abeo.health</span>
                        </div>
                        <div className="contact-item">
                            <FaMapMarkerAlt size={24} />
                            <span>Proudly Serving Our Community</span>
                        </div>
                    </div>
                </div>

                <form className="contact-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label>Service Needed</label>
                        <select>
                            <option>General Inquiry</option>
                            <option>Abeo Registry (Caregivers)</option>
                            <option>Abeo Ride (Transportation)</option>
                            <option>Abeo Living (Placement)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea rows="4" placeholder="How can we help?" required></textarea>
                    </div>
                    <button type="submit" className="btn-submit">Request Free Consultation</button>
                    <p className="form-note" style={{ fontSize: '0.8rem', marginTop: '1rem', color: '#666', textAlign: 'center' }}>
                        Your information is secure. We will contact you within 24 hours.
                    </p>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
