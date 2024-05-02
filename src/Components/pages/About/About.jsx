import React from "react";
import Skills from "../../Skills.jsx";
import cv from "../../../../public/AM-CV.pdf";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h2 className="AboutTextHeading">
            About <strong>me</strong>
          </h2>
          <p>
            Hello, I am <strong>Agustín Martínez</strong>, a passionate web developer specialized in <strong>frontend</strong>, 25 years old. <br />
            <br />
            My passion for creation and design leads me to constantly look for new ways to improve the user experience through intuitive and attractive interfaces. <br />
            <br />
            My goal is to merge my technical expertise with my passion for design to create digital experiences that are not only <strong>functional</strong>, but also visually impactful. <br />
            <br />
            I am always looking to <strong>learn</strong> and <strong>grow</strong> in this ever-evolving world and I am excited to share my work with you.
          </p>

          <a href={cv} download>
            <button>
              Download Resume
            </button>
          </a>
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Tailwind" />
        <Skills skill="Bootstrap" />
        <Skills skill="Laravel" />
        <Skills skill="Github" />
        <Skills skill="Node" />
      </div>
    </>
  );
};

export default About;
