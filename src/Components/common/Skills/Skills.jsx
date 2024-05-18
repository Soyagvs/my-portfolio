import React from "react";
import "../Skills/Skills.css";

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
    HTML: { icon: <FaHtml5 />, label: "HTML5" },
    CSS: { icon: <FaCss3 />, label: "CSS3" },
    Javascript: { icon: <DiJavascript1 />, label: "JavaScript" },
    React: { icon: <FaReact />, label: "React" },
    Tailwind: { icon: <SiTailwindcss />, label: "Tailwind CSS" },
    Bootstrap: { icon: <FaBootstrap />, label: "Bootstrap" },
    Github: { icon: <FaGithub />, label: "GitHub" },
    Npm: { icon: <FaNpm />, label: "npm" },
    Laravel: { icon: <FaLaravel />, label: "Laravel" },
    Node: { icon: <FaNodeJs />, label: "Node.js" },
  };

  const renderSkillIcon = () => {
    if (skill && icon[skill]) {
      return (
        <div title={icon[skill].label} className="SkillBox">
          {icon[skill].icon}
        </div>
      );
    } else {
      return null; // O podrías renderizar un mensaje de error en lugar de nada
    }
  };

  return renderSkillIcon();
};

export default Skills;

