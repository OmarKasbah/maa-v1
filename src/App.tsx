import React, { useState, useEffect } from 'react';
import Header from "./components/core/header/Header";
import './App.css';
import ContactForm from "./components/modals/ContactForm.tsx";
import Footer from "./components/core/footer/Footer.tsx";
import PlotSection from "./components/sections/PlotSection.tsx";

function App() {
    const [activeSection, setActiveSection] = useState('what');
    const [isHeaderVisible, setHeaderVisible] = useState(false); // State for header visibility

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
                </section>

                <PlotSection /> {/* Replace the plot section with the new component */}


                <section id="synopsis" className="section">
                    <h2>Synopsis Section</h2>
                    <p>Content about the synopsis...</p>
                </section>

                <section id="regie" className="section">
                    <h2>Regie Section</h2>
                    <p>Content about the regie...</p>
                </section>

                <section id="produzenten" className="section">
                    <h2>Produzenten Section</h2>
                    <p>Content about the produzenten...</p>
                </section>

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

export default App;
