import React, { createContext, useState, useContext } from "react";
import axios from "axios";

// Create a Language Context
const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  // Function to translate text using LibreTranslate API
  const translateText = async (text, targetLanguage) => {
    try {
      const response = await axios.post(
        "https://libretranslate.com/translate",
        {
          q: text,
          source: "en",
          target: targetLanguage,
          format: "text",
        }
      );
      return response.data.translatedText;
    } catch (error) {
      console.error("Translation error:", error);
      return text; // If there's an error, return the original text
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translateText }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the LanguageContext
export const useLanguage = () => useContext(LanguageContext);
