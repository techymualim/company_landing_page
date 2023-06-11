import React from 'react'
import Image from "next/image";
import styles from "./LogoBox.module.css"

const LogoBox = () => {
  return (
    <section className={styles.logobox}>
      
       <Image
          src="/walmart.png"
          alt="Walmart Logo"
          width={100}
          height={100}
          priority
        />
        <Image
          src="/google.png"
          alt="Google Logo"
          width={100}
          height={100}
          priority
        />
        <Image
          src="/hubspot.png"
          alt="Hubspot Logo"
          width={100}
          height={100}
          priority
        />
        <Image
          src="/fedex.png"
          alt="Fedex Logo"
          width={100}
          height={100}
          priority
        />
        <Image
          src="/microsoft.png"
          alt="Microsoft Logo"
          width={100}
          height={100}
          priority
        />
     
    </section>
  )
}

export default LogoBox