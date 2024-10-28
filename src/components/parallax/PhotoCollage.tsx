import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './PhotoCollage.css';

const images = [
    './assets/collage1.png',
    './assets/collage2.png',
    './assets/collage3.png',
    './assets/collage4.png',
    './assets/collage5.png',
    './assets/collage6.png',
    './assets/collage7.png',
];

const splatter = [
    './assets/splatter1.png',
    './assets/splatter2.png',
    './assets/splatter3.png',
    './assets/splatter4.png',
];

const PhotoCollage: React.FC = () => {
    // Get the scroll position
    const { scrollY } = useScroll();

    return (
        <section className="photo-collage-section">
            <div className="collage-container">
                {images.map((image, index) => {
                    // Transform the scroll position to create a parallax effect
                    const y = useTransform(scrollY, [0, 1000], index % 2 === 0 ? [-50, 50] : [50, -50]);

                    return (
                        <motion.img
                            key={index}
                            src={image}
                            alt={`Collage ${index + 1}`}
                            className={`collage-image${index + 1}`}
                            style={{ y }} // Apply the transform directly
                            initial={{ y: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }} // Adjust easing for smoother motion
                        />
                    );
                })}

                {splatter.map((image, index) => {
                    // Transform the scroll position for splatters
                    const y = useTransform(scrollY, [0, 1000], index % 2 === 0 ? [-40, 40] : [40, -40]);

                    return (
                        <motion.img
                            key={index}
                            src={image}
                            alt={`Splatter ${index + 1}`}
                            className={`collage-splatter${index + 1}`}
                            style={{ y }} // Apply the transform directly
                            initial={{ y: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }} // Adjust easing for smoother motion
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default PhotoCollage;
