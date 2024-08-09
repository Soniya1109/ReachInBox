import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; 
import AppBar from "../components/AppBar";
import google from "../assets/google.svg";
import Footer from "../components/Footer";

function Login() {
  const Navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [showOptions, setShowOptions] = useState(false);
  const [hideBottomButton, setHideBottomButton] = useState(false);
  const [email, setEmail] = useState(""); 
  const [storedEmail, setStoredEmail] = useState<string | null>(null); // Allow storedEmail to be either string or null

  useEffect(() => {
    const savedEmail = localStorage.getItem('createdEmail');
    if (savedEmail) {
      setStoredEmail(savedEmail); // No more error here
    }
  }, []);

  const handleGoogleLogin = () => {
    window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reach-in-box-three.vercel.app/";
  };

  const handleCreateAccountClick = () => {
    setShowOptions(true);
    setHideBottomButton(true);
  };

  const handleAccountCreation = () => {
    if (email) {
      localStorage.setItem('createdEmail', email);
      alert(`Account for ${email} has been created successfully!`);
      setStoredEmail(email); 
    }
  };

  return (
    <div>
      <AppBar />
      <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white w-screen h-screen flex flex-col justify-center items-center">
        <div className="bg-[#1A1A1D] text-center space-y-10 p-10 rounded-2xl border border-gray-700 shadow-lg max-w-md w-full">
          <div className="">
            <div className="text-2xl font-bold mt-6 tracking-wide">
              Create a new account
            </div>
            <div
              className="mt-6 border border-gray-600 px-20 py-3 text-sm flex items-center justify-center text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
              onClick={handleGoogleLogin}
            >
              <img src={google} alt="google" className="w-5 mr-3" />
              Sign Up with Google
            </div>
            {storedEmail && (
              <div className="text-sm text-gray-400 mt-2">
                {`Or sign up with your created email: ${storedEmail}`}
              </div>
            )}
          </div>
          {showOptions && (
            <div className="mt-5 text-center space-y-5 transition-opacity duration-300 ease-in">
              <input 
                type="text" 
                placeholder="Enter your email" 
                className="w-full py-3 px-4 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
              <input 
                type="password" 
                placeholder="Create a password" 
                className="w-full py-3 px-4 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
              <button 
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300"
                onClick={handleAccountCreation} 
              >
                Create Account
              </button>
            </div>
          )}
          {!hideBottomButton && (
            <div className="">
              <button
                onClick={handleCreateAccountClick}
                className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] mx-16 mt-5 px-6 text-sm py-3 rounded-md shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-800 transition-all duration-300 cursor-pointer"
              >
                Create an Account
              </button>
              <div className="my-8 mb-10 text-[#909296]">
                Already have an account?{" "}
                <Link to="/signin" className="text-[#C1C2C5] underline hover:text-white transition-colors duration-200">
                  Sign In
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
