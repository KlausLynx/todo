import { useState, useEffect } from "react";
import AuthContext  from "../authContext/authContext";

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const stored = localStorage.getItem('isLoggedIn')
        return stored === 'true' 
    });

    const [user, setUser] = useState(()=> {
        const user = localStorage.getItem('user')
        return user ||   ''
    })

    useEffect(() => {
        localStorage.setItem('user', user)
        localStorage.setItem('isLoggedIn', isLoggedIn)
    }, [user, isLoggedIn])

    const login = (username) => {
        setUser(username)
        setIsLoggedIn(true)
    }

    const logout = () => {
        setUser('')
        setIsLoggedIn(false)
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}