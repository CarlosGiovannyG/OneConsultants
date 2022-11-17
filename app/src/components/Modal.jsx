import React from "react";
import styles from "../styles/modal.module.css";
import Closed from "./Closed";

const Modal = ({ children,close,showModal }) => {
  const handlePropagation = (e) => e.stopPropagation();


  return (
    <article
      className={showModal ? styles.open : styles.close}
      onClick={close}
    >
      <div className={styles.container} onClick={handlePropagation}>
        <Closed style={styles.closed} click={close} />
        {children}
      </div>
    </article>
  );
};

export default Modal;
