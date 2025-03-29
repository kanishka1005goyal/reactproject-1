import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./login"; // Import Login component

function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<h1>Welcome to My App</h1>} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
