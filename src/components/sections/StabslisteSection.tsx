import React from 'react';
import './StabslisteSection.css';
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

const StabslisteSection: React.FC = () => {
    const { t, } = useTranslation();
    const crewList = [
        { position: t('staff.ceo'), names: ['Mike Adler'] },
        { position: t('staff.producer'), names: ['Mike Adler'] },
        { position: t('staff.coProducer'), names: ['Robert Gulyàs'] },
        { position: t('staff.productionManagement'), names: ['Mike Adler'] },
        { position: t('staff.productionHead'), names: ['Mike Adler'] },
        { position: t('staff.productionAssistant'), names: ['Robert Gulyàs'] },
        { position: t('staff.filmManagement'), names: ['Mike Adler'] },
        { position: t('staff.personalAssistant'), names: ['Tanja Adler'] },
        { position: t('staff.contractManagement'), names: ['Mike Adler', 'Robert Gulyàs'] },
        { position: t('staff.scriptWriter'), names: ['Mike Adler'] },
        { position: t('staff.casting'), names: ['Mike Adler', 'Robert Gulyàs'] },
        { position: t('staff.direction'), names: ['Mike Adler'] },
        { position: t('staff.directorAssistant'), names: [`Jane Chirwa ${t('staff.first')} ${t('staff.movieBlock')}`, `Dominik Watin ${t('staff.second')} ${t('staff.movieBlock')}`, `Melissa Budweg Duarte ${t('staff.fourth')} ${t('staff.movieBlock')}`] },
        { position: t('staff.cinematographer'), names: ['Jan-Patrick Kluger'] },
        { position: t('staff.cameraAssistant'), names: [`Elias Müller ${t('staff.first')} - ${t('staff.fourth')} ${t('staff.movieBlock')}`, `Jeremy Le Bèhèrec ${t('staff.first')} - ${t('staff.third')} ${t('staff.movieBlock')}`, `Ayse Alacakaptan ${t('staff.third')} - ${t('staff.fourth')} ${t('staff.movieBlock')}`] },
        { position: t('staff.recordingManagement'), names: [`Cihan ${t('staff.first')} ${t('staff.movieBlock')}`, `Max Pellny ${t('staff.second')} - ${t('staff.third')} ${t('staff.movieBlock')}`] },
        { position: t('staff.dit'), names: [`Alexandr Razgon ${t('staff.first')}, ${t('staff.third')} & ${t('staff.fourth')} ${t('staff.movieBlock')}`, `Bertrand Glosset ${t('staff.second')} ${t('staff.movieBlock')}`] },
        { position: t('staff.seniorLightingTechnician'), names: [`Jens Thurmann ${t('staff.first')} & ${t('staff.second')} ${t('staff.movieBlock')}`, `Paul Maaß ${t('staff.third')} & ${t('staff.fourth')} ${t('staff.movieBlock')}`] },
        { position: t('staff.lightingTechnician'), names: [`Sebastian Zinburg ${t('staff.first')} & ${t('staff.second')} ${t('staff.movieBlock')}`, `Anne Stubenrauch ${t('staff.first')} ${t('staff.movieBlock')}`, `Marius Achilles ${t('staff.second')} ${t('staff.movieBlock')}`] },
        { position: t('staff.cameraStaging'), names: [`Dustin John ${t('staff.first')} & ${t('staff.second')} ${t('staff.movieBlock')}`] },
        { position: t('staff.cameraStagingAssistant'), names: [`Michael Klares ${t('staff.first')} ${t('staff.movieBlock')}`] },
        { position: t('staff.costumes'), names: ['Kerstin Viot'] },
        { position: t('staff.equipment'), names: ['Reni Schwarz'] },
        { position: t('staff.ost'), names: ['Peter Malcher'] },
        { position: t('staff.soundEngineer'), names: [`Susy Wehrli ${t('staff.first')} ${t('staff.movieBlock')}`, `Savvas Kontou ${t('staff.third')} ${t('staff.movieBlock')}`, `Marc Reinkober ${t('staff.first')} & ${t('staff.second')} ${t('staff.movieBlock')}`, `Matthias Rupp ${t('staff.fourth')} ${t('staff.movieBlock')}`] },
        { position: t('staff.soundEngineerAssistant'), names: [`Aaron Ghantus ${t('staff.first')} & ${t('staff.second')} ${t('staff.movieBlock')}`, `Mirna Stanic ${t('staff.second')} ${t('staff.movieBlock')}`, `Gregory Oke ${t('staff.second')} ${t('staff.movieBlock')}`] },
        { position: t('staff.setPhotographer'), names: ['Danilo Ferrera'] },
        { position: t('staff.makeUpArtist'), names: [`Viriginia Rully Damayanti ${t('staff.first')} - ${t('staff.fourth')} ${t('staff.movieBlock')}`, `Nadja Jeberin ${t('staff.first')} & ${t('staff.second')} ${t('staff.movieBlock')}`, `Francisca Lopez ${t('staff.third')} ${t('staff.movieBlock')}`] },
        { position: t('staff.setDriver'), names: ['Daniel Rahn'] },
        { position: t('staff.setAssistant'), names: [`Ikem ${t('staff.first')} & ${t('staff.second')} ${t('staff.movieBlock')}`, `Marcel Kaschik ${t('staff.fourth')} ${t('staff.movieBlock')}`] },
        { position: t('staff.catering'), names: [`Schraders ${t('staff.first')}, ${t('staff.second')} & ${t('staff.third')} ${t('staff.movieBlock')}`, `Lisa Schneider ${t('staff.second')} ${t('staff.movieBlock')}`, `Iris Reiter ${t('staff.fourth')} ${t('staff.movieBlock')}`] },
    ];

    return (
        <section id={t('header.sections.crew').toLowerCase()} className="stabsliste-section">
            <div className="title-container-stabs">
                <motion.h1
                    initial={{ scale: 0.5, y: 100, opacity: 0 }}
                    whileInView={{ scale: 1, y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="stabsliste-title"
                >
                    —{t('staff.title')}—
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
