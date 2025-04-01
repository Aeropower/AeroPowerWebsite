import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = ({ inHeader = false }) => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [darkMode]);

  const icon = darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />;

  const baseClasses =
    "p-2 rounded-full text-xl transition-colors duration-300 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:scale-105";

  if (isMobile) {
    return (
      <button onClick={() => setDarkMode(!darkMode)} className={`${baseClasses} ml-2`}>
        {icon}
      </button>
    );
  }

  return (
    <div className="fixed bottom-2 left-2 z-50">
      <button onClick={() => setDarkMode(!darkMode)} className={baseClasses}>
        {icon}
      </button>
    </div>
  );
};

export default DarkModeToggle;
