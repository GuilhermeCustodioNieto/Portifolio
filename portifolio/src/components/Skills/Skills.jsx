import React from "react";
import IconsBar from "../IconsBar/IconsBar";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <div className={styles.skills}>
      <h2>Habilidades</h2>

      <IconsBar start="0" finish="8" imgSize="3.5vw"></IconsBar>
      <IconsBar start="8" imgSize="3.5vw"></IconsBar>
    </div>
  );
}

export default Skills;
