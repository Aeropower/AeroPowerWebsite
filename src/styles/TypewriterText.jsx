import React, { useState, useEffect } from "react";

function TypewriterText({ text, speed = 50 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return <p className="typewriter-text text-black dark:text-white transition-colors duration-300">{displayedText}</p>;
}

export default TypewriterText;
