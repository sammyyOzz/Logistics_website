import React from "react";
import "./Hero.scss";
import { useNavigate } from "react-router-dom";

export const Hero = ({
  h1,
  p,
  trackingId,
  onchangevalue,
  valuevalue,
  handleSubmit,
  isSubmitButton,
}) => {
  const navigate = useNavigate();

  const handleTrackClick = (e) => {
    if (isSubmitButton && handleSubmit) {
      e.preventDefault(); // Prevent page reload if in TrackingPage context
      handleSubmit(); // Call submit handler to fetch tracking info
    } else {
      navigate(`/track?trackingId=${valuevalue}`); // Navigate with trackingId in HomePage context
    }
  };

  return (
    <div className="hero">
      <h1>{h1}</h1>
      <p>{p}</p>
      {trackingId && (
        <div className="trackingId">
          <p>TRACKING ID</p>
          <input
            type="text"
            placeholder="Enter Tracking ID"
            value={valuevalue}
            onChange={onchangevalue}
          />
          <button
            type={isSubmitButton ? "submit" : "button"} // Change button type dynamically
            className="mybutton"
            onClick={handleTrackClick}
          >
            {isSubmitButton ? "Submit" : "Track"}
          </button>
        </div>
      )}
      <div className="blurred-div">
        This is an orange div with a Gaussian blur effect!
      </div>
    </div>
  );
};
