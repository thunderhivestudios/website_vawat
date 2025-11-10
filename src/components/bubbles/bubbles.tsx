import React from "react";
import styles from "./bubbles.module.css";

const Bubbles: React.FC = () => {
  return (
    <div className={styles.ocean}>
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className={`${styles.bubble} ${styles[`bubble${i + 1}`]}`} />
      ))}
    </div>
  );
};

export default Bubbles;
