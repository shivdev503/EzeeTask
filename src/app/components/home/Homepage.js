import React from "react";
import "../../../styles/homepage.scss";
import Herohome from "./Herohome";
import Services from "./Services";
import ServiceOverviewCard from "./ServiceOverviewCard";
import Counter from "./Counter";
import HowToStart from "./HowToStart";
import Testimonials from "./Testimonials";

const Homepage = () => {
  return (
    <>
      <Herohome />
      <Services />
      <Counter />
      <Testimonials />
      <ServiceOverviewCard />
      <HowToStart />
    </>
  );
};

export default Homepage;
