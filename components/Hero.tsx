import React from "react";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <header className={styles.hero + ' home'}>
      <h1>Creative</h1>
      <div>
        <h1>Digital</h1>
        <p>
          Goba is an agency with 10+ years of <br />
          experience that has helped more than
          <br />
          300+ projects from small to large projects
        </p>
      </div>

      <h1>Agency</h1>
    </header>
  );
};

export default Hero;
