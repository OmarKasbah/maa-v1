import React from 'react';
import { motion } from 'framer-motion';
import './ProduzentenSection.css';
import {useTranslation} from "react-i18next"; // Ensure this points to your CSS file

const ProduzentenSection: React.FC = () => {
    const { t, i18n } = useTranslation();
    const producerInfo: string[] = [
        t('producers.mike1'),
        t('producers.mike2'),
        t('producers.mike3'),
        t('producers.mike4'),
    ];

    const robertInfo: string[] = [
        t('producers.robert1'),
        t('producers.robert2'),
        t('producers.robert3'),
        t('producers.robert4'),
    ];

    return (
        <section id={t('producers.title').toLowerCase()} className="produzenten-section">
            <div className="title-container">
                <motion.h1
                    initial={{ scale: 0.5, y: 100, opacity: 0 }} // Animation: appear small and grow
                    whileInView={{ scale: 1, y: 0, opacity: 1 }} // Animation: full size and in position
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="produzenten-title"
                >
                    —{t('producers.title')}—
                </motion.h1>
            </div>

            {/* Mike Adler Section */}
            <div className="content-container" style={{ marginBottom: '80px' }}> {/* Increased margin for more space */}
                <motion.img
                    src="./assets/mike.png" // Updated image path
                    alt="Mike Adler"
                    initial={{ opacity: 0, x: -100, scale: 0.8 }} // Start off-screen to the left and small
                    whileInView={{ opacity: 1, x: 0, scale: 1 }} // Move into view and grow to full size
                    transition={{ duration: 0.8, ease: "easeOut" }} // Control animation speed
                    className="producer-image"
                />
                <div className="text-container">
                    <motion.h2
                        className="producer-name"
                        initial={{ opacity: 0, y: 20 }} // Start invisible and slightly lower
                        whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
                        transition={{ duration: 0.5 }} // Single animation for name
                    >
                        Mike Adler
                    </motion.h2>
                    {producerInfo.map((line, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 20 }} // Start invisible and slightly lower
                            whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
                            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered effect for each line
                            className="producer-text"
                        >
                            {line}
                        </motion.p>
                    ))}
                </div>
            </div>

            {/* Robert Gulyas Section */}
            <div className="content-container">
                <div className="text-container">
                    <motion.h2
                        className="producer-name"
                        initial={{ opacity: 0, y: 20 }} // Start invisible and slightly lower
                        whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
                        transition={{ duration: 0.5 }} // Single animation for name
                    >
                        Robert Gulyas
                    </motion.h2>
                    {robertInfo.map((line, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 20 }} // Start invisible and slightly lower
                            whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
                            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered effect for each line
                            className="producer-text"
                        >
                            {line}
                        </motion.p>
                    ))}
                </div>
                <motion.img
                    src="./assets/robert.png" // Updated image path
                    alt="Robert Gulyas"
                    initial={{ opacity: 0, x: 100, scale: 0.8 }} // Start off-screen to the right and small
                    whileInView={{ opacity: 1, x: 0, scale: 1 }} // Move into view and grow to full size
                    transition={{ duration: 0.8, ease: "easeOut" }} // Control animation speed
                    className="producer-image"
                />
            </div>
        </section>
    );
};

export default ProduzentenSection;
