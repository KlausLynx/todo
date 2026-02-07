// App.jsx
import { ThemeProvider } from './themeContext';
import ThemeSwitcher from './dashboard';
import { AuthProvider } from './authContext';
import { LangProvider } from './languageContext';

function App() {
  return (
    <ThemeProvider>  
        <AuthProvider>
            <LangProvider>
               <div>
                    <ThemeSwitcher />
                </div>
            </LangProvider>
        </AuthProvider>
    </ThemeProvider>
  );
}


export default App;