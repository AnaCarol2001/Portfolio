import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLng from "./locales/en/en.json";
import ptLng from "./locales/pt/pt.json";

const resources = {
  en: {
    translation: enLng,
  },
  pt: {
    translation: ptLng,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: "pt",
});

i18n.on("languageChanged", (lng) => {
  document.documentElement.setAttribute("lang", lng);
});

export default i18n;
