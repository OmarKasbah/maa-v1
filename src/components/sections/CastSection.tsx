import React from 'react';
import { motion } from 'framer-motion';
import './CastSection.css'; // Ensure this points to your CSS file

const CastSection: React.FC = () => {
    return (
        <section id="cast" className="cast-section">
            {/* Title */}
            <div className="title-container">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="cast-title"
                >
                    —Cast—
                </motion.h1>
            </div>

            {/* Cast container */}
            <div className="cast-container">
                {/* Left-side container for Mike */}
                <div className="cast-member mike-member">
                    <motion.img
                        src="./assets/mike.png" // Use your actual path to the Mike image
                        alt="Mike"
                        className="cast-image"
                        initial={{ opacity: 0, y: -20, scale: 0.8 }} // Slide in from above
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    />
                    {/* Text container for Mike */}
                    <div className="text-container">
                        <motion.h2
                            className="actor-name"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Mike Adler
                        </motion.h2>
                        <motion.p
                            className="character-name"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Samuel Abendroth
                        </motion.p>
                    </div>
                </div>

                {/* New member container for Maximilian */}
                <div className="cast-member maximilian-member">
                    <motion.img
                        src="./assets/maximilian.png" // Use your actual path to the Maximilian image
                        alt="Maximilian"
                        className="cast-image"
                        initial={{ opacity: 0, y: -20, scale: 0.8 }} // Slide in from above
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    />
                    {/* Text container for Maximilian */}
                    <div className="text-container">
                        <motion.h2
                            className="actor-name"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Maximilian Pekrul
                        </motion.h2>
                        <motion.p
                            className="character-name"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Thomáz
                        </motion.p>
                    </div>
                </div>

                {/* Right-side container for Robert */}
                <div className="cast-member robert-member">
                    <motion.img
                        src="./assets/robert.png" // Use your actual path to the Robert image
                        alt="Robert"
                        className="cast-image"
                        initial={{ opacity: 0, y: -20, scale: 0.8 }} // Slide in from above
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    />
                    {/* Text container for Robert */}
                    <div className="text-container">
                        <motion.h2
                            className="actor-name"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Robert Gulyás
                        </motion.h2>
                        <motion.p
                            className="character-name"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Matze
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CastSection;
