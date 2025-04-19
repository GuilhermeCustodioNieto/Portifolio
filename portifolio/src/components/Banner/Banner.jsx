import React from "react";
import styles from "./Banner.module.css";
import tagIcon from "../../assets/tag_icon.png";
import pcIcon from "../../assets/pc_icon.png";

function Banner({ text }) {
  return (
    <div className={styles.banner} id="#home">
      <div className={styles.container_mini_icon1}>
        <img src={pcIcon} alt="Computer" />
      </div>
      <div className={styles.banner_text}>
        <h1>{text}</h1>

        <h2>Desenvolvedor Full-Stack</h2>
      </div>
      <div className={styles.container_mini_icon2}>
        <img src={tagIcon} alt="Tag" />
      </div>
    </div>
  );
}

export default Banner;
