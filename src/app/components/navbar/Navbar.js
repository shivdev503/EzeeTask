"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "../../../styles/navbar.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgMenuRight } from "react-icons/cg";
import ModalContactForm from "../home/ModalContactForm";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg ${isScrolled ? "scrolled_nav" : ""}`}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <Image src={"/images/brand-logo.png"} alt="ezee task" layout="fill" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <CgMenuRight />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <Link className="nav-link" href="/repair-and-improve">
                Repair & Improve
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" href="/">
                For B to B
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" href="/">
                Join Our Pro Network
              </Link>
            </li>
          </ul>
          <div>
            {/* <button className="primary_btn">Request Call Back</button> */}
            <ModalContactForm />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
