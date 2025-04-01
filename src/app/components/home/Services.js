"use client";
import React from "react";
import Image from "next/image";
import { SERVICES } from "@/app/utils/constants";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="box">
          {SERVICES.map((service) => (
            <div className="service_box" key={service.id}>
              <div className="icon">
                <Image
                  src={service.icon}
                  alt={service.serviceName}
                  layout="fill"
                />
              </div>
              <h4>{service.serviceName}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
