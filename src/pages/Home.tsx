import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/AppBar"; // Assuming you have a reusable AppBar component
import Footer from "../components/Footer"; // Assuming you have a reusable Footer component

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored tokens or user data
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    // Redirect to the login page
    navigate("/login");
  };

  // Retrieve the stored email (if any) to display in the welcome message
  const email = localStorage.getItem("email");

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <AppBar /> {/* Reusable navigation bar */}
      <div className="flex-grow flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold">Welcome, {email ? email : "User"}!</h1>
        <p className="mt-4 text-lg">
          This is the home page. You can add more features or navigate to other parts of your application.
        </p>
        <button
          onClick={handleLogout}
          className="mt-8 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
      <Footer /> {/* Reusable footer */}
    </div>
  );
};

export default Home;
