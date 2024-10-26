import React, { useState, useEffect, useRef } from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import CountryFlag from "react-country-flag";
import axios from "axios";

export const Navbar = () => {
  const [userCountry, setUserCountry] = useState("US"); // Default country set to "US"
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const [countries, setCountries] = useState([]); // List of countries
  const [menuOpen, setMenuOpen] = useState(false); // Hamburger menu state
  const ipinfoToken = import.meta.env.VITE_IPINFO_TOKEN;

  // Function to toggle menu on hamburger click
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Toggle the menu open/close state
  };
  const regionDropdownRef = useRef(null);
  const hamMenuRef = useRef(null); // Reference to the hamburger menu div

  // Fetch user's country based on IP
  useEffect(() => {
    const fetchUserCountry = async () => {
      try {
        const response = await fetch(`https://ipinfo.io?token=${ipinfoToken}`);
        const data = await response.json(); // Parse JSON response
        const countryCode = data.country;
        setUserCountry(countryCode); // Set the detected country
      } catch (error) {
        console.error("Error fetching user location:", error);
      }
    };
    fetchUserCountry();
  }, []);

  // Fetch list of countries from the API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryData = response.data.map((country) => ({
          code: country.cca2,
          name: country.name.common,
        }));
        setCountries(countryData); // Store country list
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  // Toggle region dropdown
  const toggleRegionDropdown = () => {
    setIsRegionDropdownOpen(!isRegionDropdownOpen);
  };

  // Change user country when a country is selected
  const handleCountrySelect = (countryCode) => {
    setUserCountry(countryCode);
    setIsRegionDropdownOpen(false); // Close dropdown after selection
  };

  // Close dropdown when clicking outside
  const handleOutsideClick = (event) => {
    if (
      regionDropdownRef.current &&
      !regionDropdownRef.current.contains(event.target)
    ) {
      setIsRegionDropdownOpen(false);
    }
  };

  // Close hamburger menu when clicking outside
  const handleHamMenuOutsideClick = (event) => {
    if (hamMenuRef.current && !hamMenuRef.current.contains(event.target)) {
      setMenuOpen(false); // Close the menu if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("mousedown", handleHamMenuOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("mousedown", handleHamMenuOutsideClick);
    };
  }, []);

  return (
    <div className="Navbar">
      <div className="logo">
        <Link to="/" className="linktag">
          Logo
        </Link>
      </div>

      <div className={menuOpen ? "open" : "menu"} ref={hamMenuRef}>
        <NavLink to="/" className="linktag">
          Home
        </NavLink>
        <NavLink to="/about" className="linktag">
          About
        </NavLink>
        <NavLink to="/services" className="linktag">
          Services
        </NavLink>
        <NavLink to="/contact" className="linktag">
          Contact
        </NavLink>
        <NavLink to="/faq" className="linktag">
          FAQ
        </NavLink>
      </div>

      <div
        className="hamMenu"
        onClick={toggleMenu} // Toggle the menu when clicked
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="regLang" ref={regionDropdownRef}>
        <CountryFlag countryCode={userCountry} svg className="country-flag" />
        <span onClick={toggleRegionDropdown}>
          Region <i className="arrow-down" />
        </span>
        {isRegionDropdownOpen && (
          <div className="region-dropdown">
            {countries.map((country) => (
              <div
                key={country.code}
                className="country-item"
                onClick={() => handleCountrySelect(country.code)}
              >
                <CountryFlag countryCode={country.code} svg />
                <span>{country.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
