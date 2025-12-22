import React from 'react';
import './Mission.css';
import missionCompassion from '../assets/mission-compassion-diverse.png';

const Mission = () => {
    return (
        <section className="mission" id="about">
            <div className="mission-container">
                <div className="mission-content">
                    <h2>Our Mission</h2>
                    <p className="mission-statement">"Abeo Health is a <strong>movement</strong>—redefining how care connects, and moves people forward."</p>
                    <div className="mission-details">
                        <p>We are building the future where healthcare isn't a fragmented series of events, but a continuous, dignified journey. Our philosophy is <strong>"High Tech, High Touch"</strong>.</p>
                        <p><strong>Abeó</strong> (pronounced <em>ah-beh-OH</em>) means both <strong>"Safe Passage"</strong> (Latin) and <strong>"Bringer of Happiness"</strong> (Yoruba). We are the capable guide in your healthcare journey.</p>
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
