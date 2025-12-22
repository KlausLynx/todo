import './ProductCard.css';

function ProductCard({ name, price, image, inStock }) {
  const isDisabled = true;
  return (
    <div className="product-card">
      <h1 className="font-bold text-gray-900 ">{name}</h1>
      <p>${price}</p>
      <img src={image} style={{width: '170px', height: '170px'}} alt="An Image of a Wireless Headphone" className="rounded-lg " />
      {inStock ? ( 
        <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs font-medium px-3 py-1 rounded" style={{marginTop: '10px', width: '70px', marginBottom: '10px'}}> 
          In Stock
        </span>
      ) : (
        <span className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 text-xs font-medium px-5 py-2 rounded" style={{marginTop: '10px', width: '75px', marginBottom: '10px'}}>
          Out of Stock
        </span>
      )}
      {inStock ? (
        <button type="submit" className='bg-blue-700 cursor-pointer py-1'>Buy Me</button>
      ) : (
        <button className='bg-gray-400' disabled={isDisabled}>Buy Me</button>
      )}
    </div>
  )
}

export default ProductCard