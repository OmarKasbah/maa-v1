import React from 'react';
import { motion } from 'framer-motion';
import './ProduzentenSection.css'; // Ensure this points to your CSS file

const ProduzentenSection: React.FC = () => {
    // Text for the producers
    const producerInfo: string[] = [
        "Mike Adler ist der Produzent, Drehbuchautor und Regisseur von Pink Puzzle, darüber hinaus spielt er auch eine kleine Rolle als Kommissar Samuel Abendroth im Film.",
        "Mike Reinhard Peter Adler ist 1978 in West-Berlin geboren und aufgewachsen. Mit Anfang zwanzig war er als Rapper (Mike Fiction) und Bandmitglied der Rap-Koalition „Kaos Loge“ aktiv.",
        "2001 entschied er sich Schauspieler zu werden, und absolvierte 2003 - 2007 sein Schauspielstudium an der „Konrad Wolf“ Hochschule für Film und Fernsehen in Potsdam Babelsberg. Es folgten verschiedene Theater-, TV- und Filmengagements. Im Januar 2018 schrieb er die erste Drehbuchfassung zu PINK PUZZLE und somit auch sein erstes Drehbuch überhaupt. Noch im selben Monat entschied Mike das Projekt umzusetzen. DIE FRAGE WAR NUR WIE??",
        "„Lass uns das Projekt nicht totquatschen, lass es uns einfach machen.“"
    ];

    const robertInfo: string[] = [
        "Robert Gulyás spielt die Hauptrolle in Pink Puzzle und ist unter anderem auch als Co-Produzent tätig.",
        "Robert Gulyás ist 1983 in Finow geboren und lebte von seinem 1. Lebensjahr – 12. Lebensjahr in Ungarn (Budapest und Szigetszentmiklos). 1995 zog er mit seiner Familie nach Berlin und lebt seit dem dort. Schon seit Kindheit an, war er ein begeisterter Fan vom Medium Film und TV, schlug jedoch zuerst den Berufsweg ein.",
        "Er machte von 2001 – 2003 eine kaufmännische Ausbildung. Ab 2007 absolvierte er dann eine private Schauspielausbildung in dem AcUng Studio Cologne und ab 2009 – 2011 bei „Martz & Walker Meisner AcUng Berlin“.",
        "Es folgten verschiedene Engagements für Abschluss-, Kunst- und Independentfilme. Seit dem Januar 2018 ist er mit dem Projekt Pink Puzzle als Co-Produzent für die Eagle Eye Production GmbH mit tätig und sammelt seit dem viele Erfahrungen auch hinter der Kamera."
    ];

    return (
        <section id="produzenten" className="produzenten-section">
            <div className="title-container">
                <motion.h1
                    initial={{ scale: 0.5, y: 100, opacity: 0 }} // Animation: appear small and grow
                    whileInView={{ scale: 1, y: 0, opacity: 1 }} // Animation: full size and in position
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="produzenten-title"
                >
                    —Produzenten—
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
