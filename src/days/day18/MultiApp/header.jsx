import { useContext } from 'react';
import ThemeContext from './themeContext';
import UserContext from './userContext';
import CartContext  from './cartContext';

function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { user } = useContext(UserContext);
    const { getCartCount } = useContext(CartContext);
    
    return (
        <header style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
            <h1>Welcome, {user.name}!</h1>
            <p>Cart Items: {getCartCount()}</p>
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </header>
    );
}

export default Header;