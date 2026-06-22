import { createContext,useState } from 'react';

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
});

export { ThemeContext };

export default function ThemeProvider ({children}) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => ( prev === 'light' ? 'dark' : 'light' ));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};