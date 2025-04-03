import React from "react";
import Homepage from "../components/home/Homepage";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <Homepage />
      <Footer />
    </>
  );
};

export default page;
