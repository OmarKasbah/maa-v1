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

const PhotoCollage: React.FC = () => {
    const { scrollY } = useScroll();

    // Define parallax effect
    const translateYValues = useTransform(scrollY, [0, 1000], [0, -100]); // Moves images up by 100px over 1000px of scroll

    return (
        <section className="photo-collage-section">
            <div className="collage-container">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="collage-item"
                        style={{ translateY: translateYValues }} // Apply the same parallax to all images
                    >
                        <img src={image} alt={`Collage ${index + 1}`} className="collage-image" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PhotoCollage;
