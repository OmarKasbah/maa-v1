import React from 'react';
import './StabslisteSection.css';
import {motion} from "framer-motion";

const StabslisteSection: React.FC = () => {
    const crewList = [
        { position: 'Geschäftsführer', names: ['Mike Adler'] },
        { position: 'Produzent', names: ['Mike Adler'] },
        { position: 'Co-Produzent', names: ['Robert Gulyàs'] },
        { position: 'Herstellungsleitung', names: ['Mike Adler'] },
        { position: 'Produktionsleitung', names: ['Mike Adler'] },
        { position: 'Produktionsassistent', names: ['Robert Gulyàs'] },
        { position: 'Filmgeschäftsführung', names: ['Mike Adler'] },
        { position: 'Personal Assistant', names: ['Tanja Adler'] },
        { position: 'Vertragsmanagement', names: ['Mike Adler', 'Robert Gulyàs'] },
        { position: 'Drehbuchautor', names: ['Mike Adler'] },
        { position: 'Casting', names: ['Mike Adler', 'Robert Gulyàs'] },
        { position: 'Regie', names: ['Mike Adler'] },
        { position: 'Regieassistent/-in', names: ['Jane Chirwa 1. Drehblock', 'Dominik Watin 2. Drehblock', 'Melissa Budweg Duarte 4. Drehblock'] },
        { position: 'Kameramann', names: ['Jan-Patrick Kluger'] },
        { position: 'Kamerassistent', names: ['Elias Müller 1. - 4. Drehblock', 'Jeremy Le Bèhèrec 1. - 3. Drehblock', 'Ayse Alacakaptan 3. - 4. Drehblock'] },
        { position: 'Aufnahmeleitung', names: ['Cihan 1. Drehblock', 'Max Pellny 2. - 3. Drehblock'] },
        { position: 'DIT', names: ['Alexandr Razgon 1., 3. und 4. Drehblock', 'Bertrand Glosset 2. Drehblock'] },
        { position: 'Oberbeleuchter', names: ['Jens Thurmann 1. und 2. Drehblock', 'Paul Maaß 3. und 4. Drehblock'] },
        { position: 'Beleuchter', names: ['Sebastian Zinburg 1. und 2. Drehblock', 'Anne Stubenrauch 1. Drehblock', 'Marius Achilles 2. Drehblock'] },
        { position: 'Kamerabühne', names: ['Dustin John 1. und 2. Drehblock'] },
        { position: 'Assistent Kamerabühne', names: ['Michael Klares 1. Drehblock'] },
        { position: 'Kostüm', names: ['Kerstin Viot'] },
        { position: 'Ausstattung', names: ['Reni Schwarz'] },
        { position: 'Original Soundtrack', names: ['Peter Malcher'] },
        { position: 'Tonmeister', names: ['Susy Wehrli 1. Drehblock', 'Savvas Kontou 3. Drehblock', 'Marc Reinkober 1. und 2. Drehblock', 'Matthias Rupp 4. Drehblock'] },
        { position: 'Tonassistent', names: ['Aaron Ghantus 1. und 2. Drehblock', 'Mirna Stanic 2. Drehblock', 'Gregory Oke 2. Drehblock'] },
        { position: 'Set-Fotograf', names: ['Danilo Ferrera'] },
        { position: 'Make up Artist', names: ['Viriginia Rully Damayanti 1. - 4. Drehblock', 'Nadja Jeberin 1. und 2. Drehblock', 'Francisca Lopez 3. Drehblock'] },
        { position: 'Setfahrer', names: ['Daniel Rahn'] },
        { position: 'Set-Assistent', names: ['Ikem 1. und 2. Drehblock', 'Marcel Kaschik 4. Drehblock'] },
        { position: 'Catering', names: ['Schraders 1., 2. und 3. Drehblock', 'Lisa Schneider 2. Drehblock', 'Iris Reiter 4. Drehblock'] },
    ];

    return (
        <section id="stabsliste" className="stabsliste-section">
            <div className="title-container-stabs">
                <motion.h1
                    initial={{ scale: 0.5, y: 100, opacity: 0 }} // Start small and off-screen
                    whileInView={{ scale: 1, y: 0, opacity: 1 }} // Animate to normal size and position
                    transition={{ duration: 0.8, ease: "easeOut" }} // Control speed and easing
                    className="stabsliste-title"
                >
                    —Stabsliste—
                </motion.h1>
            </div>
            <div className="text-container-stabs">
                <div className="crew-list">
                    {crewList.map((crew, index) => (
                        <div key={index} className="crew-item">
                            <span className="position-text">{crew.position}</span>
                            <div className="names-container">
                                {crew.names.map((name, i) => (
                                    <span key={i} className="name-text">{name}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StabslisteSection;
