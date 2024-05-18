import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";
import "../Navbar/Navbar.css";

const Nav = () => {
  const [navbarblur, setNavbarBlur] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setNavbarBlur(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const toggleMenu = () => {
    const bars = document.querySelectorAll(".bar");
    const ham = document.querySelector(".NavbarLinks");
    bars.forEach(bar => bar.classList.toggle("barOne"));
    bars.forEach(bar => bar.classList.toggle("barTwo"));
    bars.forEach(bar => bar.classList.toggle("barThree"));
    ham.classList.toggle("showNavbar");
  };

  const closeMenu = () => {
    const bars = document.querySelectorAll(".bar");
    const ham = document.querySelector(".NavbarLinks");
    bars.forEach(bar => bar.classList.remove("barOne", "barTwo", "barThree"));
    ham.classList.remove("showNavbar");
  };

  return (
    <nav className={navbarblur ? "Navbar blur" : "Navbar"}>
      <h2 title="Logo" className="Logo" onClick={closeMenu}>
        AM
      </h2>

      <div className="Hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className="NavbarLinks">
        <li onClick={closeMenu}>
          <Link to="/">
            <AiOutlineHome /> <span className="link-text">Home</span>
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/About">
            <BsPerson /> <span className="link-text">About</span>
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/Project">
            <BsCodeSlash /> <span className="link-text">Projects</span>
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/Contact">
            <CgPhone />
            <span className="link-text">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
