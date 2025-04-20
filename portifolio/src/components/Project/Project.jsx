import React from "react";
import styles from "./Project.module.css";
import styled from "styled-components";

function Project({ project }) {
  const ProjectImage = styled.div`
    width: 31.948vw;
    height: 33vh;
    border-radius: 10px;
    border: 0.1px solid #e6e6e61a;
    background: url(${project.img}) no-repeat center center;
    background-size: cover;
  `;

  return (
    <a href={project.link}>
      <div className={styles.project}>
        <ProjectImage></ProjectImage>
        <div>
          <div>
            <h3 className={styles.project_title}>{project.title}</h3>
            <p className={styles.project_tecnologies}>
              {project.tecnologies.join(" | ")}
            </p>
          </div>

          <p className={styles.project_description}>{project.description}</p>
        </div>
      </div>
    </a>
  );
}

export default Project;
