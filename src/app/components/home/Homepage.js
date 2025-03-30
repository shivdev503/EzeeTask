import React from "react";
import "../../../styles/homepage.scss";
import Herohome from "./Herohome";
import Services from "./Services";
import ServiceOverviewCard from "./ServiceOverviewCard";
import Counter from "./Counter";

const Homepage = () => {
  return (
    <>
      <Herohome />
      <Services />
      <Counter />
      <ServiceOverviewCard />
    </>
  );
};

export default Homepage;
