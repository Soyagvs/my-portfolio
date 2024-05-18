import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://github.com/Soyagvs" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/soyagvs/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="mailto:soyagvs@gmail.com" target="_blank" rel="noopener noreferrer">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

