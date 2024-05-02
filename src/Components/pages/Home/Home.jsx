import React from "react";
import { Link } from "react-router-dom";
import Type from "../../Type.jsx";
import Tilt from "react-parallax-tilt";
import Avatar from "../../../assets/img/user.png";
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h2>Hello there!</h2>
          <h1>
            I'm <strong>Agustin Martinez</strong>
          </h1>
          <Type />
          <Link to="/About">
            <button className="blue">
              About Me
              <BsPerson />
            </button>
          </Link>

          <Link to="/Contact">
            <button className="green">
              Contact <CgPhone />
            </button>
          </Link>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="Imagen de perfil" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
