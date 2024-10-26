import React from "react";
import "./AboutPage.scss";
import { Navbar } from "../../Navbar/Navbar";
import { Footer } from "../../Footer/Footer";
import { Hero } from "../../Hero/Hero";
import { Ourteam } from "../../Ourteam/Ourteam";
import { OurFAQ } from "../../OurFAQ/OurFAQ";

export const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <Hero h1="About us" />
      <Ourteam />
      <OurFAQ />
      <Footer />
    </div>
  );
};
