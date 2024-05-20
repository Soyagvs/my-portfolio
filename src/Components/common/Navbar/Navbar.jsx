import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../Navbar/Navbar.css";

const Nav = () => {
  const [navbarblur, setNavbarBlur] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setNavbarBlur(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={navbarblur ? "Navbar blur" : "Navbar"}>
      <h2 title="Logo" className="Logo" onClick={closeMenu}>
        AM
      </h2>

      <div className="Hamburger" onClick={toggleMenu}>
        {menuOpen ? (
          <AiOutlineClose className="icon" />
        ) : (
          <AiOutlineMenu className="icon" />
        )}
      </div>

      <ul className={`NavbarLinks ${menuOpen ? "showNavbar" : ""}`}>
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
