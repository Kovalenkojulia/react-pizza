import React from "react";
import styles from "./NotFoundBlock.module.scss";
console.log(styles);

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>Error 404 </h1>

      <p className={styles.description}>This page not found</p>
    </div>
  );
};

export default NotFoundBlock;
