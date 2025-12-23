import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import CareersSection from './components/CareersSection';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Mission />
            <WhyChooseUs />
            <Services />
            <Testimonials />
            <ContactSection />
            <CareersSection />
            <Footer />
        </div>
    );
}

export default App;
