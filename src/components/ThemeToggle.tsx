import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import './ThemeToggle.css';

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(darkMode ? 'light' : 'dark');
        root.classList.add(darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <div className="mr-10">
            <label className="theme-switch">
                <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                <span className="slider round"></span>
                {darkMode ? (
                    <FaSun className="icon sun-icon" />
                ) : (
                    <FaMoon className="icon moon-icon" />
                )}
            </label>
        </div>
    );
}

export default ThemeToggle;