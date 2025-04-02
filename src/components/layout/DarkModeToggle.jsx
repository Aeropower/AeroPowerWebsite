import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = ({ inHeader = false }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Mobile toggle inside header
  if (inHeader) {
    return (
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-2 md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow transition-colors"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
      </button>
    );
  }

  // Desktop floating toggle
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-2 left-2 z-50 p-3 hidden md:flex items-center justify-center rounded-full shadow-lg bg-gray-300 hover:shadow-hard dark:bg-gray-700 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
    </button>
  );
};

export default DarkModeToggle;
