import { SERVICES } from "@/app/utils/constants";
import React from "react";

const ModalContactForm = () => {
  return (
    <>
      <button
        type="button"
        className="primary_btn"
        data-bs-toggle="modal"
        data-bs-target={"#exampleModal"}
      >
        Request Call Back
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal_form">
              <div className="modal-header pb-0">
                <h3 className="modal-title fs-5" id="exampleModalLabel">
                  Request a quote
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-12">
                      <input
                        type="text"
                        placeholder="Name*"
                        name="name"
                        required
                      />
                      {/* {nameError && (
                        <p className="error text-danger mb-0">{nameError}</p>
                      )} */}
                    </div>
                    <div className="col-12 mt-3">
                      <input
                        type="email"
                        placeholder="Email*"
                        name="email"
                        required
                      />
                      {/* {emailError && (
                        <p className="error text-danger mb-0">{emailError}</p>
                      )} */}
                    </div>
                    <div className="col-12 mt-3">
                      <input
                        type="tel"
                        placeholder="Mobile Number*"
                        required
                        name="phone"
                      />
                      {/* {phoneError && (
                        <p className="error text-danger mb-0">{phoneError}</p>
                      )} */}
                    </div>
                    <div className="col-12 mt-3">
                      <input
                        type="text"
                        placeholder="Location*"
                        required
                        name="brandName"
                      />
                      {/* {brandNameError && (
                        <p className="error text-danger mb-0">
                          {brandNameError}
                        </p>
                      )} */}
                    </div>
                    <div className="col-12 mt-3">
                      <select className="form-select">
                        <option>What are you looking for?</option>
                        {SERVICES.map((service) => (
                          <option key={service.id} value={service.serviceName}>
                            {service.serviceName}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12">
                      <button
                        className="primary_btn modal_btn mt-4 w-100 button"
                        type="submit"
                        // onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalContactForm;
