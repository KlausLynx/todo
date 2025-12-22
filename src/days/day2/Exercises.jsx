import React from 'react'
import './Exercises.css'
import RatingComponent from '../../Components/RatingComponent.jsx';
import CartIcon from '../../Components/CartIcon.jsx';
import { useState } from 'react';
import productImage from '../../assets/photo-1585298723682-7115561c51b7.jpg';

const ProductCard = () => {

  const product = {
    name: "Wireless Headphones",
    id: 43485443,
    price: 89.99,
    originalPrice: 129.99,
    // image: "https://images.pexels.com/photos/2046807/pexels-photo-2046807.jpeg",
    image: productImage,
    inStock: true
  };
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="product-card">
      <div className="product-id">
          <small className="text-gray-500">id: {product.id}</small>
        </div>

        <div>
          <img style={{width: '150px', height: '180px'}} src={product.image} alt="image of a black and white headphone " />
        </div>

        <div>
          <p>{product.name}</p>
        </div>
  
        <RatingComponent />
        <div className='card-bottom'>
          <div className='card-price'>
            <div className='original-price-section'>
              <span className="original-price" style={{color: 'GrayText'}}><del>${product.originalPrice}</del></span>
              <span className="bg-blue-100 rounded-sm disabled discount"> -{((product.originalPrice - product.price) / product.originalPrice * 100).toFixed(0)}%</span>
            </div>
          <div>
            <span className="price" style={{fontSize: '24px', fontWeight: 'bolder'}}>${product.price}</span>
          </div>
        </div>  
        <CartIcon onClick={() => setCartCount(cartCount + 1)} className="w-8 h-8 text-blue-500" itemCount = {cartCount} />
        </div>
      </div>
  )
}

export default ProductCard