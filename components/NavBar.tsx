import React from "react";
import Image from "next/image";
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <nav  className={styles.nav}> 
      <div>
        <Image
          src="/logo.svg"
          alt="Company Logo"
          width={100}
          height={100}
          priority
        />
      </div>

      <div>
        <ul>
          <li><a href="">Home</a></li>
          <li>About Us</li>
          <li>Service</li>
          <li>Project</li>
        </ul>
        <button> Contact Us</button>
      </div>

      
    </nav>
  );
};

export default NavBar;
