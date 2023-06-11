import React from 'react';
import Image from 'next/image';
import styles from './OfferingBox.module.css';

interface OfferingBoxProps {
  num: string;
  headingOne: string;
  desc: string;
}

const OfferingBox: React.FC<OfferingBoxProps> = ({ num, headingOne, desc }) => {
  return (
    <section className={styles.offering_box}>
      <div>
        <h4>{num}</h4>
        <div>
          <h2 >{headingOne}</h2>
          <p dangerouslySetInnerHTML={{ __html: desc }}/>
        </div>
      </div>
      <Image
        className={styles.arrow_icon}
        src="/iconoir_arrow-br.png"
        alt="placeholder"
        width={100}
        height={100}
        priority
      />
    </section>
  );
};

export default OfferingBox;
