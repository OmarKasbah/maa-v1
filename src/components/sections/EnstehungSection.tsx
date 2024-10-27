import React from 'react';
import { motion } from 'framer-motion';
import './EntstehungSection.css';
import {useTranslation} from "react-i18next"; // Link to your CSS file

const EntstehungSection: React.FC = () => {
    const { t, i18n } = useTranslation();
    return (
        <section id={t('creation.title').toLowerCase()} className="entstehung-section">
            {/* Title */}
            <div className="title-container">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="entstehung-title"
                >
                    —{t('creation.title')}—
                </motion.h1>
            </div>

            {/* Container for the upright image and its text */}
            <div className="image-text-container">
                {/* Left-side upright image */}
                <motion.img
                    src="./assets/hoch.png" // Replace with your actual image path
                    alt="Upright Image"
                    className="upright-image"
                    initial={{ opacity: 0, x: 100, scale: 0.8 }} // Animate from the right
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                />

                {/* Text block for upright image */}
                <div className="text-block">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="entstehung-text"
                    >
                        {t('creation.line1')}
                    </motion.p>
                </div>
            </div>

            {/* Container for the landscape image and its text */}
            <div className="landscape-container">
                <motion.img
                    src="./assets/quer.png" // Replace with your actual image path
                    alt="Landscape Image"
                    className="landscape-image"
                    initial={{ opacity: 0, x: -100, scale: 0.8 }} // Animate from the left
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                />

                {/* Text block for landscape image */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="landscape-text"
                >
                    {t('creation.line2')}
                </motion.p>
            </div>

            {/* Final text under the images */}
            <div className="final-text-container">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="final-text"
                >
                    {t('creation.line3')}
                </motion.p>
            </div>
        </section>
    );
};

export default EntstehungSection;
