import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import VideoModal from './VideoModal';
import './Hero.css';

const Hero = () => {
    const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '', videoId: '' });

    const openVideo = (title, videoId) => {
        setModalConfig({ isOpen: true, title, videoId });
    };

    const closeVideo = () => {
        setModalConfig({ ...modalConfig, isOpen: false });
    };

    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text"
                >
                    <h1>Shaping a New Standard In Community Health</h1>
                    <p className="hero-tagline">"The bridge between the hospital and the home."</p>
                    <p>Compassionate, professional health services for seniors and adults in the comfort of home.</p>
                    <div className="hero-buttons">
                        <Button variant="primary" onClick={() => openVideo('Senior Care Overview', 'senior')}>Senior Care</Button>
                        <Button variant="secondary" onClick={() => openVideo('Adult Care Services', 'adult')}>Adult Care</Button>
                    </div>
                </motion.div>
            </div>
            <div className="hero-visual">
                {/* Placeholder for visual or generated image substitute */}
                <div className="visual-circle"></div>
            </div>

            <VideoModal
                isOpen={modalConfig.isOpen}
                onClose={closeVideo}
                title={modalConfig.title}
                videoId={modalConfig.videoId}
            />
        </section>
    );
};

export default Hero;
