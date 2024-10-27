import React from 'react';
import { motion } from 'framer-motion';
import './PlotSection.css';
import {useTranslation} from "react-i18next"; // Ensure this points to your CSS file

const PlotSection: React.FC = () => {
    const { t, i18n } = useTranslation();
    const lines: (string | null)[] = [
        t('film_description.line1'),
        t('film_description.line2'),
        t('film_description.line3'),
        null, // This will create an empty line
        t('film_description.line4'),
        t('film_description.line5'),
        t('film_description.line6'),
        t('film_description.line7'),
        t('film_description.line8'),
    ];

    return (
        <section id="plot" className="plot-section">
            <div className="plot-title-container">
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }} // Start with smaller size and invisible
                    whileInView={{ scale: 1, opacity: 1 }} // Animate to full size and visible
                    transition={{ duration: 0.8, ease: 'easeInOut' }} // Adjust duration and easing
                    className="plot-title"
                >
                    —Plot—
                </motion.h1>
            </div>
            <div className="plot-text-container">
                {lines.map((line, index) => {
                    const delay = index * 0.1; // Delay for staggered effect

                    if (line === null) {
                        return (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 10 }} // Start invisible and slightly lower
                                whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
                                transition={{ duration: 0.3, delay }} // Animation duration with staggered delay
                                style={{ height: '1rem', margin: '0' }} // Empty line with height
                            />
                        );
                    }

                    return (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 20 }} // Start invisible and slightly lower
                            whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
                            transition={{ duration: 0.5, delay }} // Animation duration with staggered delay
                            className="plot-text"
                        >
                            {line}
                        </motion.p>
                    );
                })}
            </div>
        </section>
    );
};

export default PlotSection;
