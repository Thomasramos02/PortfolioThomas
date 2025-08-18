import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/translationEn.json";
import translationPT from "./locales/translationPt.json";

const resources = {
  en: { translation: translationEN },
  pt: { translation: translationPT }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt", // idioma padrão
    fallbackLng: "en", // caso não ache tradução em pt
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
