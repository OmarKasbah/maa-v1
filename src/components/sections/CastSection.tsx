import React, {useRef} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './CastSection.css';
import { useTranslation } from "react-i18next";

const CastSection: React.FC = () => {
    const { t } = useTranslation();
    const ref = useRef(null)
    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Adjust these values to control the intensity of the parallax effect
    const imageY = useTransform(scrollY, [0, 1], ["0%", "10%"]); // Adjust for images
    const textY = useTransform(scrollY, [0, 500], ["0%", "10%"]); // Adjust for text

    return (
        <section id="cast" className="cast-section" ref={ref}>
            {/* Title */}
            <div className="title-container">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    style={{ y: textY }} // Apply the parallax effect here
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
                        src="./assets/mike2.png" // Use your actual path to the Mike image
                        alt="Mike"
                        className="cast-image"
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        style={{ y: imageY }} // Apply the parallax effect here
                    />
                    {/* Text container for Mike */}
                    <div className="text-container-cast">
                        <motion.h2
                            className="actor-name"
                            style={{ y: textY }} // Apply the parallax effect here
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Mike Adler
                        </motion.h2>
                        <motion.p
                            className="character-name"
                            style={{ y: textY }} // Apply the parallax effect here
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Samuel Abendroth
                        </motion.p>
                    </div>
                </div>

                {/* Right-side container for Robert */}
                <div className="cast-member robert-member">
                    <motion.img
                        src="./assets/robert2.png" // Use your actual path to the Robert image
                        alt="Robert"
                        className="cast-image"
                        style={{ y: imageY }} // Apply the parallax effect here
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    />
                    {/* Text container for Robert */}
                    <div className="text-container-cast">
                        <motion.h2
                            className="actor-name"
                            style={{ y: textY }} // Apply the parallax effect here
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Robert Gulyás
                        </motion.h2>
                        <motion.p
                            className="character-name"
                            style={{ y: textY }} // Apply the parallax effect here
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Matze
                        </motion.p>
                    </div>
                </div>

                {/* New member container for Maximilian */}
                <div className="cast-member maximilian-member">
                    <motion.img
                        src="./assets/derbe.png" // Use your actual path to the Maximilian image
                        alt="Maximilian"
                        className="cast-image"
                        style={{ y: imageY }} // Apply the parallax effect here
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    />
                    {/* Text container for Maximilian */}
                    <div className="text-container-cast">
                        <motion.h2
                            className="actor-name"
                            style={{ y: textY }} // Apply the parallax effect here
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Derbe
                        </motion.h2>
                        <motion.p
                            className="character-name"
                            style={{ y: textY }} // Apply the parallax effect here
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Derbe
                        </motion.p>
                    </div>
                </div>

                {/* New member container for Inessa */}
                <div className="cast-member inessa-member">
                    <motion.img
                        src="./assets/inessa.png" // Use your actual path to the Inessa image
                        alt="Inessa"
                        className="cast-image"
                        style={{ y: imageY }} // Apply the parallax effect here
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    />
                    {/* Text container for Inessa */}
                    <div className="text-container-cast">
                        <motion.h2
                            className="actor-name"
                            style={{ y: textY }} // Apply the parallax effect here
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Inessa Bonet
                        </motion.h2>
                        <motion.p
                            className="character-name"
                            style={{ y: textY }} // Apply the parallax effect here
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Cateline Areolla
                        </motion.p>
                    </div>
                </div>

                {/* New member container for Jean */}
                <div className="cast-member jean-member">
                    <motion.img
                        src="./assets/jean.png" // Use your actual path to the Jean image
                        alt="Jean"
                        className="cast-image"
                        style={{ y: imageY }} // Apply the parallax effect here
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    />
                    {/* Text container for Jean */}
                    <div className="text-container-cast">
                        <motion.h2
                            className="actor-name"
                            style={{ y: textY }} // Apply the parallax effect here
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Jean-Philippe Adabra
                        </motion.h2>
                        <motion.p
                            className="character-name"
                            style={{ y: textY }} // Apply the parallax effect here
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Rodney
                        </motion.p>
                    </div>
                </div>

                {/* New member container for Sohen */}
                <div className="cast-member sohen-member">
                    <motion.img
                        src="./assets/sohen.png" // Use your actual path to the Sohen image
                        alt="Sohen"
                        className="cast-image"
                        style={{ y: imageY }} // Apply the parallax effect here
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    />
                    {/* Text container for Sohen */}
                    <div className="text-container-cast">
                        <motion.h2
                            className="actor-name"
                            style={{ y: textY }} // Apply the parallax effect here
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Sohen Altan Gol
                        </motion.h2>
                        <motion.p
                            className="character-name"
                            style={{ y: textY }} // Apply the parallax effect here
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Nishaat
                        </motion.p>
                    </div>
                </div>

                {/* New member container for Selam */}
                <div className="cast-member selam-member">
                    <motion.img
                        src="./assets/selam.png" // Use your actual path to the Selam image
                        alt="Selam"
                        className="cast-image"
                        style={{ y: imageY }} // Apply the parallax effect here
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    />
                    {/* Text container for Selam */}
                    <div className="text-container-cast">
                        <motion.h2
                            className="actor-name"
                            style={{ y: textY }} // Apply the parallax effect here
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Selam Tadese
                        </motion.h2>
                        <motion.p
                            className="character-name"
                            style={{ y: textY }} // Apply the parallax effect here
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Komissar Anderson
                        </motion.p>
                    </div>
                </div>
            </div>

            <div className="weiterer-cast-container">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="weiterer-cast-title"
                >
                    {t('cast.secondTitle')}:
                </motion.h1>

                <div className="erste-reihe">
                    <div className="weiterer-cast-member">

                    <motion.h2
                            className="actor-name2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Hugo Grimm
                        </motion.h2>
                        <motion.p
                            className="character-name2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Nico
                        </motion.p>
                    </div>

                    <div className="weiterer-cast-member">
                    <motion.h2
                        className="actor-name2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        Axel Hartwig
                    </motion.h2>
                    <motion.p
                        className="character-name2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        Röttkers
                    </motion.p>
                    </div>

                    <div className="weiterer-cast-member">
                    <motion.h2
                        className="actor-name2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        Maximilian Pekrul
                    </motion.h2>
                    <motion.p
                        className="character-name2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        Thomáz
                    </motion.p>
                    </div>
                    </div>

                    <div className="zweite-reihe">
                        <div className="weiterer-cast-member">

                        <motion.h2
                                className="actor-name2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeInOut' }}
                            >
                                Amanda Höldtke
                            </motion.h2>
                            <motion.p
                                className="character-name2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeInOut' }}
                            >
                                Merima
                            </motion.p>
                        </div>

                        <div className="weiterer-cast-member">

                        <motion.h2
                            className="actor-name2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Michél Stantschew
                        </motion.h2>
                        <motion.p
                            className="character-name2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            Ari
                        </motion.p>
                        </div>
                    </div>

                <div className="dritte-reihe">
                    <div className="weiterer-cast-member">

                    <motion.h2
                        className="actor-name2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        Paul Maas
                    </motion.h2>
                    <motion.p
                        className="character-name2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        Komissar Schmitz
                    </motion.p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CastSection;
