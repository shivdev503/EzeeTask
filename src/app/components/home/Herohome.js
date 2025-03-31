import React from "react";
import Image from "next/image";

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
                  {[
                    "Gurugram",
                    "Delhi",
                    "Ghaziabad",
                    "Faridabad",
                    "Chandigarh",
                    "Noida",
                  ].map((city, index) => (
                    <div key={index} className="city-item text-center">
                      <div className="city-icon">
                        <Image
                          src={"/images/city-icon.png"}
                          alt={city}
                          width={40}
                          height={40}
                        />
                      </div>
                      <p>{city}</p>
                    </div>
                  ))}
                </div>
                <div className="content_box2">
                  <div className="search-box d-flex justify-content-center">
                    <select className="form-select me-4">
                      <option>What are you looking for?</option>
                    </select>
                    <select className="form-select me-4">
                      <option>Select city</option>
                    </select>
                    <button className="primary_btn">Search your space</button>
                  </div>
                </div>
              </div>
              <div className="desk_hide">
                <div className="content_box2">
                  <div className="search-box d-flex justify-content-center">
                    <select className="form-select me-4">
                      <option>What are you looking for?</option>
                    </select>
                    <select className="form-select me-4">
                      <option>Select city</option>
                    </select>
                    <button className="primary_btn">Search your space</button>
                  </div>
                </div>
              </div>
              <div className="desk_hide">
                <div className="city_box d-flex justify-content-between mt-4">
                  {[
                    "Gurugram",
                    "Delhi",
                    "Ghaziabad",
                    "Faridabad",
                    "Chandigarh",
                    "Noida",
                  ].map((city, index) => (
                    <div key={index} className="city-item text-center">
                      <div className="city-icon">
                        <Image
                          src={"/images/city-icon.png"}
                          alt={city}
                          width={40}
                          height={40}
                        />
                      </div>
                      <p>{city}</p>
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
