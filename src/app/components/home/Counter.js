"use client";
import React, { useEffect, useState } from "react";

const Counter = () => {
  const [rating, setRating] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    const animateValue = (setter, start, end, duration) => {
      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setter(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    animateValue(setRating, 0, 4.8, 2000);
    animateValue(setCustomers, 0, 18000, 2000);
    animateValue(setProjects, 0, 1200, 2000);
  }, []);
  return (
    <section className="counter">
      <div className="container">
        <div className="counter_box">
          <div className="row">
            <div className="col-4">
              <div className="counter_item">
                <h2>{rating.toFixed(1)}</h2>
                <p>Service Rating</p>
              </div>
            </div>
            <div className="col-4">
              <div className="counter_item">
                <h2>{customers.toLocaleString()}+</h2>
                <p>Customer Globally</p>
              </div>
            </div>
            <div className="col-4">
              <div className="counter_item">
                <h2>{projects.toLocaleString()}+</h2>
                <p>B2B Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
