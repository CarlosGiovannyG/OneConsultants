import React from "react";
import styles from "../styles/header.module.css";
const Header = () => {
 
  return <header className={styles.header}>
   <h3 className={styles.logo}>One Consultants</h3>
  <button className={styles.create}>Crear Usuario</button>
  
  </header>;
};

export default Header;
