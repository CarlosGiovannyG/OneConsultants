import React from "react";
import { useDispatch } from "react-redux";
import actions from "../redux/actions";
import styles from "../styles/header.module.css";
const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <h3 className={styles.logo}>One Consultants</h3>
      <button
        onClick={() => dispatch(actions.openModal())}
        className={styles.create}
      >
        Crear Usuario
      </button>
    </header>
  );
};

export default Header;
