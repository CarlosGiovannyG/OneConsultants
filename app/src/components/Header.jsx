import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";
import styles from "../styles/header.module.css";
import Modal from "./Modal";
const Header = () => {

  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.showModal);

  const open = () => {
    dispatch(actions.openModal());
  };

  const close = () => {
    dispatch(actions.closeModal());
  };

  return (
    <header className={styles.header}>
      <h3 className={styles.logo}>One Consultants</h3>
      <button onClick={open} className={styles.create}>
        Crear Usuario
      </button>
      <Modal open={open} isOpen={showModal} closeModal={close}>
        <div>
          <h1>Este es el modal</h1>
          <img src="https://placeimg.com/400/400/animals" alt="Animals" />
        </div>
      </Modal>
    </header>
  );
};

export default Header;
