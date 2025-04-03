"use client";
import React, { useState } from "react";
import { FaRegBuilding, FaRegClock, FaRegStar } from "react-icons/fa";
import {
  LuBuilding2,
  LuHardHat,
  LuPhone,
  LuFactory,
  LuHospital,
} from "react-icons/lu";
import { FiHome } from "react-icons/fi";
import { MdOutlineVilla } from "react-icons/md";
import { RiBuilding4Line } from "react-icons/ri";
import "../../../styles/banner.scss";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const [selectedType, setSelectedType] = useState(null);

  const features = [
    {
      icon: <FaRegStar className="icon" />,
      title: "15+ Years Experience",
      description: "Trusted by thousands of clients",
    },
    {
      icon: <FaRegClock className="icon" />,
      title: "24/7 Support",
      description: "Always here when you need us",
    },
    {
      icon: <LuHardHat className="icon" />,
      title: "Licensed Experts",
      description: "Professional certified team",
    },
    {
      icon: <LuPhone className="icon" />,
      title: "Free Consultation",
      description: "Get expert advice anytime",
    },
  ];

  return (
    <div className="page-container">
      <div className="hero-container">
        <div className="hero-overlay">
          <div className="hero-image">
            <Image
              src="/images/entry-banner-img.avif"
              alt="Modern architecture"
              layout="fill"
            />
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Transform Your Space</h1>
            <p className="hero-subtitle">
              Professional renovation and repair services tailored to your needs
            </p>
          </div>

          <div className="service-cards">
            <Link
              // onClick={() => setSelectedType("b2b")}
              href={"/commercial-services"}
              className="service-card"
            >
              <div className="d-flex align-items-center">
                <LuBuilding2 className="card-icon" />
                <h2 className="card-title ms-3">Commercial Services</h2>
              </div>
              <p className="card-description">
                Commercial renovation and maintenance services for your business
              </p>
              <div className="list">
                <p>
                  <LuHospital className="icon" />
                  Hospitals
                </p>
                <p>
                  <LuBuilding2 className="icon" />
                  Real Estate
                </p>
                <p>
                  <FaRegBuilding className="icon" />
                  Builder Floor
                </p>
                <p>
                  <LuFactory className="icon" />
                  Industries
                </p>
              </div>
            </Link>

            <Link
              // onClick={() => setSelectedType("b2c")}
              href={"/residential-services"}
              className="service-card"
            >
              <div className="d-flex align-items-center">
                <FiHome className="card-icon" />
                <h2 className="card-title ms-3">Home Services</h2>
              </div>
              <p className="card-description">
                Professional renovation and repair services for your home
              </p>
              <div className="list">
                <p>
                  <FiHome className="icon" />
                  Home
                </p>
                <p>
                  <RiBuilding4Line className="icon" />
                  Flat
                </p>
                <p>
                  <MdOutlineVilla className="icon" />
                  Villas
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Why Choose Us</h2>
          <p className="features-description">
            Experience excellence in renovation and repair services with our
            expert team
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
