import React from 'react';
import { FaTimes, FaPlay } from 'react-icons/fa';
import './VideoModal.css';

const VideoModal = ({ isOpen, onClose, title, videoId, imageSrc }) => {
    if (!isOpen) return null;

    // Simulate different video content based on ID
    // In a real app, this would be an iframe or video tag source
    // For now, we use a styled placeholder that looks like a paused video player

    return (
        <div className="video-modal-overlay" onClick={onClose}>
            <div className="video-modal-content" onClick={e => e.stopPropagation()}>
                <button className="video-modal-close" onClick={onClose}>
                    <FaTimes />
                </button>

                <h3 className="video-modal-title">{title}</h3>

                <div className="video-player-container">
                    {/* Simulated Video Player UI */}
                    <div className="video-placeholder" style={imageSrc ? { backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
                        <div className="play-button-overlay">
                            <FaPlay className="play-icon" />
                        </div>
                        {/* Only show text if no image, or make it subtle */}
                        {!imageSrc && <p>Simulated Video Playback</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
