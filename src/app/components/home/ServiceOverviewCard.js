"use client";
import React from "react";
import Image from "next/image";

const ServiceOverviewCard = () => {
  return (
    <section className="services_overview">
      <div className="container">
        <div className="mob_hide">
          <div className="row">
            <div className="col-md-4">
              <div className="overview_img">
                <Image
                  src={"/images/overview-card2.jpeg"}
                  alt="overview"
                  layout="fill"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="overview_img">
                <Image
                  src={"/images/overview-card3.jpeg"}
                  alt="overview"
                  layout="fill"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="overview_img">
                <Image
                  src={"/images/overview-card4.jpeg"}
                  alt="overview"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="desk_hide">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="overview_img">
                  <Image
                    src={"/images/overview-card2.jpeg"}
                    alt="overview"
                    layout="fill"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="overview_img">
                  <Image
                    src={"/images/overview-card3.jpeg"}
                    alt="overview"
                    layout="fill"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="overview_img">
                  <Image
                    src={"/images/overview-card4.jpeg"}
                    alt="overview"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverviewCard;
