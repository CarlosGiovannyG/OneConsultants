import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";
import styles from "../styles/abstract.module.css";
import Loader from "./Loader";
const Abstract = () => {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.dataUser);
  const dataUserSchool = useSelector((state) => state.dataUserSchool);
  const loading = useSelector((state) => state.loading);

  const confirmHandler = () => {
    const {
      name,
      lastname,
      email,
      phone,
      document,
      nameSchool,
      citySchool,
      emailSchool,
      phoneSchool,
      teacher,
    } = { ...dataUser, ...dataUserSchool };

    const userData = {
      name,
      lastname,
      email,
      phone,
      document,
      nameSchool,
      citySchool,
      emailSchool,
      phoneSchool,
      teacher,
    };

    dispatch(actions.registerUser(userData));

    setTimeout(() => {
      dispatch(actions.closeAbstract());
      dispatch(actions.clearState());
    }, 2000);
  };

  return (
    <div className={styles.containerAbstract}>
      {loading && <Loader />}
      <div className={styles.dataPerson}>
        <h3>Datos Personales</h3>
        <span>
          Nombre:<p>{dataUser.name}</p>
        </span>
        <span>
          Apellido:<p>{dataUser.lastname}</p>
        </span>
        <span>
          E-Mail: <p>{dataUser.email}</p>
        </span>
        <span>
          Teléfono: <p>{dataUser.phone}</p>
        </span>
        <span>
          C. C.: <p>{dataUser.document}</p>
        </span>
      </div>
      <div className={styles.dataPerson}>
        <h3>Datos Académicos</h3>
        <span>
          Colegio: <p>{dataUserSchool.nameSchool}</p>
        </span>
        <span>
          Ciudad: <p>{dataUserSchool.citySchool}</p>
        </span>
        <span>
          E-Mail: <p>{dataUserSchool.emailSchool}</p>
        </span>
        <span>
          Teléfono: <p>{dataUserSchool.phoneSchool}</p>
        </span>
        <span>
          Profesor(a): <p>{dataUserSchool.teacher}</p>
        </span>
      </div>
      <div className={styles.containerButton}>
        {!loading && (
          <button onClick={confirmHandler}>Confirmar Registro</button>
        )}
      </div>
    </div>
  );
};

export default Abstract;
