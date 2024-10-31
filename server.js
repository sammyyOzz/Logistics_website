import express from "express";
import cors from "cors";
import bodyParser from "body-parser"; // Add body-parser to parse form
import path from "path";

// Initialize express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.options("*", cors()); // This will handle all OPTIONS requests
app.use(bodyParser.urlencoded({ extended: true })); // Add this to handle form data

// Global array to store tracking data
let trackingData = [];

// Route to generate a tracking ID (Admin page)
app.post("/api/admin/generate-tracking", (req, res) => {
  const {
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
  } = req.body;

  // Validate required fields
  if (!fromFullName || !fromCountryLocation || !toCountryLocation) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Generate a unique tracking ID
  const trackingId = `TRK-${Date.now()}`;

  // Create new tracking info
  const newTrackingInfo = {
    trackingId,
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
  };

  // Log the new tracking info and push to the trackingData array
  trackingData.push(newTrackingInfo);
  console.log("Generated Tracking ID:", trackingId);
  console.log("Tracking Info:", newTrackingInfo);

  // Return the new tracking info
  res.json(newTrackingInfo);
});

// Route to retrieve tracking information by tracking ID (Tracking page)
app.get("/api/tracking/:trackingId", (req, res) => {
  const { trackingId } = req.params;

  // Validate trackingId format
  if (!trackingId || !trackingId.startsWith("TRK-")) {
    return res.status(400).json({ message: "Invalid Tracking ID format" });
  }

  // Search for the tracking info
  const trackingInfo = trackingData.find(
    (item) => item.trackingId === trackingId
  );

  // Return the found tracking info or 404 if not found
  if (trackingInfo) {
    res.json(trackingInfo);
  } else {
    res.status(404).json({ message: "Tracking ID not found" });
  }
});

// Route to update the current location of a package by tracking ID (Admin page)
app.put("/api/admin/update-location/:trackingId", (req, res) => {
  const { trackingId } = req.params; // Get the tracking ID from the URL
  const { currentLocation } = req.body; // Get the current location from the request body

  // Validate that currentLocation is provided
  if (!trackingId || !currentLocation) {
    return res.status(400).json({ message: "Current location is required" });
  }

  // Find the tracking info by tracking ID
  const trackingInfo = trackingData.find(
    (item) => item.trackingId === trackingId
  );

  if (trackingInfo) {
    // Update the current location and log it
    trackingInfo.fromCurrentLocation = currentLocation;
    console.log(
      `Tracking ID ${trackingId} updated to new location: ${currentLocation}`
    );

    res.json({ message: "Location updated successfully", trackingInfo });
  } else {
    res.status(404).json({ message: "Tracking ID not found" });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
