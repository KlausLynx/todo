import React from 'react';
import {ShoppingCart, Plus, Minus} from 'lucide-react';
import laptopImg from '../../assets/laptop.jpg';
import mouseImg from '../../assets/mouse.jpg';
import wifiImg from '../../assets/Wifi-router.jpg';
import './learn.css';

// import { useState } from 'react';
export default function MainComponent () {
    const mainContStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 2fr)',
        gridTemplateRows: 'auto',
        backgroundColor: 'whiteSmoke',
        maxWidth: '1200px',
        width: '100%',
        margin: '2rem',
        padding: '2rem'
    }
    return(
        <div style={mainContStyle}>
            <div>
                <h1>Exercise 1: Product Cart</h1>
                <ProductCart />
            </div>
            <div></div>
            <div></div>
        </div>
    )
};

function ProductItem({name, src, price, value, onValueChange}) {
    const decrement = () => {
        if (value > 0) {
            onValueChange(value - 1);
        }
    }
    const buttonStyle = {
        width: '1.5rem',
        height: '1.5rem',
        border: 'none',
        backgroundColor: '#D3D3D3',
        opacity: 0.7,
        padding: '0.5rem',
        margin: '0',
        cursor: 'pointer',
    }

    return (
        <div style={
            {
                display: 'flex',
                border: '1px solid lightGray',
                borderRadius: '10px',
                margin: '1rem 0',
                justifyContent: 'space-between',
                alignItems: 'center',
            }
        }>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem'}}>
                <img src={src} alt={`image of ${name}`} width={75} />
                <div>
                    <p>{name}</p>
                    <small>{price}</small>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'end', alignItems: 'center', gap: '0.5rem', marginLeft: 'auto', paddingRight: '1rem'}}>
                <button style={{
                    ...buttonStyle,
                    borderTopLeftRadius: '5px',
                    borderBottomLeftRadius: '5px'
                }} onClick={decrement}>
                    <Minus size={10} />
                </button>
                <input className="no-spinner" style={{
                    textAlign: 'center', 
                    width: '40px',  // Small fixed width
                    height: '25px', 
                    color: 'black',
                    border: '1px solid #D3D3D3',
                    padding: '0',
                    fontSize: '14px',
                    // Remove number input arrows/spinners
                    MozAppearance: 'textfield',  // Firefox
                    WebkitAppearance: 'none', 
                    appearance: 'textfield'
                }}  type="number" name="" id="" min={0} value={value} onChange={(e) => onValueChange(Number(e.target.value) || 0)} />
                <button style={{
                    ...buttonStyle,
                    borderTopRightRadius: '5px',
                    borderBottomRightRadius: '5px'
                }} onClick={() => onValueChange(value + 1)}>
                    <Plus size={10} />
                </button>
            </div>
        </div>
    )
}

const ProductCart = () => {
    const [cartItem, setCartItem] = React.useState([
        {id: 1, name: 'Laptop', price: 1000, imgSrc: laptopImg, quantity: 0
        },
        {id: 2, name: 'Mouse', price: 700, imgSrc: mouseImg, quantity: 0
        },
        {id: 3, name: 'WiFi', price: 400, imgSrc: wifiImg, quantity: 0
        }
    ]);

    const updateQuantity = (id, quantity) => {
        setCartItem(prevItems =>
            prevItems.map(item =>
                item.id === id ? {...item, quantity: quantity} : item
            )
        );
    }

    // Calculate total products and total price
    const totalProducts = cartItem.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItem.reduce((total, item) => total + (item.price * item.quantity), 0);
    return (
        <div style={{border: '1px solid lightGray', borderRadius: '10px', padding: '1rem', backgroundColor: 'white'}}>
            <h1>Product Cart</h1>
                <div>
                    <div>
                        <ShoppingCart size={30} />
                        <h2>Shopping Cart</h2>
                    </div>
                    <div>
                        {cartItem.map(item => (
                            <ProductItem 
                                key={item.id} 
                                name={item.name} 
                                price={item.price} 
                                src={item.imgSrc}
                                value={item.quantity}
                                onValueChange={(newQuantity) => updateQuantity(item.id, newQuantity)} />
                        ))}
                    </div>
                    <div>
                        <p>Total Products: <strong>{totalProducts}</strong> </p>
                        <p>Total Price: <strong>{totalPrice}</strong></p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <button style={{backgroundColor: 'burlywood', padding: '.5rem 1rem', width: '50%', borderRadius: '5px'}}>Checkout</button>
                    </div>
            </div>
        </div>
    )
}