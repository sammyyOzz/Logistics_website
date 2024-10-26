import React from "react";
import { useLanguage } from "./LanguageContext"; // Import the custom hook

const LanguageSwitcher = () => {
  const { setLanguage } = useLanguage(); // Get the language setting function

  return (
    <div className="language-switcher">
      <button onClick={() => setLanguage("en")}>English</button>
      <button onClick={() => setLanguage("es")}>Español</button>
      <button onClick={() => setLanguage("fr")}>Français</button>
      <button onClick={() => setLanguage("de")}>Deutsch</button>
    </div>
  );
};

export default LanguageSwitcher;
