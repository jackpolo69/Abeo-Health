import React from 'react';
import './Mission.css';
import missionCompassion from '../assets/mission-compassion.png';

const Mission = () => {
    return (
        <section className="mission" id="about">
            <div className="mission-container">
                <div className="mission-content">
                    <h2>Our Mission</h2>
                    <p className="mission-statement">"We connect care not as isolated services, but as a continuous, dignified journey."</p>
                    <div className="mission-details">
                        <p>Abeó Health is a <strong>Care Coordination Network</strong> bridging the gap between hospital and home. We ensure no one feels lost by connecting you to the right caregivers and transport with <strong>clarity and compassion</strong>.</p>
                        <p>Our philosophy is <strong>"High Tech, High Touch"</strong>. Technology enables efficiency—<strong>people deliver trust</strong>. We are here to move you forward—safely, respectfully, and together.</p>
                    </div>
                </div>
                <div className="mission-image-wrapper">
                    <img src={missionCompassion} alt="Compassionate Caregiver holding hand of senior" className="mission-image" />
                </div>
            </div>
        </section>
    );
};
export default Mission;
