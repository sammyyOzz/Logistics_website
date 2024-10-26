import React from "react";
import { Navbar } from "../../Navbar/Navbar";
import { Hero } from "../../Hero/Hero";
import { Services } from "../../Services/Services";
import { OurFAQ } from "../../OurFAQ/OurFAQ";
import { Footer } from "../../Footer/Footer";

export const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <Hero h1="Our services" p="Track your parcel online at any time" />
      <Services />
      <OurFAQ />
      <Footer />
    </div>
  );
};
