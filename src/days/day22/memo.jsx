import { useState, memo, useMemo, useCallback, useEffect } from 'react'
import { BarChart, ResponsiveContainer, CartesianGrid, Bar, XAxis, YAxis, Tooltip } from 'recharts'


export default function Dashboard() {
    const [count, setCount] = useState(0);
    const chartData = useMemo(()=> [1, 2, 3, 4, 5].map((num, index) => ({
        name: `Week ${index + 1}`, value: num
    })), []);

    const handleBarClick = useCallback((bar) => {
        console.log('clicked', bar);
    }, []);

    return (
        <>
            <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
            <ExpensiveChart data={chartData} onBarClick={handleBarClick} />
            <Exercise3 />
            <Exercise4 />
        </>
    );
}


const ExpensiveChart = memo(function ExpensiveChart({ data, onBarClick }) {
    return (
        <div>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart width={400} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="value" onClick={onBarClick} />
                    <XAxis dataKey="name" />
                    <YAxis/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
})

function Statistics ({ numbers, label }) {
    const stats = useMemo(()=> ({
        sum: numbers.reduce((a, b) => a + b, 0),
        avg: numbers.reduce((a, b) => a + b, 0) / numbers.length,
        max: Math.max(...numbers),
    }), [numbers]);

    return <div>{label}: avg is {stats.avg}</div>;
}

// Exercise 3 — React.memo in action:

// Create a Counter component with a button that increments a count. 
// Add a UserCard component that displays a name. 
// Wrap UserCard in memo. 
// Verify in the console that UserCard doesn't re-render when count changes.

const Counter = ({count, onSetCount}) => {
    useEffect(() =>{
        console.log(count)
    })

    return (
        <button onClick={() => onSetCount(p => p + 1 )}>Count {count} </button>
    )
}

const UserCard = memo(({name}) => {

    return  (
        <h1>{name}</h1>
    )
})

const Exercise3 = () => {
    const [count, setCount] = useState(0);
    const profile = useMemo(() => ({
        name: 'Klaus'
    }), [])

    useEffect(() => {
        console.log(`${profile.name} only changes when rendered not always or when the count renders`)
    }, [profile.name])
    return (
        <>
            <Counter count={count} onSetCount={setCount}/>
            <UserCard name={profile.name}/>
        </>
    )
}

// Exercise 4 — The triple combo:

// Build a product search page with:

// A list of 20 products (make up names)
// A search input that filters products by name
// A "sort by price" toggle button
// A ProductCard component wrapped in memo
// Use useMemo for the filtered + sorted list
// Use useCallback for any handlers passed to ProductCard
    const InitialProduct = [
        { id: 1,  name: "Wireless Headphones",  category: "Electronics",  price: 89.99,  stock: 142,  rating: 4.5 },
        { id: 2,  name: "Running Shoes",        category: "Footwear",     price: 120.00, stock: 89,   rating: 4.2 },
        { id: 3,  name: "Coffee Maker",         category: "Appliances",   price: 49.99,  stock: 34,   rating: 3.8 },
        { id: 4,  name: "Yoga Mat",             category: "Fitness",      price: 25.00,  stock: 200,  rating: 4.7 },
        { id: 5,  name: "Smartwatch",           category: "Electronics",  price: 199.99, stock: 56,   rating: 4.4 },
        { id: 6,  name: "Backpack",             category: "Accessories",  price: 65.00,  stock: 78,   rating: 4.1 },
        { id: 7,  name: "Blender",             category: "Appliances",   price: 39.99,  stock: 22,   rating: 3.6 },
        { id: 8,  name: "Desk Lamp",           category: "Furniture",    price: 30.00,  stock: 110,  rating: 4.0 },
        { id: 9,  name: "Sunglasses",          category: "Accessories",  price: 55.00,  stock: 95,   rating: 4.3 },
        { id: 10, name: "Mechanical Keyboard", category: "Electronics",  price: 149.99, stock: 41,   rating: 4.6 },
        { id: 11, name: "Water Bottle",        category: "Fitness",      price: 18.00,  stock: 300,  rating: 4.8 },
        { id: 12, name: "Notebook Set",        category: "Stationery",   price: 12.00,  stock: 500,  rating: 4.2 },
        { id: 13, name: "Portable Speaker",   category: "Electronics",  price: 79.99,  stock: 63,   rating: 4.3 },
        { id: 14, name: "Office Chair",       category: "Furniture",    price: 299.99, stock: 15,   rating: 4.5 },
        { id: 15, name: "Resistance Bands",   category: "Fitness",      price: 15.00,  stock: 250,  rating: 4.6 },
        { id: 16, name: "Toaster",            category: "Appliances",   price: 27.99,  stock: 47,   rating: 3.9 },
        { id: 17, name: "Leather Wallet",     category: "Accessories",  price: 45.00,  stock: 130,  rating: 4.1 },
        { id: 18, name: "Gaming Mouse",       category: "Electronics",  price: 59.99,  stock: 88,   rating: 4.4 },
        { id: 19, name: "Desk Organizer",     category: "Furniture",    price: 22.00,  stock: 175,  rating: 3.7 },
        { id: 20, name: "Protein Shaker",     category: "Fitness",      price: 14.00,  stock: 220,  rating: 4.5 },
    ]
const Exercise4 = () => {
    const [productList, setProductList] = useState(InitialProduct)
    const [searchValue, setSearchValue] = useState('')
    const [sortOrder, setSortOrder] = useState('asc')
    
    const displayedProducts = useMemo(() => 
        productList.filter(q => q.name.toLowerCase().includes(searchValue.toLowerCase()))
    .sort((a,b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price )
    , [searchValue, sortOrder, productList])

    const sortToggle = useCallback(() => {
        setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    }, []);

    const deleteProduct = useCallback((id) => {
        setProductList(prev => prev.filter(p => p.id !== id ))
    }, [])
    return (
        <div>
            <div>
                <input type="search" name="productQuery" id="productQuery" onChange={(e) => setSearchValue(e.target.value)}/>
            </div>
            <button onClick={sortToggle}>Sort by {sortOrder}</button>
            <ProductCard products={displayedProducts} onDelete={deleteProduct} />
        </div>
    )
}

const ProductCard = memo(({products, onDelete}) => {

    return (
        <div className='grid grid-cols-4 gap-4'>
            {
                products.map((product) => (
                    <div key={product.id}
                        style={{backgroundColor: "blueviolet", maxWidth: '200px'}}
                        >
                        <button className='items-end' onClick={() => onDelete(product.id)}>X</button>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                ))
            }
        </div>
    )
})

function Button({ label, onClick }) {
    return <button onClick={onClick}>{label}</button>;
}

function App() {
    const [text, setText] = useState('');

    // Is this useCallback needed here? No
    const handleChange = (e) => {
        setText(e.target.value);
    };

    // Is this useMemo needed here? No
    const greeting = () => {
        return `Hello, ${text}!`;
    };

    return (
        <div>
            <input onChange={handleChange} />
            <p>{greeting}</p>
        </div>
    );
}