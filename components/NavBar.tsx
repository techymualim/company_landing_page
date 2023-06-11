"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className={styles.nav}>
      <div className={`${styles.container} ${styles.mainNav}`}>
        {/* Desktop Nav */}
        <div>
          <Image
            src="/logo.svg"
            alt="Company Logo"
            width={80}
            height={80}
            priority
          />
        </div>

        <div className={styles.navLinksContainer}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/#home">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="/#service">Service</Link>
            </li>
            <li>
              <Link href="/#project">Project</Link>
            </li>
          </ul>
          <button>Contact Us</button>
        </div>

        {/* Mobile Nav */}
        <div className={styles.mainMobileMenu}>
          <button
            className={styles.hamburgerButton}
            onClick={handleHamburgerClick}
          >
            <Image
              src="/hamburger.svg"
              alt="hamburger-icon"
              className={styles.hamburgerIcon}
              width={30}
              height={30}
            />
          </button>

          <div
            className={
              isMenuOpen
                ? `${styles.mobileMenu} ${styles.showMobileMenu}`
                : styles.mobileMenu
            }
          >
            <ul>
              <li>
                <Link href="/#home">Home</Link>
              </li>
              <li>
                <Link href="/#about">About</Link>
              </li>
              <li>
                <Link href="/#service">Service</Link>
              </li>
              <li>
                <Link href="/#project">Project</Link>
              </li>
            </ul>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
