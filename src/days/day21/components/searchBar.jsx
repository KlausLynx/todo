import {useEffect, useRef} from 'react'
export const SearchBar = ({onSearch}) => {

    const searchRef = useRef(null);

    useEffect(() => {
        searchRef.current.focus()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const city = searchRef.current.value.trim()
        if(city) {
            onSearch(city)
        } else {
            console.log('sth is wrong')
        }
    }
    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
            <input type="text" ref={searchRef} placeholder='Please enter a city name'/>
            <button  type="submit"
                style={{
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#4f46e5",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
            }}>
                Search
            </button>
        </form>
    )
}