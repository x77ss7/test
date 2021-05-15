import i18n from "i18next";
import LanguageDecorator from "i18next-browser-languagedetector";
import {
    initReactI18next
} from "react-i18next";
import XHR from "i18next-xhr-backend";
import ES from './asset/es.json'
import EN from './asset/en.json'
import JP from "./asset/japan.json";
import KR from "./asset/korea.json";
import RU from "./asset/russia.json";
import AR from "./asset/arabic.json";
import CH from "./asset/chinies.json";
import FR from "./asset/french.json";
// import ES from "./assets/es.json";
i18n
    .use(XHR)
    .use(LanguageDecorator)
    .use(initReactI18next)
    .init({
        resources: {
            en: EN,
            es: ES,
            jp: JP,
            kr: KR,
            ru: RU,
            ar: AR,
            ch: CH,
            fr: FR,
        },
        lng: "en",
        fallbackLng: "en",
    });

export default i18n;