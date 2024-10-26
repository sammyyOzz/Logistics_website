import React from "react";
import { Navbar } from "../../Navbar/Navbar";
import { Hero } from "../../Hero/Hero";
import { OurFAQ } from "../../OurFAQ/OurFAQ";

export const FAQPage = () => {
  return (
    <div>
      <Navbar />
      <Hero h1="Our FAQ" p="Track your parcel online at any time" />
      <OurFAQ />
    </div>
  );
};
