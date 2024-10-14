import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './PlotSection.css'; // Ensure this points to your CSS file

const PlotSection: React.FC = () => {
    // Get scrollY progress
    const { scrollYProgress } = useScroll();

    // Text lines to display
    const lines: string[] = [
        "Once upon a time in a faraway land,",
        "there lived a brave young girl.",
        "She embarked on an adventure",
        "to discover the secrets of her kingdom.",
        "Along the way, she faced many challenges,",
        "but her determination never wavered.",
        "In the end, she uncovered a truth",
        "that changed her life forever."
    ];

    return (
        <section id="plot" className="plot-section">
            <div className="text-container">
                {lines.map((line, index) => {
                    // Calculate start and end points for opacity
                    const start = (index * 0.5) / lines.length; // Start showing at each line's index, but at half the height
                    const end = ((index + 1) * 0.5) / lines.length; // Finish showing just before the next line starts, at half the height

                    // Use scrollYProgress to determine opacity
                    const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

                    return (
                        <motion.p
                            key={index}
                            style={{ opacity }}
                            transition={{ duration: 0.5 }} // Animation duration
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
