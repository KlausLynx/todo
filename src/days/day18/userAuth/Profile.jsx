import { useContext } from 'react';
import AuthContext from './AuthContext';

function Profile() {
    const {user, logout, isLoggedIn} = useContext(AuthContext);

    return (
        <div>
            <h2>Profile</h2>
            {isLoggedIn ? (
                <>
                    <p>Welcome, {user}</p>
                    <p>You are logged in</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <p>Please log in to view your profile</p>
            )}
        </div>
    )
}

export default Profile;