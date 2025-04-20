import React from "react";
import styles from "./Projects.module.css";
import projects from "../../services/Projects.json";
import Project from "../Project/Project";

function Projects() {
  return (
    <div className={styles.projects} id="projects">
      <h2>Projetos</h2>

      {projects.map((project) => {
        return <Project project={project}></Project>;
      })}
    </div>
  );
}

export default Projects;
