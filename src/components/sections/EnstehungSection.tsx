import React from 'react';
import { motion } from 'framer-motion';
import './EntstehungSection.css'; // Link to your CSS file

const EntstehungSection: React.FC = () => {
    return (
        <section id="entstehung" className="entstehung-section">
            {/* Title */}
            <div className="title-container">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="entstehung-title"
                >
                    —Entstehung—
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
                        Dezember 2017: Der ursprüngliche Gedanke war, vier Szenen für Robert Gulyas neues Showreel zu drehen. Nachdem Mike ihm zugesagt hatte, die Regie zu übernehmen, hat er die schon fertig geschriebenen Szenen verworfen und angefangen komplett neues Material zu schreiben. Entstanden ist eine 20-seitige Drehbuchfassung für einen etwa zehnminütigen Kurzfilm. Im Verlauf der nächsten sieben Wochen hat Mike seine erste Fassung regelmäßig überarbeitet und gemerkt, dass das Buch mehr Potenzial hat als anfangs erwartet.
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
                    Er begann eine Welt um die drei Protagonisten zu kreieren, aus den Charaktersilhouetten dreidimensionale Figuren zu schaffen, deren Verhältnis zueinander und deren Konflikte zu etablieren. Als Mike gefragt wurde, wie das Buch entstanden ist, antwortete er:
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
                    „Wir sind selbst ein bisschen überrascht, wir wollten eigentlich nur ein paar Szenen für Roberts Showreel drehen; wir konnten ja nicht wissen, dass daraus ein Spielfilm wird …“.
                </motion.p>
            </div>
        </section>
    );
};

export default EntstehungSection;
