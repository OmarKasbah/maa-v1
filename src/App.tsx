import React, { useState, useEffect } from 'react';
import Header from "./components/core/header/Header";
import './App.css';
import ContactForm from "./components/modals/ContactForm.tsx";
import Footer from "./components/core/footer/Footer.tsx";
import PlotSection from "./components/sections/PlotSection.tsx";
import { motion, useScroll, useTransform } from 'framer-motion';
import SynopsisSection from "./components/sections/SynopsisSection.tsx";
import ProduzentenSection from "./components/sections/ProduzentenSection.tsx";

function App() {
    const [activeSection, setActiveSection] = useState('what');
    const [isHeaderVisible, setHeaderVisible] = useState(false); // State for header visibility

    // Get scrollY progress for the arrow animation
    const { scrollY } = useScroll();
    const arrowScale = useTransform(scrollY, [700, 900], [1, 0.1]); // Scale down from 1 to 0.1

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                setActiveSection(section.id);
            }
        });

        // Check if scrolled down to show the header
        if (window.scrollY > 0) {
            setHeaderVisible(true);
        } else {
            setHeaderVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Header activeSection={activeSection} isVisible={isHeaderVisible} />
            <main>
                <section id="video" className="section">
                    <div className="video-container">
                        {/* Video background with centered logo */}
                        <video autoPlay muted loop className="background-video">
                            <source src="/public/assets/sample.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="overlay">
                            <img src="/public/assets/logo.png" alt="Logo" className="logo" />
                        </div>
                    </div>

                    {/* Logo container for logos under the video */}
                    <div className="logo-container">
                        <div className="logo-row">
                            <img src="/public/assets/logo1.png" alt="Logo 1" className="small-logo" />
                            <img src="/public/assets/logo2.png" alt="Logo 2" className="small-logo" />
                            <img src="/public/assets/logo3.png" alt="Logo 3" className="small-logo" />
                            <img src="/public/assets/logo4.png" alt="Logo 4" className="small-logo" />
                        </div>
                        <div className="logo-row">
                            <img src="/public/assets/logo5.png" alt="Logo 5" className="small-logo" />
                            <img src="/public/assets/logo6.png" alt="Logo 6" className="small-logo" />
                            <img src="/public/assets/logo7.png" alt="Logo 7" className="small-logo" />
                        </div>
                    </div>

                    {/* Downward arrow icon */}
                    <motion.div
                        style={{ scale: arrowScale }} // Use transformed scale for the arrow
                        className="arrow-container"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FF56FF"
                            strokeWidth="1" // Very thin line
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ width: '16px', height: 'auto', transform: 'scaleY(8)', marginBottom: '20px', marginTop: '10px'}} // Extremely tall
                        >
                            <line x1="12" y1="2" x2="12" y2="24"></line>
                            <polyline points="8 15 12 20 16 15"></polyline>
                        </svg>
                    </motion.div>

                    {/* Centered Image */}
                    <div className="image-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <img
                            src="/public/assets/zitat.png"
                            alt="Centered"
                            style={{
                                width: '60%', // Make it responsive
                                maxWidth: '640px', // Limit max width
                                height: 'auto', // Maintain aspect ratio
                            }}
                        />
                    </div>

                    {/* Animated Quote Text */}
                    <div className="quote-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <QuoteText />
                    </div>
                </section>

                <PlotSection /> {/* Replace the plot section with the new component */}

                <SynopsisSection />

                <ProduzentenSection />

                <section id="entstehung" className="section">
                    <h2>Entstehung Section</h2>
                    <p>Content about the entstehung...</p>
                </section>

                <section id="cast" className="section">
                    <h2>Cast Section</h2>
                    <p>Content about the cast...</p>
                </section>

                <section id="stabsliste" className="section">
                    <h2>Stabsliste Section</h2>
                    <p>Content about the stabsliste...</p>
                </section>

                {/* Contact Form Section */}
                <section id="contact" className="section">
                    <ContactForm />
                </section>

                <Footer />
            </main>
        </>
    );
}

const QuoteText: React.FC = () => {
    // Text lines to display
    const lines: string[] = [
        "... wir wollten eigentlich",
        "nur ein paar Szenen",
        "für Roberts Showreel",
        "drehen; wir konnten ja",
        "nicht wissen, dass daraus",
        "ein Spielfilm wird ..."
    ];

    return (
        <div className="outer-quote">
            <div className="quote-text-container">
                {/* Flexbox container with the start quote and text */}
                <motion.img
                    src="/public/assets/up.png" // Replace with your start-quote image path
                    alt="Start quote"
                    className="quote-mark start-quote"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                />

                {/* Wrapping the text content */}
                <div className="quote-text-wrapper">
                    {lines.map((line, index) => {
                        const delay = index * 0.1; // Delay for staggered effect
                        return (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 20 }} // Start invisible and slightly lower
                                whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
                                transition={{ duration: 0.5, delay }} // Animation duration with staggered delay
                                className="quote-text"
                            >
                                {line}
                            </motion.p>
                        );
                    })}
                </div>

                {/* End quote mark on the right side of the last line */}
                <motion.img
                    src="/public/assets/down.png" // Replace with your end-quote image path
                    alt="End quote"
                    className="quote-mark end-quote"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: lines.length * 0.1 }}
                />
            </div>
        </div>
    );
};

export default App;
