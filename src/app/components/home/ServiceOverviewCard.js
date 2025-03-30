import React from "react";
import Image from "next/image";

const ServiceOverviewCard = () => {
  return (
    <section className="services_overview">
      <div className="container">
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
    </section>
  );
};

export default ServiceOverviewCard;
