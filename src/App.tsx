import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary components from React Router DOM
import Login from "./pages/Login"; // Import your Login component
import SignIn from "./pages/SignIn"; // Import your SignIn component
import Home from "./pages/Home"; // Optional: Import a Home component or other components as needed

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} /> {/* Define route for Login page */}
                <Route path="/signin" element={<SignIn />} /> {/* Define route for SignIn page */}
                <Route path="/" element={<Home />} /> {/* Optional: Define route for Home page */}
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
