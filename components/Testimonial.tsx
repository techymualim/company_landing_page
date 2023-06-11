import React from 'react'

import styles from "./Testimonial.module.css"

const Testimonial = () => {
  return (
    <div className={styles.center}>
 <section className={styles.testimonial}>
        <h1>
        “I really enjoyed working with you<br/>
guys, you guys are very<br/> 
communicative and quick to do<br/>
the job. I really can’t wait to work
with you again!”
        </h1>
        <p className={styles.paraOne}>
            Farhan Bagas
        </p>
        <p className={styles.paraTwo}>
        C E O  MIONG  
        </p>
    </section>
    </div>
   
  )
}

export default Testimonial