import React, { useState, useEffect, useRef } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import CountryFlag from "react-country-flag";
import axios from "axios";

export const Navbar = () => {
  const [userCountry, setUserCountry] = useState("US");
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [countries, setCountries] = useState([]); // To hold the list of countries

  const regionDropdownRef = useRef(null);
  const menuRef = useRef(null);

  // Fetch user country
  useEffect(() => {
    const fetchUserCountry = async () => {
      try {
        const response = await axios.get(
          "https://ipinfo.io?token=cd6b88bb87ce74"
        );
        const countryCode = response.data.country;
        setUserCountry(countryCode);
      } catch (error) {
        console.error("Error fetching user location:", error);
      }
    };
    fetchUserCountry();
  }, []);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryData = response.data.map((country) => ({
          code: country.cca2,
          name: country.name.common,
        }));
        setCountries(countryData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const toggleRegionDropdown = (e) => {
    e.stopPropagation();
    setIsRegionDropdownOpen(!isRegionDropdownOpen);
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (event) => {
    if (
      regionDropdownRef.current &&
      !regionDropdownRef.current.contains(event.target)
    ) {
      setIsRegionDropdownOpen(false);
    }
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false); // **Close the hamburger menu when clicking outside**
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="Navbar">
      <div className="logo">
        <Link to="/" className="linktag">
          Logo
        </Link>
      </div>

      <div
        className={`menu ${isMenuOpen ? "open" : ""}`}
        ref={menuRef}
        onClick={() => setIsMenuOpen(false)}
      >
        <Link to="/" className="linktag">
          Home
        </Link>
        <Link to="/about" className="linktag">
          About
        </Link>
        <Link to="/services" className="linktag">
          Services
        </Link>
        <Link to="/contact" className="linktag">
          Contact
        </Link>
        <Link to="/faq" className="linktag">
          FAQ
        </Link>
      </div>

      <div className="right-section">
        <div className="regLang" ref={regionDropdownRef}>
          <CountryFlag
            countryCode={userCountry}
            svg
            className="country-flag"
            onClick={toggleRegionDropdown} // Toggle the country dropdown on flag click
          />
          {isRegionDropdownOpen && (
            <div className="dropdown">
              {/* Country dropdown content */}
              <p onClick={() => setUserCountry("US")}>United States</p>
              <p onClick={() => setUserCountry("GB")}>United Kingdom</p>
              <p onClick={() => setUserCountry("FR")}>France</p>
              {/* Add more countries as needed */}
            </div>
          )}
        </div>

        {/* Hamburger menu visible on mobile */}
        <div className="menu-button" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </div>
  );
};
