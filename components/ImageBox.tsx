import React from 'react'
import Image from "next/image";
import styles from "./ImageBox.module.css"

const ImageBox = () => {
  return (
  <section className={styles.box_image}>
    <div>
    <Image
    className={styles.image}
          src="/image_one.png"
          alt="image"
          width={500}
          height={700}
          priority
        />
         <Image
          className={styles.image}
          src="/image_two.png"
          alt="image"
          width={700}
          height={700}
          priority
        />
    </div>
    <div>
    <Image
     className={styles.image}
          src="/image_three.png"
          alt="image"
          width={500}
          height={800}
          priority
        />
         <Image
          className={styles.image}
          src="/image_four.png"
          alt="image"
          width={800}
          height={800}
          priority
        />
    </div>
  </section>
  )
}

export default ImageBox