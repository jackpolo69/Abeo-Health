import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import VideoModal from './VideoModal';
import './Hero.css';

const Hero = () => {
    const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '', videoId: '', imageSrc: '' });

    const openVideo = (title, videoId, imageSrc) => {
        setModalConfig({ isOpen: true, title, videoId, imageSrc });
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
                        <Button variant="primary" onClick={() => openVideo('Senior Care Overview', 'senior', 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop')}>Senior Care</Button>
                        <Button variant="secondary" onClick={() => openVideo('Medical Transport Services', 'transport', 'https://images.unsplash.com/photo-1516574187841-693083f69382?q=80&w=800&auto=format&fit=crop')}>Medical Transport</Button>
                    </div>
                </motion.div>
            </div>
            <div className="hero-visual">
                <div className="visual-wrapper">
                    <div className="blob blob-orange"></div>
                    <div className="blob blob-green"></div>
                </div>
            </div>

            <VideoModal
                isOpen={modalConfig.isOpen}
                onClose={closeVideo}
                title={modalConfig.title}
                videoId={modalConfig.videoId}
                imageSrc={modalConfig.imageSrc}
            />
        </section>
    );
};

export default Hero;
