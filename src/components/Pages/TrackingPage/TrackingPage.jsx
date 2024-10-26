import React, { useState, useEffect } from "react";
import "./TrackingPage.scss";
import axios from "axios";
import { useSearchParams } from "react-router-dom"; // Hook for reading URL parameters
import { Navbar } from "../../Navbar/Navbar";
import { Hero } from "../../Hero/Hero";

const TrackingPage = () => {
  const [searchParams] = useSearchParams(); // Used to read the trackingId from the URL
  const trackingIdFromURL = searchParams.get("trackingId"); // Retrieve the 'trackingId' from the URL

  const [trackingId, setTrackingId] = useState(trackingIdFromURL || ""); // Set initial state to trackingId from URL, if available
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [error, setError] = useState("");

  // Automatically fetch tracking info when the tracking ID is retrieved from the URL
  useEffect(() => {
    if (trackingIdFromURL) {
      fetchTrackingInfo(trackingIdFromURL);
    }
  }, [trackingIdFromURL]);

  // Function to handle manual tracking ID submission
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    fetchTrackingInfo(trackingId); // Call the function to fetch tracking info
  };

  // Function to fetch tracking info based on a tracking ID
  const fetchTrackingInfo = async (id) => {
    try {
      // Log the tracking ID for debugging purposes
      console.log("Fetching tracking info for ID:", id);

      // Trim the tracking ID to avoid spaces
      const trimmedTrackingId = id.trim();

      // Send a GET request to fetch tracking info
      const response = await axios.get(
        `http://localhost:5000/api/tracking/${trimmedTrackingId}`
      );

      // Update the state with the received tracking info
      setTrackingInfo(response.data);
      setError(""); // Clear any previous errors
    } catch (error) {
      // Log the error for debugging purposes
      console.error("Error fetching tracking info:", error);

      // Update the state with the error message
      setError("Tracking ID not found");
      setTrackingInfo(null); // Clear previous tracking info
    }
  };

  return (
    <>
      <Navbar />
      <Hero
        h1="Track your parcel"
        p="Track your parcel online at any time"
        trackingId={true}
        onchangevalue={(e) => setTrackingId(e.target.value)}
        valuevalue={trackingId}
        handleSubmit={handleSubmit}
        isSubmitButton={true}
      />
      <div className="tracking-page">
        {/* <h1>Track Your Parcel</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Tracking ID"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)} // Allow manual input
          />
          <button type="submit">Track</button>
        </form> */}

        {error && <p>{error}</p>}

        {trackingInfo && (
          <div>
            <p className="mainheader">Tracking Information</p>
            <div className="Details">
              <div className="senderDetails">
                <p className="senderheader">Senders detail</p>
                <div className="senderDetail">
                  <p>
                    <span>Full Name: </span>
                    {trackingInfo.fromFullName || "N/A"}
                  </p>
                  <p>
                    <span>Email:</span> {trackingInfo.fromEmail || "N/A"}
                  </p>
                  <p>
                    <span>Phone Number: </span>
                    {trackingInfo.fromPhoneNumber || "N/A"}
                  </p>
                  <p>
                    <span>Current Location: </span>
                    {trackingInfo.fromCurrentLocation || "N/A"}
                  </p>
                  <p>
                    <span>Country: </span>
                    {trackingInfo.fromCountryLocation || "N/A"}
                  </p>
                  <p>
                    <span>Items:</span> {trackingInfo.fromLuggages || "N/A"}
                  </p>
                  <p>
                    <span>Shipping Period: </span>
                    {trackingInfo.fromDayInterval || "N/A"}
                  </p>
                  <p>
                    <span>Total weight (lbs):</span>{" "}
                    {trackingInfo.fromTotalWeight || "N/A"}
                  </p>
                  <p>
                    <span>Status:</span> {trackingInfo.status || "N/A"}
                  </p>
                </div>
              </div>
              <div className="receiverDetails">
                <p className="receiverheader">Receivers detail</p>
                <div className="receiverDetail">
                  <p>
                    <span>Full Name: </span>
                    {trackingInfo.toFullName || "N/A"}
                  </p>
                  <p>
                    <span>Email: </span>
                    {trackingInfo.toEmail || "N/A"}
                  </p>
                  <p>
                    <span>Phone Number:</span>{" "}
                    {trackingInfo.toPhoneNumber || "N/A"}
                  </p>
                  <p>
                    <span>Current Location: </span>
                    {trackingInfo.toCurrentLocation || "N/A"}
                  </p>
                  <p>
                    <span>Country: </span>
                    {trackingInfo.toCountryLocation || "N/A"}
                  </p>
                  <p>
                    <span>City: </span>
                    {trackingInfo.toCityLocation || "N/A"}
                  </p>
                  <p>
                    <span>Postal Code:</span>{" "}
                    {trackingInfo.toPostalCode || "N/A"}
                  </p>
                </div>
              </div>
            </div>
            {/* <h3>Stops</h3> */}
            {/* <ul>
            {trackingInfo.stops.map((stop, index) => (
              <li key={index}>
                {stop.location || "N/A"} - {stop.status || "N/A"}
              </li>
            ))}
          </ul> */}
          </div>
        )}
      </div>
    </>
  );
};

export default TrackingPage;
