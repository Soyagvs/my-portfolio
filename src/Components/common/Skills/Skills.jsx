import React from "react";
import "../Skills/Skills.css"

import {
  FaReact,
  FaGithub,
  FaNpm,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaLaravel,
  FaNodeJs,


} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    React: <FaReact />,
    Tailwind: <SiTailwindcss />,
    Bootstrap: <FaBootstrap />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Laravel: <FaLaravel />,
    Node: <FaNodeJs />
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
