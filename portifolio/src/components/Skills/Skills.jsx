import React from "react";
import IconsBar from "../IconsBar/IconsBar";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <div className={styles.skills} id="skills">
      <h2>Habilidades</h2>

      <div className={styles.skills_icons}>
        <IconsBar start="0" finish="8" imgSize="3.5vw"></IconsBar>
        <IconsBar start="8" imgSize="3.5vw"></IconsBar>
      </div>
    </div>
  );
}

export default Skills;
