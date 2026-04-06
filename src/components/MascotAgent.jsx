import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { abeoKnowledge } from '../data/abeo_knowledge';
import './MascotAgent.css';

const MascotAgent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'ai', text: "Hello! I'm O, your Abeo Orb and personal health ambassador. I'm here to guide you through our care coordination network. How can I help you move forward today?" }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [rotation, setRotation] = useState(0);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const generateResponse = (input) => {
        const text = input.toLowerCase();

        // 1. Mission / Philosophy
        if (text.includes('mission') || text.includes('philosophy') || text.includes('who are you') || text.includes('about')) {
            return `${abeoKnowledge.company.mission} Our philosophy is ${abeoKnowledge.company.philosophy} We focus on ${abeoKnowledge.company.coreValues.join(', ')}.`;
        }

        // 2. Services
        const service = abeoKnowledge.services.find(s =>
            s.keywords.some(k => text.includes(k))
        );
        if (service) {
            return `I'd love to tell you more about ${service.name}. ${service.description} Is there something specific you'd like to know about it?`;
        }
        if (text.includes('services') || text.includes('what do you do') || text.includes('help')) {
            const serviceNames = abeoKnowledge.services.map(s => s.name).join(', ');
            return `Abeo Health provides a Total Care Ecosystem. Our key services include: ${serviceNames}. Which one would you like to explore deeper?`;
        }

        // 3. Careers
        if (text.includes('job') || text.includes('career') || text.includes('work') || text.includes('join')) {
            return `We are always looking for compassionate professionals! ${abeoKnowledge.careers.whyJoin} Our culture is ${abeoKnowledge.careers.culture} We often have positions for ${abeoKnowledge.careers.positions.join(', ')}. You can find the 'Join The Team' section on our website to apply!`;
        }

        // 4. Qualification
        if (text.includes('qualified') || text.includes('nurse') || text.includes('staff')) {
            return abeoKnowledge.faq.find(f => f.q.includes('qualified')).a;
        }

        // Default
        return "I'm not sure I fully understand, but I'd love to help! Are you interested in our Care Registry, Medical Rides (Abeo Ride), Senior Placement (Abeo Living), or our Circle of Coordination? You can also ask me about our mission!";
    };

    const handleSend = () => {
        console.log("O: Attempting to send message:", inputText);
        if (!inputText.trim()) return;

        const userMessage = { type: 'user', text: inputText };
        setMessages(prev => [...prev, userMessage]);
        setInputText('');
        setIsTyping(true);

        // Random spin on command
        setRotation(prev => prev + (Math.random() > 0.5 ? 360 : -360));

        setTimeout(() => {
            setIsTyping(false);
            const aiResponse = {
                type: 'ai',
                text: generateResponse(userMessage.text)
            };
            setMessages(prev => [...prev, aiResponse]);
        }, 1500);
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
        setRotation(prev => prev + 360);
    };

    return (
        <div className="mascot-container">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chat-bubble"
                        initial={{ opacity: 0, scale: 0.5, y: 50, x: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 50, x: 50 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <div className="chat-header">
                            <h3>O - Abeo Orb</h3>
                            <button className="close-btn" onClick={() => setIsOpen(false)}>&times;</button>
                        </div>
                        <div className="chat-messages">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`message ${msg.type}`}>
                                    {msg.text}
                                </div>
                            ))}
                            {isTyping && (
                                <div className="typing-indicator">O is thinking...</div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                        <div className="chat-input-area">
                            <input
                                type="text"
                                className="chat-input"
                                placeholder="Ask about our services or mission..."
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            />
                            <button className="send-btn" onClick={handleSend}>
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                className="mascot-wrapper"
                style={{
                    clipPath: 'url(#mascotClip)'
                }}
                animate={{
                    y: isOpen ? [0, -10, 0] : [0, -25, 0],
                    rotate: rotation,
                    scale: isTyping ? [1, 1.05, 1] : 1
                }}
                transition={{
                    y: {
                        duration: isOpen ? 2 : 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    rotate: { duration: 0.8, ease: "backOut" },
                    scale: { duration: 0.5, repeat: isTyping ? Infinity : 0 }
                }}
                onClick={toggleChat}
                title="I'm here to help!"
            >
                <img
                    src="/mascot_pro_final.png"
                    alt="O - The Abeo Orb"
                    className="mascot-image"
                />

                {/* Embedded SVG Clip Path for perfect transparency */}
                <svg width="0" height="0">
                    <defs>
                        <clipPath id="mascotClip" clipPathUnits="objectBoundingBox">
                            {/* The sphere body */}
                            <circle cx="0.5" cy="0.6" r="0.4" />
                            {/* The orange leaf - approximated with a path */}
                            <path d="M 0.5,0.22 C 0.5,0.22 0.75,0.0 0.92,0.05 C 0.95,0.15 0.7,0.25 0.55,0.22 Z" />
                        </clipPath>
                    </defs>
                </svg>
            </motion.div>
        </div>
    );
};

export default MascotAgent;
