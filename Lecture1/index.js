import React from "react";
import styles from "./index.module.css";

export default function Lecture1() {
  return (
    <div className={styles.Lecture1}>
      <h1 className={styles.title}>
        This lecture is about the difference between functional component and
        class component
      </h1>
      <h2 className={styles.subtitle}>
        This red color heading is created by using{" "}
        <strong>Functional Compnonent</strong>
      </h2>
    </div>
  );
}
