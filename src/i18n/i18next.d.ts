// i18next.d.ts
declare module 'i18next' {
    interface CustomTypeOptions {
        // Set the default namespace for your translations
        defaultNS: 'translation';
        resources: {
            translation: {
                // Header
                'header.trailer': string;
                'header.sections.plot': string;
                'header.sections.synopsis': string;
                'header.sections.producers': string;
                'header.sections.creation': string;
                'header.sections.cast': string;
                'header.sections.crew': string;
                'header.sections.nextProject': string;

                // Quote
                'quote.text1': string;
                'quote.text2': string;
                'quote.text3': string;
                'quote.text4': string;
                'quote.text5': string;
                'quote.text6': string;
                'quote.text7': string;

                // Film description
                'film_description.line1': string;
                'film_description.line2': string;
                'film_description.line3': string;
                'film_description.line4': string;
                'film_description.line5': string;
                'film_description.line6': string;
                'film_description.line7': string;
                'film_description.line8': string;

                // Synopsis
                'synopsis.line1': string;
                'synopsis.line2': string;
                'synopsis.line3': string;
                'synopsis.line4': string;
                'synopsis.line5': string;

                // Producers
                'producers.title': string;
                'producers.mike1': string;
                'producers.mike2': string;
                'producers.mike3': string;
                'producers.mike4': string;
                'producers.robert1': string;
                'producers.robert2': string;
                'producers.robert3': string;
                'producers.robert4': string;

                // Creation
                'creation.title': string;
                'creation.line1': string;
                'creation.line2': string;
                'creation.line3': string;

                // Cast
                'cast.secondTitle': string;

                // Staff
                'staff.title': string;
                'staff.ceo': string;
                'staff.producer': string;
                'staff.coProducer': string;
                'staff.productionManagement': string;
                'staff.productionHead': string;
                'staff.productionAssistant': string;
                'staff.filmManagement': string;
                'staff.personalAssistant': string;
                'staff.contractManagement': string;
                'staff.scriptWriter': string;
                'staff.casting': string;
                'staff.direction': string;
                'staff.directorAssistant': string;
                'staff.cinematographer': string;
                'staff.cameraAssistant': string;
                'staff.recordingManagement': string;
                'staff.dit': string;
                'staff.seniorLightingTechnician': string;
                'staff.lightingTechnician': string;
                'staff.cameraStaging': string;
                'staff.cameraStagingAssistant': string;
                'staff.costumes': string;
                'staff.equipment': string;
                'staff.ost': string;
                'staff.soundEngineer': string;
                'staff.soundEngineerAssistant': string;
                'staff.setPhotographer': string;
                'staff.makeUpArtist': string;
                'staff.setDriver': string;
                'staff.setAssistant': string;
                'staff.catering': string;
                'staff.first': string;
                'staff.second': string;
                'staff.third': string;
                'staff.fourth': string;
                'staff.fifth': string;
                'staff.movieBlock': string;

                // Next Project
                'nextProject.title': string;
                'nextProject.line1': string;
                'nextProject.line2': string;
                'nextProject.line3': string;
                'nextProject.line4': string;

                // Footer
                'footer.information': string;
                'footer.imprint': string;
                'footer.rights': string;
                'footer.ceo': string;
            };
        };
    }
}
