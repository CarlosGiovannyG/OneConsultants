import React from "react";
import styles from "../styles/userList.module.css";

const UserList = ({ users }) => {
  return (
    <div className={styles.containerList}>
      <div className={styles.container}>
        <table className={styles.tableStyle}>
          <caption>Listado de Estudiantes Registrados</caption>
          <tr>
            <th className={styles.colgroupOne} colspan="5">
              Datos Personales
            </th>
            <th className={styles.colgroupTwo} colspan="5">Datos escolares</th>
          </tr>
          <tr className={styles.tableHeader}>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Documento</th>
            <th>Escuela</th>
            <th>Ciudad</th>
            <th>Email de Contacto</th>
            <th>Teléfono de Cont</th>
            <th>Profesor</th>
          </tr>
          {users &&
            users.map((user) => (
              <tr className={styles.tableBody} key={user._id}>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.document}</td>
                <td>{user.nameSchool}</td>
                <td>{user.citySchool}</td>
                <td>{user.emailSchool}</td>
                <td>{user.phoneSchool}</td>
                <td>{user.teacher}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default UserList;
