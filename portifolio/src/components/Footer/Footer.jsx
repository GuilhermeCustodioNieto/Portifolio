import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_text}>
        <img src="/Logo.png" alt="Logo" />
        <p>&amp; Todos os direitos reservados</p>
      </div>
      <div className={styles.footer_icons}>
        <a href="https://www.instagram.com/guih_nieto/s">
          <img src="/icons/instagram-icon.png" alt="Instagram icon" />
        </a>
        <a href="https://github.com/GuilhermeCustodioNieto">
          <img src="/icons/github-icon.png" alt="GitHub icon" />
        </a>
        <a href="https://www.linkedin.com/in/guilherme-cust%C3%B3dio-nieto/">
          <img src="/icons/linkedin-icon.png" alt="Linkedin Icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
