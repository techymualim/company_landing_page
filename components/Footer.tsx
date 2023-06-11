import React from 'react'
import Image from "next/image";
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <footer className={styles.footer}>
        <section>
            <h2>Let's Collaborate<br/>With us!</h2>
            <Image
             className={styles.image}
          src="/lets_talk.png"
          alt="lets_talk_circle"
          width={100}
          height={100}
          priority
        />
        </section>
        <div className={styles.line} />
        <section>
      
            <div>
            <Image
          src="/logo.svg"
          alt="Company Logo"
          width={100}
          height={100}
          priority
        />
        <p className={styles.paraOne}>Goba is an agency with 10+ years of<br/>
experience that has helped more than<br/>
300+ projects from small to large projects</p>
        <p className={styles.paraTwo}>2022 Terke. All rights reserved</p>
            </div>
            <div>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Projects</li>
            </ul>
            <ul>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Office</li>
              
            </ul>
            <ul>
                <li>Social Media</li>
                <li>Dribbble</li>
                <li>Behance</li>
                <li>Linkedin</li>
                <li>Facebook</li>
            </ul>
            </div>
        </section>
    </footer>
  )
}

export default Footer