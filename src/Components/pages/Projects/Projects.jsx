import React from "react";
import ProjectBox from "../../common/ProjectsBox/ProjectBox.jsx"
import "../Projects/Projects.css";
import photo from "../../../assets/img/shopping-guitar.png"
import photo2 from "../../../assets/img/weatherApp.png"

const Projects = () => {
  return (
    <div>
      <h2 className="projectHeading">
        My <strong>Projects</strong>
      </h2>
      <div className="project">
        <ProjectBox projectPhoto={photo} projectName="ShoppGuitar" />
        <ProjectBox projectPhoto={photo2} projectName="WeatherApp" />
        {/*<ProjectBox projectPhoto="../../../../public/shopping-guitar.png" projectName="ColourPalette" />
        <ProjectBox projectPhoto="../../../../public/shopping-guitar.png" projectName="Backpack" />*/}
      </div>
    </div>
  );
};

export default Projects;
