import React from "react";
import styles from "../styles/modal.module.css";
import Closed from "./Closed";

const Modal = ({ children, isOpen, closeModal }) => {
  const handlePropagation = (e) => e.stopPropagation();

  return (
    <article
      className={isOpen ? styles.open : styles.close}
      onClick={closeModal}
    >
      <div className={styles.container} onClick={handlePropagation}>
        <Closed style={styles.closed} click={closeModal} />
        {children}
      </div>
    </article>
  );
};

export default Modal;
