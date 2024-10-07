import React, { useState, useEffect } from 'react';
import Header from "./components/core/header/Header";
import './App.css';

function App() {
    const [activeSection, setActiveSection] = useState('what');

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                setActiveSection(section.id);
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Header activeSection={activeSection} />
            <main>
                <section id="what" className="section">
                    {/* First section content (video background and title) */}
                    <div className="overlay">
                        <h1>Website Title</h1>
                    </div>
                    <video autoPlay muted loop className="background-video">
                        <source src="/public/assets/sample.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </section>
                <section id="plot" className="section">
                    <h2>Plot Section</h2>
                    <p>Content about the plot...</p>
                </section>

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

            </main>
        </>
    );
}

export default App;
