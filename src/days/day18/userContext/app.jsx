import { useState } from "react";
import UserContext from './UserContext';
import Dashboard from './Dashboard';

function App() {
    // eslint-disable-next-line
    const [user, setUser] = useState({
        name: "Alice",
        age: 25,
        theme: "dark"
    });
    
    return (
        <UserContext.Provider value={user}>
            <Dashboard />
        </UserContext.Provider>
    )
}

export default App