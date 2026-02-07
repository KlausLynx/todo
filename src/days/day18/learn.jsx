import { useState, createContext } from "react"

export default function MainComponent() {
    // eslint-disable-next-line
    const [user, setUser] = useState({name: "john", theme: "dark"})
    return <Dashboard user={user}/>
}

function Dashboard({user}) {
    return <Sidebar user={user}/>
}

function Sidebar({user}) {
    return <UserProfile user={user} />
}

function UserProfile({user}) {
    return <h1>Welcome, {user.name}</h1>
}

// Context let's u share data across your component tree without passing props through every level
// When to use Context:

// User authentication data
// Theme settings (dark/light mode)
// Language preferences
// Shopping cart data
// Any data needed by many components

// When NOT to use Context:

// Data only needed by 2-3 components (just use props)
// Data that changes very frequently (can cause performance issues)
// Everything (don't make every state global!)

const ThemeContext = createContext('light')

function App () {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div>

            </div>
        </ThemeContext.Provider>
    )
}