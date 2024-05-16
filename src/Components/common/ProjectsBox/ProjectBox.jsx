import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import "../ProjectsBox/ProjectBox.css"

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    ShoppGuitarDesc:
      "This site is for buying guitars, with a reactive shopping cart made with react and hosted on vercel.",
    ShoppGuitarGithub: "https://github.com/Soyagvs/shopping-cart-reactjs",
    ShoppGuitarWebsite: "https://shopping-guitar.vercel.app/",

    WeatherAppDesc:
      "This website is based on a weather app consuming an API and is hosted on vercel.",
    WeatherAppGithub: "https://github.com/Soyagvs/app-clima-react",
    WeatherAppWebsite: "https://climacity-api.vercel.app/",

    /*ColourPaletteDesc:
          "This website helps you generate random colours that you can use as a palette.The project helped me understand Javascript more deeply using advance techniques",
        ColourPaletteGithub: "https://github.com/EshaalB/Colour-palette-Generator",
        ColourPaletteWebsite: "https://colourpalettegen.netlify.app",
    
        BackpackDesc:
          "This webpageis was made for an ecommerce brand showcasing their backpacks.The project taught me how to use custom cursors and arrange text in a much better way",
        BackpackGithub: "https://github.com/EshaalB/Landing-Page--React-",
    BackpackWebsite: "https://landing-page-react-sage.vercel.app/",*/
  };

  return (

    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" title="Title project" loading="lazy" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;

