import * as i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        backend: {
            loadPath: './locales/{{lng}}.json', // Load from public/locales
        },
        interpolation: {
            escapeValue: false, // React already escapes values
        },
    });

export default i18n;
