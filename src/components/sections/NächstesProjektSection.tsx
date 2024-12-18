import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './NächstesProjektSection.css';
import {useTranslation} from "react-i18next";

// Updated image paths with .png extensions
const images = [
    './assets/next1.png',
    './assets/next2.png',
    './assets/next3.png',
    './assets/next4.png',
    './assets/next5.png',
    './assets/next6.png',
];


const NächstesProjektSection: React.FC = () => {
    const { t} = useTranslation();

    const projectDescription = [
        t('nextProject.line1'),
        t('nextProject.line2'),
        t('nextProject.line3'),
        t('nextProject.line4'),
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-slide function to change the image after every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <section id={t('nextProject.title').toLowerCase()} className="naechstes-projekt-section">
            <div className="title-container-next">
                <motion.h1
                    initial={{ scale: 0.5, y: 100, opacity: 0 }}
                    whileInView={{ scale: 1, y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="naechstes-projekt-title"
                >
                    {t('nextProject.title')}
                </motion.h1>
            </div>
            <div className="content-container">
                {/* Image Carousel */}
                <div className="image-container">
                    <button onClick={handlePrev} className="carousel-button left">←</button>
                    <motion.img
                        key={currentImageIndex} // Ensure smooth transition with key prop
                        src={images[currentImageIndex]}
                        alt="Projekt"
                        className="project-image"
                        initial={{ opacity: 0 }} // Fade out initial
                        animate={{ opacity: 1 }} // Fade in
                        transition={{ duration: 2, ease: 'easeInOut' }} // Smooth and slower transition
                    />
                    <button onClick={handleNext} className="carousel-button right">→</button>
                </div>
                {/* Text Container */}
                <div className="text-container">
                    <motion.h2 className="project-name">Deso Dogg</motion.h2>
                    {projectDescription.map((line, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 20 }} // Start invisible and slightly lower
                            whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
                            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered effect for each line
                            className="project-description"
                        >
                            {line}
                        </motion.p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NächstesProjektSection;
