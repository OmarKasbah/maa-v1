import React, { useState, useEffect } from 'react';
import Header from "./components/core/header/Header";
import './App.css';
import ContactForm from "./components/modals/ContactForm.tsx";
import Footer from "./components/core/footer/Footer.tsx";
import PlotSection from "./components/sections/PlotSection.tsx";
import { motion, useScroll, useTransform } from 'framer-motion';
import SynopsisSection from "./components/sections/SynopsisSection.tsx";
import ProduzentenSection from "./components/sections/ProduzentenSection.tsx";
import EnstehungSection from "./components/sections/EnstehungSection.tsx";
import CastSection from "./components/sections/CastSection.tsx";
import StabslisteSection from "./components/sections/StabslisteSection.tsx";
import NächstesProjektSection from "./components/sections/NächstesProjektSection.tsx";

function App() {
    const [activeSection, setActiveSection] = useState('what');
    const [isHeaderVisible, setHeaderVisible] = useState(false);

    // Get scrollY progress for the arrow animation
    const { scrollY } = useScroll();
    const arrowScale = useTransform(scrollY, [700, 900], [1, 0.1]);

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                setActiveSection(section.id);
            }
        });

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
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="background-video"
                            preload="auto"
                        >
                            <source src="./assets/sample.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="overlay">
                            <img src="./assets/logo.png" alt="Logo" className="logo" />
                        </div>
                    </div>

                    {/* Logo container for logos under the video */}
                    <div className="logo-container">
                        <div className="logo-row">
                            <img src="./assets/logo1.PNG" alt="Logo 1" className="small-logo" />
                            <img src="./assets/logo2.png" alt="Logo 2" className="small-logo" />
                            <img src="./assets/logo3.png" alt="Logo 3" className="small-logo" />
                            <img src="./assets/logo4.png" alt="Logo 4" className="small-logo" />
                        </div>
                        <div className="logo-row">
                            <img src="./assets/logo5.png" alt="Logo 5" className="small-logo" />
                            <img src="./assets/logo6.png" alt="Logo 6" className="small-logo" />
                            <img src="./assets/logo7.png" alt="Logo 7" className="small-logo" />
                        </div>
                    </div>

                    {/* Downward arrow icon */}
                    <motion.div
                        style={{ scale: arrowScale }}
                        className="arrow-container"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FF56FF"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ width: '16px', height: 'auto', transform: 'scaleY(8)', marginBottom: '20px', marginTop: '10px' }}
                        >
                            <line x1="12" y1="2" x2="12" y2="24"></line>
                            <polyline points="8 15 12 20 16 15"></polyline>
                        </svg>
                    </motion.div>

                    {/* Centered Image */}
                    <div className="image-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <img
                            src="./assets/zitat.png"
                            alt="Centered"
                            style={{
                                width: '60%',
                                maxWidth: '640px',
                                height: 'auto',
                            }}
                        />
                    </div>

                    {/* Animated Quote Text */}
                    <div className="quote-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <QuoteText />
                    </div>
                </section>

                <PlotSection />
                <SynopsisSection />
                <ProduzentenSection />
                <EnstehungSection />
                <CastSection />
                <StabslisteSection />
                <NächstesProjektSection />

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
                    src="./assets/up.png"
                    alt="Start quote"
                    className="quote-mark start-quote"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                />

                <div className="quote-text-wrapper">
                    {lines.map((line, index) => {
                        const delay = index * 0.1;
                        return (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay }}
                                className="quote-text"
                            >
                                {line}
                            </motion.p>
                        );
                    })}
                </div>

                {/* End quote mark */}
                <motion.img
                    src="./assets/down.png"
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
