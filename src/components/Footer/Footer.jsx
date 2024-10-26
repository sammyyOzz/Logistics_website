import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  const phoneNumber = "+2348124163837";
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div className="footer">
      <div className="logoqa">
        <div className="logobutton">
          <p>logo</p>
          <button onClick={handleCall}>Book a call</button>
        </div>
        <div className="quickactions">
          <div className="quickaction">
            <Link to="/" className="linktag">
              Home
            </Link>
            <Link to="/about" className="linktag">
              About
            </Link>
            <Link to="/contact" className="linktag">
              Contact
            </Link>
            <Link to="/tracking" className="linktag">
              Parcel tracking
            </Link>
          </div>
          <div className="quickaction">
            <Link to="/" className="linktag">
              Home
            </Link>
            <Link to="/about" className="linktag">
              About
            </Link>
            <Link to="/contact" className="linktag">
              Contact
            </Link>
            <Link to="/tracking" className="linktag">
              Parcel tracking
            </Link>
          </div>
          <div className="quickaction">
            <Link to="/" className="linktag">
              Home
            </Link>
            <Link to="/about" className="linktag">
              About
            </Link>
            <Link to="/contact" className="linktag">
              Contact
            </Link>
            <Link to="/tracking" className="linktag">
              Parcel tracking
            </Link>
          </div>
        </div>
      </div>
      <p className="location">
        Address: 18 Rue Michel Rodange, 2430 Gare Luxembourg
      </p>
      <div className="blurred-div">
        This is an orange div with a Gaussian blur effect!
      </div>
    </div>
  );
};
