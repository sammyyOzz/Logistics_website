import React, { useState } from "react";
import "./AdminPage.scss";
import axios from "axios";

const AdminPage = () => {
  // State for generating tracking ID
  const [fromFullName, setFromFullName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [fromPhoneNumber, setFromPhoneNumber] = useState("");
  const [fromCurrentLocation, setFromCurrentLocation] = useState("");
  const [fromCountryLocation, setFromCountryLocation] = useState("");
  const [fromLuggages, setFromLuggages] = useState("");
  const [fromDayInterval, setFromDayInterval] = useState("");
  const [fromTotalWeight, setFromTotalWeight] = useState("");

  const [toFullName, setToFullName] = useState("");
  const [toEmail, setToEmail] = useState("");
  const [toPhoneNumber, setToPhoneNumber] = useState("");
  const [toCountryLocation, setToCountryLocation] = useState("");
  const [toCityLocation, setToCityLocation] = useState("");
  const [toPostalCode, setToPostalCode] = useState("");

  const [trackingId, setTrackingId] = useState(null); // Store generated tracking ID
  const [error, setError] = useState(""); // Error state

  // New state for editing location
  const [editTrackingId, setEditTrackingId] = useState(""); // Tracking ID to edit location
  const [newCurrentLocation, setNewCurrentLocation] = useState(""); // New location
  const [fetchedData, setFetchedData] = useState(null); // Stores fetched tracking data

  // Function to generate tracking ID
  const handleGenerateTracking = async () => {
    const trackingData = {
      fromFullName,
      fromEmail,
      fromPhoneNumber,
      fromCurrentLocation,
      fromCountryLocation,
      fromLuggages,
      fromDayInterval,
      fromTotalWeight,
      toFullName,
      toEmail,
      toPhoneNumber,
      toCountryLocation,
      toCityLocation,
      toPostalCode,
      status: "In Transit",
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/generate-tracking",
        trackingData
      );

      if (response.data.trackingId) {
        setTrackingId(response.data.trackingId);
        setError("");
      } else {
        setError("Tracking ID generation failed.");
      }
    } catch (error) {
      console.error("Error generating tracking ID:", error);
      setError("Failed to generate tracking ID. Please try again.");
    }
  };

  // Function to fetch tracking data using tracking ID
  const fetchTrackingData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/tracking/${editTrackingId}`
      );
      setFetchedData(response.data);
      setNewCurrentLocation(response.data.currentLocation);
      setError("");
    } catch (error) {
      console.error("Error fetching tracking data:", error);
      setError("Tracking ID not found.");
      setFetchedData(null);
    }
  };

  // Function to update the current location
  const handleUpdateLocation = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:5000/api/admin/update-location/${editTrackingId}`,
        { currentLocation: newCurrentLocation } // Use the correct state variable
      );

      if (response.data.message === "Location updated successfully") {
        alert("Location updated successfully!");
      } else {
        alert("Error updating location. Please try again.");
      }
    } catch (error) {
      console.error(
        "Error updating location:",
        error.response ? error.response.data : error
      ); // Log detailed error response
      alert(
        error.response
          ? error.response.data.message
          : "Error updating location. Please try again."
      );
    }
  };

  // Handle form submission for tracking ID generation
  const handleSubmit = (e) => {
    e.preventDefault();
    handleGenerateTracking();
  };

  // Function to copy the tracking ID
  const handleCopy = () => {
    if (trackingId) {
      navigator.clipboard.writeText(trackingId).then(() => {
        alert("Tracking ID copied to clipboard!");
      });
    } else {
      alert("No tracking ID to copy.");
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin Panel</h1>
      {/* Tracking ID Generation Section */}
      <h2>Generate Tracking ID</h2>
      {error && <p className="error">{error}</p>} {/* Display any errors */}
      <form onSubmit={handleSubmit}>
        <h3>Sender's Details</h3>
        <div>
          <label>Full Name: </label>
          <input
            type="text"
            value={fromFullName}
            onChange={(e) => setFromFullName(e.target.value)}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number: </label>
          <input
            type="number"
            value={fromPhoneNumber}
            onChange={(e) => setFromPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Current Location: </label>
          <input
            type="text"
            value={fromCurrentLocation}
            onChange={(e) => setFromCurrentLocation(e.target.value)}
          />
        </div>
        <div>
          <label>Country: </label>
          <input
            type="text"
            value={fromCountryLocation}
            onChange={(e) => setFromCountryLocation(e.target.value)}
          />
        </div>
        <div>
          <label>Luggages: </label>
          <input
            type="text"
            value={fromLuggages}
            onChange={(e) => setFromLuggages(e.target.value)}
          />
        </div>
        <div>
          <label>Shipping Time Interval: </label>
          <input
            type="text"
            value={fromDayInterval}
            onChange={(e) => setFromDayInterval(e.target.value)}
          />
        </div>
        <div>
          <label>Total weight (lbs): </label>
          <input
            type="number"
            value={fromTotalWeight}
            onChange={(e) => setFromTotalWeight(e.target.value)}
          />
        </div>
        <h3>Receiver's Details</h3>
        <div>
          <label>Full Name: </label>
          <input
            type="text"
            value={toFullName}
            onChange={(e) => setToFullName(e.target.value)}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={toEmail}
            onChange={(e) => setToEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number: </label>
          <input
            type="number"
            value={toPhoneNumber}
            onChange={(e) => setToPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Country: </label>
          <input
            type="text"
            value={toCountryLocation}
            onChange={(e) => setToCountryLocation(e.target.value)}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            value={toCityLocation}
            onChange={(e) => setToCityLocation(e.target.value)}
          />
        </div>
        <div>
          <label>Postal Code</label>
          <input
            type="text"
            value={toPostalCode}
            onChange={(e) => setToPostalCode(e.target.value)}
          />
        </div>

        <button type="submit">Generate Tracking ID</button>
      </form>
      {/* Display the generated tracking ID with a copy button */}
      {trackingId && (
        <div className="tracking-id-display">
          <p>Generated Tracking ID: {trackingId}</p>
          <button onClick={handleCopy}>Copy Tracking ID</button>
        </div>
      )}
      {/* Section to update current location */}
      <h2>Update Current Location</h2>
      <div className="tracking-id-section">
        <input
          type="text"
          placeholder="Enter Tracking ID"
          value={editTrackingId}
          onChange={(e) => setEditTrackingId(e.target.value)}
        />
        <button onClick={fetchTrackingData}>Fetch Tracking Info</button>
      </div>
      {error && <p className="error">{error}</p>} {/* Display errors */}
      {fetchedData && (
        <div className="location-update-section">
          <h3>Edit Current Location</h3>
          <input
            type="text"
            value={newCurrentLocation}
            onChange={(e) => setNewCurrentLocation(e.target.value)}
          />
          <button onClick={handleUpdateLocation}>Update Location</button>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
