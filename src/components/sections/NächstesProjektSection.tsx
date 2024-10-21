import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './NächstesProjektSection.css';

// Updated image paths with .png extensions
const images = [
    './assets/next1.png',
    './assets/next2.png',
    './assets/next3.png',
    './assets/next4.png',
    './assets/next5.png',
    './assets/next6.png',
];

// Project description lines for animation
const projectDescription = [
    `My "Deso Dogg" is intended as a 6-part per season (three Seasons) fictional TV-series with an episode length of 60 minutes. It is a crime/family/social drama that tells the story of Denis Cuspert a.k.a. "Deso Dogg", his best friend "Inan" and his little brother "Jamaine Cuspert."`,
    `The story revolves around the three protagonists, which begins in Berlin in the 80s and extends through the 90s to the mid-2000s. In this time window, we tell the story of the childhood of the three boys, the criminal descent of the three young people, up to Denis' later radicalization and the collateral damage it causes to family and friends. Our story ends after Denis Cuspert leaves Germany to become a jihadist and the family remains behind in Germany with the social pain.`,
    `We are working on that project closely with Deso Dogg's (aka Denis Cuspert) little brother Jamaine Cuspert (who was called “little Deso”), Deso’s best friend Inan, and a wide range of associates, which includes other family members, friends, German Rappers, Ex-Gangsters, journalists, police, and convicted and rehabilitated ex-human traffickers, who all crossed paths with Deso. My production company has exclusive rights and personal access to the people and information.`,
    `We want to place the origins of Denis, Jamaine, and Inan in a larger social perspective context. In this environment, three rascals from the working class develop into serious criminals, while Denis Cuspert goes one step further and becomes radicalized in Salafist circles.`,
];

const NächstesProjektSection: React.FC = () => {
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
        <section id="nächstes projekt" className="naechstes-projekt-section">
            <div className="title-container-next">
                <motion.h1
                    initial={{ scale: 0.5, y: 100, opacity: 0 }}
                    whileInView={{ scale: 1, y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="naechstes-projekt-title"
                >
                    Nächstes Projekt
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
