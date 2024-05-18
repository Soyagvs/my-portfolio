import { FaGithub } from 'react-icons/fa';
import { CgFileDocument } from 'react-icons/cg';
import './ProjectBox.css';

const ProjectBox = ({ projectPhoto, projectName, projectDesc, projectGithub, projectWebsite }) => {
  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt={`${projectName} display`} title={`${projectName} project`} loading="lazy" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        <p>{projectDesc}</p>
        <br />
        <a href={projectGithub} target="_blank" rel="noopener noreferrer">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>
        <a href={projectWebsite} target="_blank" rel="noopener noreferrer">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
