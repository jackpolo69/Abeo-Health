import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import VideoModal from './VideoModal';
import './Hero.css';
import videoSenior from '../assets/video-senior.mov?url'; // Import the video asset
import videoTransport from '../assets/video-transport.mov?url'; // Import the transport video asset

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
                    <p>Professional health services for seniors and adults in the comfort of home.</p>
                    <div className="hero-buttons">
                        <Button variant="primary" onClick={() => openVideo('Senior Care Overview', 'senior', videoSenior)}>Senior Care</Button>
                        <Button variant="secondary" onClick={() => openVideo('Medical Transport Services', 'transport', videoTransport)}>Medical Transport</Button>
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
