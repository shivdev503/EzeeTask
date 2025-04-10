import React from "react";
import Image from "next/image";

const HowToStart = () => {
  return (
    <section className="how_to_start">
      <div className="container">
        <h2 className="heading text-center">
          Location Home Remodel Contractors <br className="mob_hide" />
          Made Simple With <span>EzeeTask</span>
        </h2>
        <div className="steps mt-5 mob_hide">
          <div className="step">
            <h3>01</h3>
            {/* <div className="icon">
              <Image
                src={"/icons/fill-form.png"}
                alt="fill form"
                layout="fill"
              />
            </div> */}
            <h4>Fill Form Or Call Us</h4>
          </div>
          <div className="step">
            <h3>02</h3>
            {/* <div className="icon">
              <Image
                src={"/icons/fill-form.png"}
                alt="fill form"
                layout="fill"
              />
            </div> */}
            <h4>Get Quotation</h4>
          </div>
          <div className="step">
            <h3>03</h3>
            {/* <div className="icon">
              <Image
                src={"/icons/fill-form.png"}
                alt="fill form"
                layout="fill"
              />
            </div> */}
            <h4>Advance Payment</h4>
          </div>
          <div className="step">
            <h3>04</h3>
            {/* <div className="icon">
              <Image
                src={"/icons/fill-form.png"}
                alt="fill form"
                layout="fill"
              />
            </div> */}
            <h4>Service Scheduling</h4>
          </div>
          <div className="step">
            <h3>05</h3>
            {/* <div className="icon">
              <Image
                src={"/icons/fill-form.png"}
                alt="fill form"
                layout="fill"
              />
            </div> */}
            <h4>Work Started</h4>
          </div>
        </div>
        <div className="desk_hide mt-4">
          <div className="row">
            <div className="col-6">
              <div className="step">
                <h3>01</h3>
                {/* <div className="icon">
              <Image
                src={"/icons/fill-form.png"}
                alt="fill form"
                layout="fill"
              />
            </div> */}
                <h4>Fill Form Or Call Us</h4>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <div className="step step2">
                    <h3>02</h3>
                    {/* <div className="icon">
              <Image
                src={"/icons/fill-form.png"}
                alt="fill form"
                layout="fill"
              />
            </div> */}
                    <h4>Get Quotation</h4>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <div className="step step2">
                    <h3>03</h3>
                    {/* <div className="icon">
              <Image
                src={"/icons/fill-form.png"}
                alt="fill form"
                layout="fill"
              />
            </div> */}
                    <h4>Advance Payment</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 mt-3">
              <div className="step">
                <h3>04</h3>
                {/* <div className="icon">
              <Image
                src={"/icons/fill-form.png"}
                alt="fill form"
                layout="fill"
              />
            </div> */}
                <h4>Service Schedule Shared</h4>
              </div>
            </div>
            <div className="col-6 mt-3">
              <div className="step">
                <h3>05</h3>
                {/* <div className="icon">
              <Image
                src={"/icons/fill-form.png"}
                alt="fill form"
                layout="fill"
              />
            </div> */}
                <h4>Work Started</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToStart;
