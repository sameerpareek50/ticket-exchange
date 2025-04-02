import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/users")
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Ticket Exchange Platform</h1>
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
