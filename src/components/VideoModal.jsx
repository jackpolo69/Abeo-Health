import React, { useRef, useEffect } from 'react';
import { FaTimes, FaPlay } from 'react-icons/fa';
import './VideoModal.css';

const VideoModal = ({ isOpen, onClose, title, videoId, imageSrc }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (isOpen && videoRef.current) {
            // Attempt to play responsibly
            // Browser policy requires user interaction for unmuted autoplay.
            // Since this modal opens on click, it usually works.
            const playVideo = async () => {
                try {
                    videoRef.current.muted = false; // Ensure unmuted
                    videoRef.current.volume = 1.0;
                    await videoRef.current.play();
                } catch (err) {
                    console.log("Autoplay failed:", err);
                    // Fallback if browser blocks unmuted autoplay
                    // videoRef.current.muted = true;
                    // videoRef.current.play();
                }
            };
            playVideo();
        }
    }, [isOpen, imageSrc]);

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
                    {/* If videoSrc is a file path (contains .mov or .mp4), render video tag */}
                    {imageSrc && (imageSrc.includes('.mov') || imageSrc.includes('.mp4')) ? (
                        <div className="video-wrapper">
                            <video
                                ref={videoRef}
                                src={imageSrc}
                                controls
                                // autoPlay // Handled by useEffect
                                className="real-video-player"
                            // style handled in CSS
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    ) : (
                        /* Simulated Video Player UI for static images */
                        <div className="video-placeholder" style={imageSrc ? { backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
                            <div className="play-button-overlay">
                                <FaPlay className="play-icon" />
                            </div>
                            {/* Only show text if no image, or make it subtle */}
                            {!imageSrc && <p>Simulated Video Playback</p>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
