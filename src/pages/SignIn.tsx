import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      // Simulate authentication API call
      const response = await fetch("https://hiring.reachinbox.xyz/api/v1/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Assuming the API response contains a token
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", email);
        navigate("/"); // Redirect to home or dashboard
      } else {
        // Handle errors such as invalid credentials
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <AppBar />
      <div className="bg-black text-white w-screen h-screen flex flex-col justify-center items-center">
        <div className="bg-[#111214] text-center space-y-10 px-16 rounded-2xl border border-[#343A40]">
          <h2 className="text-xl font-semibold mt-6">Sign In to Your Account</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-black text-white border border-gray-600 rounded-md px-4 py-2 w-full"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-black text-white border border-gray-600 rounded-md px-4 py-2 w-full"
                required
              />
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <button
              type="submit"
              className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] mx-16 mt-5 px-6 text-sm py-3 rounded-md cursor-pointer"
            >
              Sign In
            </button>
          </form>
          <div className="my-8 mb-10 text-[#909296]">
            Don't have an account?{" "}
            <a href="/login" className="text-[#C1C2C5] underline hover:text-white transition-colors duration-200">
              Sign Up
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
