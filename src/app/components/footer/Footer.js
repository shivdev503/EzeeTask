import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/app/utils/constants";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section className="footer">
      <div className="p100">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="logo">
                <Image
                  src={"/images/brand-logo.png"}
                  alt="EzeeTask"
                  layout="fill"
                />
              </div>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                quae consequuntur, fugit reiciendis officia veritatis aspernatur
                commodi fugiat pariatur ab.
              </p>
              <div className="mail">
                <Link href={"mailto:ezeetask@gmail.com"}>
                  <IoMdMail className="me-2 icon" />
                  ezeetask@gmail.com
                </Link>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-7">
              <h5>Services</h5>
              <div className="row mt-3">
                {SERVICES.map((service) => (
                  <div className="col-md-6" key={service.id}>
                    <Link className="service" href={"/"}>
                      {service.serviceName}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <p className="mb-0">© {year} EzeeTask, All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
