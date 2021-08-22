import React from "react";
import styles from "./IndAbout.module.css";

function IndAbout(props: any) {
  const { src, name, text } = props;

  return (
    <div>
      <div className={styles.item}>
        <div className={styles.box}>
          <div className={styles.grid}>
            <div className={styles.info}>{text}</div>
            <div className={styles.container}>
              <img alt="person" src={src} className={styles.image} />
              <h1 className={styles.namepos}>{name}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndAbout;
