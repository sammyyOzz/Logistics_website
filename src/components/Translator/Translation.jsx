import axios from "axios";

const translateText = async (text, targetLanguage) => {
  try {
    const response = await axios.post("https://libretranslate.com/translate", {
      q: text,
      source: "en", // your source language
      target: targetLanguage,
      format: "text",
    });
    return response.data.translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    return text; // fallback to original text in case of error
  }
};

export default translateText;
