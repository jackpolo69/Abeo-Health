import React from 'react';
import './WhyChooseUs.css';
import { FaHeart, FaNotesMedical, FaUserMd } from 'react-icons/fa';

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us" id="why-us">
            <div className="why-header" data-aos="fade-up">
                <h2>Why Choose Abeo Health?</h2>
                <p>We are a movement redefining community care.</p>
            </div>

            <div className="why-grid">
                <div className="why-card" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon-wrapper">
                        <FaUserMd size={40} />
                    </div>
                    <h3>Culturally Competent Care</h3>
                    <p>We pride ourselves on hiring diverse, qualified professionals who understand the unique cultural needs of our community. We speak your language—literally and figuratively.</p>
                </div>

                <div className="why-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon-wrapper">
                        <FaNotesMedical size={40} />
                    </div>
                    <h3>High Tech, High Touch</h3>
                    <p>We blend advanced healthcare technology with deep human compassion. Our tech ensures you're safe; our touch ensures you're loved.</p>
                </div>

                <div className="why-card" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon-wrapper">
                        <FaHeart size={40} />
                    </div>
                    <h3>Total Care Ecosystem</h3>
                    <p>From <strong>Abeó Ride</strong> transportation to <strong>Abeó Living</strong> placement, we cover every step of your journey. No gaps, just continuous support.</p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
