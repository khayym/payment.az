import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en';
import az from './translations/az';
import ru from './translations/ru'
import { getUserLangMMKV, setUserLangMMKV } from '../utils/mmvk';


const LANGUAGES = {
    en,
    az,
    ru
};



const LANGUAGE_DETECTOR = {
    type: 'languageDetector',
    async: true,
    detect: callback => {
        getUserLangMMKV().then(lang => {
            if (lang) {
                callback(lang);
            }
            else callback('az')
        })
    },
    init: () => { },
    cacheUserLanguage: language => {
        setUserLangMMKV(language);
    }
};

i18n
    // detect language
    .use(LANGUAGE_DETECTOR)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // set options
    .init({
        compatibilityJSON: 'v3',
        resources: LANGUAGES,
        react: {
            useSuspense: false
        },
        interpolation: {
            escapeValue: false
        },
        defaultNS: 'common'
    });