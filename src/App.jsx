import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/Pages/HomePage/HomePage";
import { AboutPage } from "./components/Pages/AboutPage/AboutPage";
import { ContactPage } from "./components/Pages/ContactPage/ContactPage";
import { ServicesPage } from "./components/Pages/ServicesPage/ServicesPage";
import { Notfound } from "./components/Pages/Notfound/Notfound";
import { FAQPage } from "./components/Pages/FAQPage/FAQPage";
import AdminPage from "./components/Pages/AdminPage/AdminPage";
import TrackingPage from "./components/Pages/TrackingPage/TrackingPage";
import ErrorBoundary from "./components/ErrorBoundary";
import LanguageSelector from "./components/LangSelector/LangSelector"; // Import LanguageSelector
import { Translation, TranslationProvider } from "react-google-multi-lang"; // Correctly import Translation from the library

function App() {
  return (
    <Router>
      {/* Wrap the whole app with Translation */}
      {/* <LanguageSelector /> */}
      {/* Add the language selector to switch languages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/notfound" element={<Notfound />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route
          path="/track"
          element={
            <ErrorBoundary>
              <TrackingPage />
            </ErrorBoundary>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
