"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { LuQuote } from "react-icons/lu";
import Image from "next/image";

const NextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const Testimonials = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 0,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    dots: true, // Enable dots
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "-40px", width: "100%" }}>
        <ul style={{ display: "flex", justifyContent: "center" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="custom-dot"></div> // Custom dot styling
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  const reviews = [
    {
      id: 0,
      shortName: "S",
      name: "Shefali Singhal",
      review:
        "Solebs! Name for trust and class. I had a seamless and awesome experience working with them. Perfectly shared details and expectations. Looking forward to work more.",
    },
    {
      id: 1,
      shortName: "A",
      name: "Abhinav",
      review:
        "Our favorite part of working with Solebs was their smooth execution of all the Influencer Marketing Campaigns we signed up with them.",
    },
    {
      id: 2,
      shortName: "A",
      name: "Ankush",
      review:
        "What I really like about Solebs is their in-depth understanding of who the right influencers are for the business and how to engage them with a brand or campaign and that in return is shown in the results.",
    },
    {
      id: 3,
      shortName: "N",
      name: "Namit",
      review:
        "If you wish to take your Influencer Marketing game to the next level, then reach out to Solebs, as they are just the best in this business.",
    },
  ];

  return (
    <section className="testimonials position-relative">
      <div className="container">
        <h2 className="text-center heading ml17">What Our Clients Say</h2>
        <p className="text-center">
          Discover why companies trust us with their success
        </p>
        <div className="slider-container mob_hide">
          <Slider {...settings}>
            {reviews.map((review) => (
              <div key={review.id}>
                <div className="my_card position-relative">
                  <div className="quote_icon">
                    <LuQuote className="icon" />
                  </div>
                  <div className="content">
                    <div className="content_header d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="circle">
                          <div className="dp">
                            <Image
                              src={"/images/dp1.jpeg"}
                              alt={review.name}
                              layout="fill"
                            />
                          </div>
                        </div>
                        <div className="name">
                          <p>{review.name}</p>
                          <p className="post">Marketing Director</p>
                        </div>
                      </div>
                    </div>
                    <p className="review_text">{review.review}</p>
                    {/* <div className="stars">
                      <FaStar className="icon" />
                      <FaStar className="icon" />
                      <FaStar className="icon" />
                      <FaStar className="icon" />
                      <FaStar className="icon" />
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
