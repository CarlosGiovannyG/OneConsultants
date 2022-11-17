import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/abstract.module.css";
import Loader from "./Loader";
const Abstract = () => {
  const dataUser = useSelector((state) => state.dataUser);
  const dataUserSchool = useSelector((state) => state.dataUserSchool);


  
  return (
    <div className={styles.containerAbstract}>
      <div className={styles.dataPerson}>
        <h3>Datos Personales</h3>
        <span>Nombre {dataUser.name}</span>
        <span>Apellido {dataUser.lastname}</span>
        <span>E-Mail {dataUser.email}</span>
        <span>Teléfono {dataUser.phone}</span>
        <span>C. C. {dataUser.document}</span>
      </div>
      <div className={styles.dataPerson}>
        <h3>Datos Académicos</h3>
        <span>Colegio {dataUserSchool.name}</span>
        <span>Ciudad {dataUserSchool.city}</span>
        <span>E-Mail {dataUserSchool.email}</span>
        <span>Teléfono {dataUserSchool.phone}</span>
        <span>Profesor(a) {dataUserSchool.teacher}</span>
      </div>
      <div className={styles.containerButton}>
        <button>Confirmar Registro</button>
      </div>
    </div>
  );
};

export default Abstract;
