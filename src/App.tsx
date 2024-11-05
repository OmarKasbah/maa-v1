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
import { useTranslation } from 'react-i18next';
import PhotoCollage from "./components/parallax/PhotoCollage.tsx";
import TrailerModal from "./components/modals/TrailerModal"; // Import the modal

function App() {
    const [activeSection, setActiveSection] = useState('what');
    const [isHeaderVisible, setHeaderVisible] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false); // Modal open state

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

        setHeaderVisible(window.scrollY > 0);
    };

    const handleVideoClick = () => setModalOpen(true); // Open modal on video click
    const handleCloseModal = () => setModalOpen(false); // Close modal function

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Header activeSection={activeSection} isVisible={isHeaderVisible} />
            <main>
                <section id="video" className="section">
                    <div className="video-container" onClick={handleVideoClick}>
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

                    <div className="logo-container">
                        {/* Logo Rows */}
                    </div>

                    <motion.div style={{ scale: arrowScale }} className="arrow-container">
                        {/* Arrow Icon */}
                    </motion.div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
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

                    <div className="quote-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <QuoteText />
                    </div>

                    <PhotoCollage />

                </section>

                <PlotSection />
                <SynopsisSection />
                <ProduzentenSection />
                <EnstehungSection />
                <CastSection />
                <StabslisteSection />
                <NächstesProjektSection />

                <section id="contact" className="section">
                    <ContactForm />
                </section>

                <Footer />
            </main>

            {/* Trailer Modal */}
            <TrailerModal open={isModalOpen} handleClose={handleCloseModal} />
        </>
    );
}

const QuoteText: React.FC = () => {
    const { t } = useTranslation();
    const lines = [
        t('quote.text1'),
        t('quote.text2'),
        t('quote.text3'),
        t('quote.text4'),
        t('quote.text5'),
        t('quote.text6'),
    ];

    return (
        <div className="outer-quote">
            <div className="quote-text-container">
                <motion.img
                    src="./assets/up.png"
                    alt="Start quote"
                    className="quote-mark start-quote"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                />

                <div className="quote-text-wrapper">
                    {lines.map((line, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="quote-text"
                        >
                            {line}
                        </motion.p>
                    ))}
                </div>

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
