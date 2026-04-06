import React from 'react';
import './Services.css';

// Inline Icons
const Heart = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
);
const UserPlus = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <line x1="20" y1="8" x2="20" y2="14"></line>
        <line x1="23" y1="11" x2="17" y2="11"></line>
    </svg>
);
const Truck = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
);
const Home = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
);

const ServiceCard = ({ title, icon: Icon, description, benefits, link }) => (
    <div className="service-card" id={title.toLowerCase().split(' ')[0]}>
        <div className="icon-wrapper">
            <Icon size={40} color="var(--color-teal)" />
        </div>
        <div className="card-content">
            <h3>{title}</h3>
            <p className="service-description">{description}</p>
            <ul className="service-benefits">
                {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                ))}
            </ul>
        </div>
        <a href={link} className="service-cta">
            <span>Inquire Now</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
        </a>
    </div>
);

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="services-container">
                <div className="services-header">
                    <h2>Our Services</h2>
                    <p>Comprehensive solutions designed for individuals, families, and healthcare facilities.</p>
                </div>
                <div className="services-grid">
                    <ServiceCard
                        title="Abeó Registry"
                        icon={UserPlus}
                        description="Connecting you with highly qualified nursing professionals."
                        benefits={[
                            "Private Duty Nursing in-home",
                            "Facility Staffing Solutions",
                            "Certified CNA, LVN, & RN placements"
                        ]}
                        link="#contact-form"
                    />
                    <ServiceCard
                        title="Abeó Ride"
                        icon={Truck}
                        description="Safe, reliable non-emergency medical transportation."
                        benefits={[
                            "Powered by Uber Health technology",
                            "Safe hospital discharges & appointments",
                            "Door-to-door driver assistance"
                        ]}
                        link="#contact-form"
                    />
                    <ServiceCard
                        title="Abeó Living"
                        icon={Home}
                        description="Expert guidance in finding the right senior care."
                        benefits={[
                            "Assisted living & memory care matching",
                            "Family-guided facility tours",
                            "Navigating licensing and care fees"
                        ]}
                        link="#contact-form"
                    />
                    <ServiceCard
                        title="Abeó Circle"
                        icon={Heart}
                        description="A family dashboard and support system to guide your journey."
                        benefits={[
                            "Dedicated Care Coordination app",
                            "Real-time family communication",
                            "Comprehensive health support system"
                        ]}
                        link="#contact-form"
                    />
                </div>
            </div>
        </section>
    );
};
export default Services;
