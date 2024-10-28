import React from 'react';
import { motion } from 'framer-motion';
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
    return (
        <section className="photo-collage-section">
            <div className="collage-container">
                {images.map((image, index) => (
                    <motion.img
                        key={index}
                        src={image}
                        alt={`Collage ${index + 1}`}
                        className={`collage-image${index + 1}`}
                        initial={{ y: 0 }}
                        whileScroll={{ y: index % 2 === 0 ? [-500, 500] : [500, -500] }} // Increased movement
                        transition={{ duration: 0.5, ease: "easeInOut" }} // Adjust easing for smoother motion
                    />
                ))}

                {splatter.map((image, index) => (
                    <motion.img
                        key={index}
                        src={image}
                        alt={`Splatter ${index + 1}`}
                        className={`collage-splatter${index + 1}`}
                        initial={{ y: 0 }}
                        whileScroll={{ y: index % 2 === 0 ? [-4000, 4000] : [4000, -4000] }} // Increased movement for splatters
                        transition={{ duration: 0.5, ease: "easeInOut" }} // Adjust easing for smoother motion
                    />
                ))}
            </div>
        </section>
    );
};

export default PhotoCollage;
