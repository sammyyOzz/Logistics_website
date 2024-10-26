import React from "react";
import { Navbar } from "../../Navbar/Navbar";
import { Hero } from "../../Hero/Hero";
import { Footer } from "../../Footer/Footer";
import { OurFAQ } from "../../OurFAQ/OurFAQ";

export const Notfound = () => {
  return (
    <div>
      <Navbar />
      <Hero
        h1="Something went wrong."
        p="Error 404 - click below to head back home"
      />

      <OurFAQ />
      <Footer />
    </div>
  );
};
