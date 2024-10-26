import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import the LanguageProvider
import { LanguageProvider } from "./components/LangSelector/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrap the entire application with the LanguageProvider */}
    {/* <LanguageProvider> */}
    <App />
    {/* </LanguageProvider> */}
  </StrictMode>
);
