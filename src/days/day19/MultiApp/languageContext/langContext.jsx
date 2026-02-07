import { createContext, useState } from "react";

const LangContext = createContext();

export const LangProvider = ({children}) => {
    // Store all your translations
    const translations = {
        en: {
            login: "Login",
            logout: "Logout",
            welcome: "Welcome",
            dark: "Dark Mode",
            light: "Light Mode",
            toggleTheme: "Toggle Theme",
            currentTheme: "Current Theme"
        },
        fr: {
            login: "Connexion",
            logout: "Déconnexion",
            welcome: "Bienvenue",
            dark: "Mode Sombre",
            light: "Mode Lumineux",
            toggleTheme: "Changer de Thème",
            currentTheme: "Thème Actuel"
        },
        sp: {
            login: "Iniciar sesión",
            logout: "Cerrar sesión",
            welcome: "Bienvenido",
            dark: "Modo Oscuro",
            light: "Modo Claro",
            toggleTheme: "Cambiar Tema",
            currentTheme: "Tema Actual"
        }
    };


    const [currentLang, setCurrentLang] = useState('en');

    const changeLang = (langCode) => {
        setCurrentLang(langCode);
    };

   
    const t = translations[currentLang];

    return (
        <LangContext.Provider value={{ t, currentLang, changeLang, translations }}>
            {children}
        </LangContext.Provider>
    );
}

export default LangContext;