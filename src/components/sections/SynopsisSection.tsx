import React from 'react';
import { motion } from 'framer-motion';
import './SynopsisSection.css'; // Ensure this points to your CSS file

const SynopsisSection: React.FC = () => {
    // Text lines for the synopsis
    const lines: string[] = [
        "Die Handlung ist im Nightlife des heutigen Berlins eingebettet. Heimathafen für Jungunternehmer, Partygänger, Szenemenschen, Künstler und gescheiterte Existenzen.",
        "Vor diesem Hintergrund treffen sich die beiden Freunde Nishaat und Matze und verbringen eine exzessive Nacht mit der atemberaubenden Modedesignerin Cateline Arreola, eine fast schon amazonenhafte Femme Fatale, die sich von nichts und niemandem kontrollieren lässt.",
        "Am darauffolgenden Morgen wird Cateline tot in ihrem Loft aufgefunden.",
        "Nun steht die brennende Frage im Raum: Wer hat Cateline Arreola getötet?",
        "Kommissare Anderson, Schmitz und Abendroth machen sich an die Aufgabe, den Täter zu ermitteln."
    ];

    return (
        <section id="synopsis" className="synopsis-section">
            <div className="title-container">
                <motion.h1
                    initial={{ scale: 0.5, y: 100, opacity: 0 }} // Start small and off-screen
                    whileInView={{ scale: 1, y: 0, opacity: 1 }} // Animate to normal size and position
                    transition={{ duration: 0.8, ease: "easeOut" }} // Control speed and easing
                    className="synopsis-title"
                >
                    —Synopsis—
                </motion.h1>
            </div>
            <div className="text-container">
                {lines.map((line, index) => (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }} // Start invisible and slightly lower
                        whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
                        transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered effect for each line
                        className="synopsis-text"
                    >
                        {line}
                    </motion.p>
                ))}
            </div>
        </section>
    );
};

export default SynopsisSection;
