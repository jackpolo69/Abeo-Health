import React from 'react';
import './Testimonials.css';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
    return (
        <section className="testimonials" id="reviews">
            <div className="testimonials-header" data-aos="fade-up">
                <h2>What Families Say</h2>
                <p>Trusted by families across our community.</p>
            </div>

            <div className="testimonials-grid">
                <div className="testimonial-card" data-aos="fade-up" data-aos-delay="100">
                    <div className="quote-icon">"</div>
                    <div className="stars">
                        {[...Array(5)].map((_, i) => <FaStar key={i} size={20} fill="#FFD700" stroke="#FFD700" />)}
                    </div>
                    <p className="testimonial-text">
                        "The Abeo team didn't just provide care; they became family. Their cultural understanding and warmth made my mother feel completely perfect at home."
                    </p>
                    <p className="testimonial-author">- Sarah J.</p>
                </div>

                <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
                    <div className="quote-icon">"</div>
                    <div className="stars">
                        {[...Array(5)].map((_, i) => <FaStar key={i} size={20} fill="#FFD700" stroke="#FFD700" />)}
                    </div>
                    <p className="testimonial-text">
                        "Finding reliable transportation for dialysis was a nightmare until Abeo Ride. Now, we never worry. The drivers are kind, punctual, and safe."
                    </p>
                    <p className="testimonial-author">- Michael T.</p>
                </div>

                <div className="testimonial-card" data-aos="fade-up" data-aos-delay="300">
                    <div className="quote-icon">"</div>
                    <div className="stars">
                        {[...Array(5)].map((_, i) => <FaStar key={i} size={20} fill="#FFD700" stroke="#FFD700" />)}
                    </div>
                    <p className="testimonial-text">
                        "We were overwhelmed with where to place Dad. Abeo Living guided us to the perfect facility within a week. I can't thank them enough."
                    </p>
                    <p className="testimonial-author">- Michelle R.</p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
