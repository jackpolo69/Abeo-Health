import React from 'react';
import './CareersSection.css';
import { FaUserMd, FaFileUpload, FaPaperPlane } from 'react-icons/fa';

const CareersSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submission
        alert("Thank you for your application! We will review your credentials and get back to you.");
    };

    return (
        <section className="careers-section" id="careers">
            <div className="careers-container" data-aos="fade-up">
                <div className="careers-header">
                    <h2>Join The Team</h2>
                    <p className="careers-subtitle">Looking for work with our organization? We are always seeking compassionate professionals to join the Abeo family.</p>
                </div>

                <div className="careers-content">
                    <div className="careers-info">
                        <h3>Why Work With Abeo?</h3>
                        <ul>
                            <li><FaUserMd className="career-icon" /> <strong>Meaningful Work:</strong> Make a difference in the lives of seniors and adults every day.</li>
                            <li><FaUserMd className="career-icon" /> <strong>Supportive Culture:</strong> We believe in "High Tech, High Touch" for our staff too.</li>
                            <li><FaUserMd className="career-icon" /> <strong>Growth Opportunities:</strong> Continuous training and career advancement.</li>
                        </ul>
                    </div>

                    <form className="careers-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Your Name" required />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="name@example.com" required />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="(555) 555-5555" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Position of Interest</label>
                            <select required>
                                <option value="">Select a position...</option>
                                <option value="Caregiver">Caregiver / Home Health Aide</option>
                                <option value="Nurse">Registered Nurse (RN) / LVN</option>
                                <option value="Therapist">Physical / Occupational Therapist</option>
                                <option value="Admin">Administrative / Coordination</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Upload Credentials (Resume/certs)</label>
                            <div className="file-upload-wrapper">
                                <input type="file" id="resume-upload" className="file-input" required />
                                <label htmlFor="resume-upload" className="file-label">
                                    <FaFileUpload /> <span>Choose File...</span>
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="btn-career-submit">
                            <FaPaperPlane /> Submit Application
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CareersSection;
