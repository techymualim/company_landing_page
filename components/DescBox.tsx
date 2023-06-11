import React from "react";
import styles from "./DescBox.module.css";

interface DescBoxProps {
  id:string;
  headingOne: string;
  headingTwo: string;
  desc: string;
  button: string;
}

const DescBox: React.FC<DescBoxProps> = ({
  id,
  headingOne,
  headingTwo,
  desc,
  button,
}) => {
  return (
    <section id={id} className={styles.descbox}>
      <div>
        <h3>{headingOne}</h3>
        <h2 dangerouslySetInnerHTML={{ __html: headingTwo }} />
      </div>
      <div>
        <p dangerouslySetInnerHTML={{ __html: desc }} />
        <button> {button}</button>
      </div>
    </section>
  );
};

export default DescBox;
