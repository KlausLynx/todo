import { createContext, useState } from "react";
// Exercise 4: Settings Panel
// Build an app settings context:

// Store: fontSize ("small", "medium", "large")
// Store: language ("en", "es", "fr")
// Store: notifications (boolean)
// Create a Settings panel to change these
// Apply settings across the app

const SettingContext = createContext();

const SettingProvider = ({ children }) => {
    const [settings, setSettings] = useState({
        fontSize: "medium",
        language: "en",
        notifications: true
    });

    const changeFontSize = (fontSize) => {
        setSettings({...settings, fontSize: fontSize});
    };
    
    const changeLanguage = (language) => {
        setSettings({...settings, language: language});
    };

    const changeNotifications = (notifications) => {
        setSettings({...settings, notifications: notifications});
    };

    return (
        <SettingContext.Provider value={{ fontSize: settings.fontSize, language: settings.language, notifications: settings.notifications, changeFontSize, changeLanguage, changeNotifications }}>
            {children}
        </SettingContext.Provider>
    )
}


export {SettingProvider}
export default SettingContext;