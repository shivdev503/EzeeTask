"use client";
import React, { useState } from 'react';
import { Building2, Home, ArrowRight, Wrench, Paintbrush, Ruler, HardHat, Phone, Clock, Star } from 'lucide-react';
import '../../../styles/banner.css'

const Banner = () => {
  const [selectedType, setSelectedType] = useState(null);

  const features = [
    { 
      icon: <Star className="icon" />, 
      title: '15+ Years Experience',
      description: 'Trusted by thousands of clients'
    },
    { 
      icon: <Clock className="icon" />, 
      title: '24/7 Support',
      description: 'Always here when you need us'
    },
    { 
      icon: <HardHat className="icon" />, 
      title: 'Licensed Experts',
      description: 'Professional certified team'
    },
    { 
      icon: <Phone className="icon" />, 
      title: 'Free Consultation',
      description: 'Get expert advice anytime'
    },
  ];

  const services = [
    { icon: <Wrench className="icon" />, title: 'Expert Repairs' },
    { icon: <Paintbrush className="icon" />, title: 'Professional Painting' },
    { icon: <Ruler className="icon" />, title: 'Custom Renovations' },
  ];

  return (
    <div className="page-container">
      <div className="hero-container">
        <div className="hero-overlay">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"
            alt="Modern architecture"
            className="hero-image"
          />
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Transform Your Space</h1>
            <p className="hero-subtitle">
              Professional renovation and repair services tailored to your needs
            </p>
          </div>

          <div className="service-cards">
            <button
              onClick={() => setSelectedType('b2b')}
              className="service-card"
            >
              <Building2 className="card-icon" />
              <h2 className="card-title">Business Solutions</h2>
              <p className="card-description">
                Commercial renovation and maintenance services for your business
              </p>
              <span className="card-link">
                Learn More <ArrowRight className="arrow-icon" />
              </span>
            </button>

            <button
              onClick={() => setSelectedType('b2c')}
              className="service-card"
            >
              <Home className="card-icon" />
              <h2 className="card-title">Home Services</h2>
              <p className="card-description">
                Professional renovation and repair services for your home
              </p>
              <span className="card-link">
                Learn More <ArrowRight className="arrow-icon" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Why Choose Us</h2>
          <p className="features-description">
            Experience excellence in renovation and repair services with our expert team
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
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