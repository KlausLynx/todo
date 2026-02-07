import { useContext } from "react";
import UserContext from "./UserContext";

function Dashboard() {
    const user = useContext(UserContext);

    return (
        <div>
            <h2>Welcome, {user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Theme: {user.theme}</p>
        </div>
    )

}

export default Dashboard