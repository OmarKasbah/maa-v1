import React from 'react';
import { motion } from 'framer-motion';
import './SynopsisSection.css';
import {useTranslation} from "react-i18next"; // Ensure this points to your CSS file

const SynopsisSection: React.FC = () => {
    const { t} = useTranslation();
    const lines: string[] = [
        t('synopsis.line1'),
        t('synopsis.line2'),
        t('synopsis.line3'),
        t('synopsis.line4'),
        t('synopsis.line5'),
    ];

    return (
        <section id="synopsis" className="synopsis-section">
            <div className="title-container">
                <motion.h1
                    initial={{ scale: 0.5, y: 100, opacity: 0 }} // Start small and off-screen
                    whileInView={{ scale: 1, y: 0, opacity: 1 }} // Animate to normal size and position
                    transition={{ duration: 0.8, ease: "easeOut" }} // Control speed and easing
                    className="synopsis-title"
                >
                    —Synopsis—
                </motion.h1>
            </div>
            <div className="text-container">
                {lines.map((line, index) => (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }} // Start invisible and slightly lower
                        whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
                        transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered effect for each line
                        className="synopsis-text"
                    >
                        {line}
                    </motion.p>
                ))}
            </div>
        </section>
    );
};

export default SynopsisSection;
