import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    const removeFromCart = (productId) => {
        setCart(cart.filter(product => product.id !== productId));
    }

    const clearCart = () => {
        setCart([]);
    }

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    }

    const getCartCount = () => {
        return cart.length;
    }

    const value = {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartCount
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;