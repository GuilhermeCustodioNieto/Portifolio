import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.about_container} id="about">
      <h2>Sobre mim</h2>
      <div className={styles.about}>
        <div className={styles.about_details}>
          <img src="my-img.jpg" alt="" className={styles.my_img} />
          <div className={styles.about_subdetails}>
            <h3>Guilherme Custódio Nieto</h3>
            <p>Desenvolvedor Full-Stack</p>
            <a href="https://drive.google.com/uc?export=download&id=1OVrz89XZVEcDDlNqDfsrRE5OM2je3dQb">
              Baixar CV
            </a>

            <div className={styles.about_icons}>
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
          </div>
        </div>
        <div className={styles.about_description}>
          <p>
            Olá, me chamo Guilherme Custódio Nieto. Sou um estudante apaixonado
            por TI e por conhecimento, buscando me aprimorar a cada dia mais.
          </p>
          <p>
            Tenho experiência em projetos com diversas técnologias, porém meu
            foco sempre foi em desenvolvimento Full-Stack.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
