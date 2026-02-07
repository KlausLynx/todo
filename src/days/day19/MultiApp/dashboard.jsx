import { useTheme } from "./themeContext";
import { useAuth } from "./authContext";
import { useLang } from "./languageContext";

const ThemeSwitcher = () => {

    const {theme, toggleTheme} = useTheme();
    const {user, login, logout} = useAuth();
    const {t,changeLang} = useLang();

     const themeStyles = {
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        margin: '20px'
     }

     return (
         <div style={themeStyles}>
            <h1>{t.currentTheme}</h1>
            <p>{t.currentTheme}: {theme === 'light' ? t.light : t.dark}</p>
            <button onClick={toggleTheme} style={{
                backgroundColor: theme === 'light' ? '#333' : '#fff',
                color: theme === 'light' ? '#fff' : '#333',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer' 
            }}>
                {t.toggleTheme}
            </button>

            <div>
                <button onClick={() => changeLang('en')}>English</button>
                <button onClick={() => changeLang('fr')}>Français</button>
                <button onClick={() => changeLang('sp')}>Español</button>
            </div>

            <div>
                {user ? (
                    <div>
                        <p>{t.welcome}, {user.name}</p>
                        <button onClick={logout}>{t.logout}</button>
                    </div>
                ) : (
                    <button onClick={() => login({name: 'John Doe'})}>
                        {t.login}
                    </button>
                )}
            </div>
        </div>
     )
}


export default ThemeSwitcher;