import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <a href="#home" className={styles.logo}>
          <img src={logo} alt="Logo" />
        </a>
        <nav className={styles.navbar}>
          <a href="#home">Início</a>
          <a href="#about">Sobre mim</a>
          <a href="#skills">Habilidades</a>
          <a href="#projects">Projetos</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
