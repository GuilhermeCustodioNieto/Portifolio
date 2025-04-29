import React from "react";
import styles from "./IconsBar.module.css";
import icons from "../../services/Icons.json";
import styled from "styled-components";

function IconsBar({ start, finish, imgSize }) {
  if (finish == undefined) finish = icons.icons.length;

  const limitedIcons = icons.icons.slice(start, finish);

  const Img = styled.img`
    width: ${imgSize};
    margin: 0.5vw;
    transition: 0.5s;

    @media (max-width: 768px) {
      transform: scale(3);
      margin: 1vw;
    }
  `;

  return (
    <div className={styles.icons_bar}>
      {limitedIcons.map((icon, index) => (
        <Img key={index} src={icon.src} alt={icon.alt} />
      ))}
    </div>
  );
}

export default IconsBar;
