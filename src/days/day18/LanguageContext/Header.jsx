// Header.jsx
import { useContext } from 'react';
import LanguageContext from './UserContext';

function Header() {
  const {mode, translations, changeTranslation} = useContext(LanguageContext)
  
  return (
    <header style={{ 
      background: mode === 'English' ? '#d21414' : '#333',
      color: mode === 'English' ? '#000' : '#fff'
    }}>
      <h1>My header</h1>
      <button style={{backgroundColor: 'green'}} onClick={changeTranslation}>
        Switch to {mode === 'English' ? 'English' : 'Spanish'} Mode
      </button>
      <p>{translations}</p>
    </header>
  );
}

export default Header;