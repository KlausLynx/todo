import { useContext } from 'react';
import CartContext from './cartContext';
import ThemeContext from './themeContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext); // Use the theme
    
    return (
        <div className="product-card" style={{ 
            background: theme === 'light' ? '#f5f5f5' : '#444',
            color: theme === 'light' ? '#000' : '#fff'
        }}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}

const CartDisplay = () => {
    const { cart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext); 

    return (
        <div className="cart-display" style={{ 
            background: theme === 'light' ? '#f5f5f5' : '#444',
            color: theme === 'light' ? '#000' : '#fff'
        }}>
            <h2>Your Cart</h2>
            {cart.map((item, index) => (
                <div key={index}>
                    <p>{item.name} - ${item.price}</p>
                </div>
            ))}
        </div>
    );
}

export { ProductCard, CartDisplay };