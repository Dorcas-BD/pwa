"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink } from "next-scroll";
import "../../styles/styles.css";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  const handleMobileNavClick = () => {
    setNavbar(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link href="/">
          <h2 className="logo">Dorcas Bamisile</h2>
        </Link>
        <div className="nav-hamburger" onClick={toggleNavbar}>
          {navbar ? (
            <Image src="/close.svg" width={30} height={30} alt="close-nav" />
          ) : (
            <Image
              src="/hamburger.svg"
              width={30}
              height={30}
              alt="hamburger"
            />
          )}
        </div>
      </div>
      <div className="nav-list">
        <ul className="nav-menu">
          <li>
            <ScrollLink to="home">Home</ScrollLink>
          </li>
          <li>
            <ScrollLink to="about">About</ScrollLink>
          </li>
          <li>
            <ScrollLink to="projects">Projects</ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact">Contacts</ScrollLink>
          </li>
        </ul>
      </div>
      {navbar && (
        <div className="nav-mobile">
          <ul className="nav-menu">
            <li onClick={handleMobileNavClick}>
              <ScrollLink to="home">Home</ScrollLink>
            </li>
            <li onClick={handleMobileNavClick}>
              <ScrollLink to="about">About</ScrollLink>
            </li>
            <li onClick={handleMobileNavClick}>
              <ScrollLink to="projects">Projects</ScrollLink>
            </li>
            <li onClick={handleMobileNavClick}>
              <ScrollLink to="contact">Contacts</ScrollLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
