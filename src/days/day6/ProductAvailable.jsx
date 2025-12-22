import React from 'react'

const ProductAvailable = ({ stock }) => {
  let statusMessage = '';
  let buttonDisabled = false;

  if (stock > 20) {
    statusMessage = 'In Stock';
  } else if (stock > 0 && stock <= 20) {
    statusMessage = `Low Stock - Only ${stock} left!`;
  } else {
    statusMessage = 'Out of Stock';
    buttonDisabled = true;
  }

  return (
    <div style={{
        backgroundColor: 'orange',
        marginBottom: '3rem',
        padding: '1rem',
        borderRadius: '8px',
        color: 'white'
    }}>
        <h2>Gaming Laptop</h2>
        <p>{statusMessage}</p>
        <button disabled={buttonDisabled}style={{
            padding: '0.5rem 1rem',
            backgroundColor: buttonDisabled ? 'grey' : 'green',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: buttonDisabled ? 'not-allowed' : 'pointer'
        }}>Add to Cart</button>
    </div>
  )
}

export default ProductAvailable