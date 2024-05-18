import React from "react";
import { Link } from "react-router-dom";
import Type from "../../Type.jsx";
import Tilt from "react-parallax-tilt";
import Avatar from "../../../../public/assets/img/user.png";
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
import "../Home/Home.css";

const Home = () => {
  return (
    <main>
      <div className="HomePage">
        <div className="HomeText">
          <h2>Hello there!</h2>
          <h1>
            I'm <strong>Agustin Martinez</strong>
          </h1>
          <Type />
          <div className="btn">
            <Link to="/About">
              <button className="blue">
                About Me <BsPerson />
              </button>
            </Link>

            <Link to="/Contact">
              <button className="green">
                Contact <CgPhone />
              </button>
            </Link>
          </div>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="Profile Avatar" />
        </Tilt>
      </div>
    </main>
  );
};

export default Home;
