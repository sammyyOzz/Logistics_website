import React, { useState } from "react";
import { Navbar } from "../../Navbar/Navbar";
import { Hero } from "../../Hero/Hero";
import { Services } from "../../Services/Services";
import { Shippingsteps } from "../../Shippingsteps/Shippingsteps";
import { Ourteam } from "../../Ourteam/Ourteam";
import { OurFAQ } from "../../OurFAQ/OurFAQ";
import { Footer } from "../../Footer/Footer";

export const HomePage = () => {
  const [inputTrackingId, setInputTrackingId] = useState("");
  return (
    <div>
      <Navbar />
      <Hero
        h1="Flexible shipping for your business"
        p="Track your parcel online at any time"
        trackingId={true}
        onchangevalue={(e) => setInputTrackingId(e.target.value)}
        valuevalue={inputTrackingId}
        isSubmitButton={false}
      />
      <Services />
      <Shippingsteps />
      <Ourteam />
      <OurFAQ />
      <Footer />
    </div>
  );
};
