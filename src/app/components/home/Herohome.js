"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CITIES, SERVICES } from "@/app/utils/constants";
import ModalContactForm from "./ModalContactForm";

const Herohome = () => {
  return (
    <section className="herohome d-flex flex-column align-items-center text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner_search">
              <h1>
                Renovate, Repair & Improve With
                <br className="mob_hide" />
                Ease -<span className="highlight">EzeeTask</span>, Your One-Stop
                Solution
              </h1>
              <div className="inner_content_box mob_hide">
                <div className="city_box d-flex justify-content-between flex-wrap mt-4">
                  {CITIES.map((city) => (
                    <div key={city.id} className="city-item text-center">
                      <div className="city-icon">
                        <Image
                          src={city.icon}
                          alt={city.name}
                          width={40}
                          height={40}
                        />
                      </div>
                      <p>{city.name}</p>
                    </div>
                  ))}
                </div>
                <div className="content_box2">
                  {/* <div className="search-box d-flex justify-content-center">
                    <select className="form-select me-4">
                      <option>What are you looking for?</option>
                    </select>
                    <select className="form-select me-4">
                      <option>Select city</option>
                    </select>
                    <button className="primary_btn">Search your space</button>
                  </div> */}
                  <div className="services">
                    {SERVICES.map((service) => (
                      <ModalContactForm
                        btnText={service.serviceName}
                        key={service.id}
                        className="chip"
                      />
                      // <div className="chip" key={service.id}>
                      //   <p className="mb-0">{service.serviceName}</p>
                      // </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="desk_hide">
                <div className="content_box2">
                  <div className="search-box d-flex justify-content-center">
                    <select className="form-select me-4">
                      <option>What are you looking for?</option>
                      {SERVICES.map((service) => (
                        <option key={service.id} value={service.serviceName}>
                          {service.serviceName}
                        </option>
                      ))}
                    </select>
                    <select className="form-select me-4">
                      <option>Select city</option>
                      {CITIES.map((city) => (
                        <option key={city.id} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                    <button className="primary_btn">Search your space</button>
                  </div>
                </div>
              </div>
              <div className="desk_hide">
                <div className="city_box d-flex justify-content-between mt-4">
                  {CITIES.map((city) => (
                    <div key={city.id} className="city-item text-center">
                      <div className="city-icon">
                        <Image
                          src={city.icon}
                          alt={city.name}
                          width={40}
                          height={40}
                        />
                      </div>
                      <p>{city.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herohome;
